import React from 'react'
import { useScroll, useMotionValueEvent, useIsomorphicLayoutEffect } from 'framer-motion'
import { ADDRESS, DEADLINE } from '@/shared/constants'
import { HiddenText, Icon } from '@/shared/ui'
import { useWindowEvent } from '@/shared/hooks'
import { computePartProgress } from '@/shared/utils'
import { TOTAL_FRAME } from '../constants'
import { getFrameProgress, getFrameImage, formatDeadline } from '../utils'
import { introStyle, introTitleStyle, scrollGuideStyle, introVideoStyle } from './Intro.style'

const partAnimation = {
  guideFadeInOut: {
    start: 0.25,
    end: 0.5,
  },
  videoFadeInOut: {
    start: 0.75,
    end: 1,
  },
  titleFadeIn: [
    {
      start: 0.1,
      end: 0.2,
    },
    {
      start: 0.2,
      end: 0.3,
    },
    {
      start: 0.3,
      end: 0.4,
    },
  ],
  titleFadeOut: [
    {
      start: 0.6,
      end: 0.7,
    },
    {
      start: 0.7,
      end: 0.8,
    },
    {
      start: 0.8,
      end: 0.9,
    },
  ],
}

export default function Intro() {
  const [isLoading, setLoading] = React.useState(true)

  const canvasRef = React.useRef<HTMLCanvasElement | null>(null)
  const canvasContext = React.useRef<CanvasRenderingContext2D | null>(null)
  const videoFrame = React.useRef<HTMLImageElement[]>([])
  const loadedImageCount = React.useRef(0)

  React.useEffect(() => {
    const canvasEl = canvasRef.current
    canvasContext.current = canvasEl?.getContext('2d') ?? null
    videoFrame.current = Array.from({ length: TOTAL_FRAME }, (_, i) => {
      const imgEl = new Image()
      imgEl.src = getFrameImage(i)
      imgEl.onload = () => {
        loadedImageCount.current += 1
        setLoading(TOTAL_FRAME === loadedImageCount.current)
      }
      return imgEl
    })
  }, [])

  const containerRef = React.useRef<HTMLElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  useIsomorphicLayoutEffect(() => {
    const progress = scrollYProgress.get()
    const currentFrame = getFrameProgress(progress)
    const canvasEl = canvasRef.current
    canvasEl?.style.setProperty('background-image', `url("${getFrameImage(currentFrame)}")`)
  }, [isLoading])

  useMotionValueEvent(scrollYProgress, 'change', progress => {
    requestAnimationFrame(() => {
      const context = canvasContext.current
      const currentFrame = getFrameProgress(progress)
      context?.drawImage(videoFrame.current[currentFrame], 0, 0)
    })
  })

  const [isLandscape, setLandscape] = React.useState(false)
  const checkLandscape = React.useCallback(() => {
    setLandscape(window.innerHeight / window.innerWidth < 0.5625)
  }, [])

  useIsomorphicLayoutEffect(checkLandscape, [])
  useWindowEvent('resize', checkLandscape)

  const scrollGuideRef = React.useRef<HTMLParagraphElement | null>(null)

  useMotionValueEvent(scrollYProgress, 'change', progress => {
    requestAnimationFrame(() => {
      const { start, end } = partAnimation.guideFadeInOut
      const scrollGuideEl = scrollGuideRef.current
      const partProgress = computePartProgress({ progress, start, end })
      scrollGuideEl?.style.setProperty('--opacity', String(1 - partProgress))
      scrollGuideEl?.style.setProperty('--translateY', `-${partProgress * 30}%`)
      scrollGuideEl?.classList[partProgress === 1 ? 'add' : 'remove']('hidden')
    })
  })

  const titleContainerRef = React.useRef<HTMLHeadingElement | null>(null)

  useMotionValueEvent(scrollYProgress, 'change', progress => {
    requestAnimationFrame(() => {
      const titleContainerEl = titleContainerRef.current
      const titleEls = titleContainerEl?.querySelectorAll('span')
      titleEls?.forEach((titleEl, i) => {
        const { start: fs, end: fe } = partAnimation.titleFadeIn[i]
        const { start: bs, end: be } = partAnimation.titleFadeOut[i]
        const forwardProgress = computePartProgress({ progress, start: fs, end: fe })
        const backwardProgress = computePartProgress({ progress, start: bs, end: be })

        if (backwardProgress === 0) {
          titleEl.style.setProperty('--opacity', String(forwardProgress))
          titleEl.style.setProperty('--translateY', `${forwardProgress * 30}%`)
        }
        if (forwardProgress === 1) {
          titleEl.style.setProperty('--opacity', String(1 - backwardProgress))
          titleEl.style.setProperty('--translateY', `${30 - backwardProgress * 30}%`)
        }
        if (i === 0) {
          titleContainerEl?.classList[forwardProgress === 0 ? 'add' : 'remove']('forward')
        }
        if (i === titleEls.length - 1) {
          titleContainerEl?.classList[backwardProgress === 1 ? 'add' : 'remove']('backward')
        }
      })
    })
  })

  const videoContainerRef = React.useRef<HTMLDivElement | null>(null)

  useMotionValueEvent(scrollYProgress, 'change', progress => {
    requestAnimationFrame(() => {
      const { start, end } = partAnimation.videoFadeInOut
      const videoContainerEl = videoContainerRef.current
      const partProgress = computePartProgress({ progress, start, end })
      videoContainerEl?.style.setProperty('--opacity', String(1 - partProgress))
    })
  })

  return (
    <section id="introduction" ref={containerRef} css={introStyle}>
      <h2 ref={titleContainerRef} className="forward" css={introTitleStyle}>
        <span>2024</span>
        <span>SYNERGY</span>
        <span>MEET</span>
      </h2>
      <p ref={scrollGuideRef} css={scrollGuideStyle}>
        <strong>{formatDeadline(DEADLINE)}</strong>
        <span>
          {ADDRESS.split('\n').map(separated => (
            <React.Fragment key={separated}>
              {separated}
              <br />
            </React.Fragment>
          ))}
        </span>
        <Icon.AltArrowDown />
      </p>
      <div ref={videoContainerRef} css={introVideoStyle}>
        {isLoading && (
          <p>
            <Icon.BarsRotateFadeSpinner style={{ fontSize: '2.25rem' }} />
            <HiddenText>로딩 중</HiddenText>
          </p>
        )}
        <canvas
          ref={canvasRef}
          className={isLandscape ? 'landscape' : undefined}
          width={1280}
          height={720}
        />
      </div>
    </section>
  )
}
