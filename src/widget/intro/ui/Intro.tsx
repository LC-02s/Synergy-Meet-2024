import React from 'react'
import { useScroll, useMotionValueEvent } from 'framer-motion'
import { ADDRESS, DEADLINE } from '@/shared/constants'
import { Icon } from '@/shared/ui'
import { computePartProgress } from '@/shared/utils'
import { formatDeadline } from '../utils'
import { introStyle, introTitleStyle, scrollGuideStyle, introVideoStyle } from './Intro.style'

const frameRate = {
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
  const containerRef = React.useRef<HTMLElement | null>(null)
  const { scrollYProgress } = useScroll({ target: containerRef })

  const scrollGuideRef = React.useRef<HTMLParagraphElement | null>(null)

  useMotionValueEvent(scrollYProgress, 'change', progress => {
    requestAnimationFrame(() => {
      const { start, end } = frameRate.guideFadeInOut
      const scrollGuideEl = scrollGuideRef.current
      const partProgress = computePartProgress({ progress, start, end })
      scrollGuideEl?.style.setProperty('--opacity', (1 - partProgress).toString())
      scrollGuideEl?.style.setProperty('--translateY', `-${partProgress * 30}%`)
      scrollGuideEl?.classList[partProgress === 1 ? 'add' : 'remove']('hidden')
    })
  })

  const titleContainerRef = React.useRef<HTMLHeadingElement | null>(null)

  useMotionValueEvent(scrollYProgress, 'change', progress => {
    requestAnimationFrame(() => {
      const titleContainerEl = titleContainerRef.current
      const titleEls = titleContainerEl?.querySelectorAll('span')
      titleEls?.forEach((titleEl, idx) => {
        const forwardFrameRate = frameRate.titleFadeIn[idx]
        const backwardFrameRate = frameRate.titleFadeOut[idx]
        const forwardProgress = computePartProgress({ progress, ...forwardFrameRate })
        const backwardProgress = computePartProgress({ progress, ...backwardFrameRate })

        if (backwardProgress === 0) {
          titleEl.style.setProperty('--opacity', forwardProgress.toString())
          titleEl.style.setProperty('--translateY', `${forwardProgress * 30}%`)
        }
        if (forwardProgress === 1) {
          titleEl.style.setProperty('--opacity', (1 - backwardProgress).toString())
          titleEl.style.setProperty('--translateY', `${30 - backwardProgress * 30}%`)
        }
        if (idx === 0) {
          titleContainerEl?.classList[forwardProgress === 0 ? 'add' : 'remove']('forward')
        }
        if (idx === titleEls.length - 1) {
          titleContainerEl?.classList[backwardProgress === 1 ? 'add' : 'remove']('backward')
        }
      })
    })
  })

  const videoContainerRef = React.useRef<HTMLDivElement | null>(null)
  const videoRef = React.useRef<HTMLVideoElement | null>(null)

  useMotionValueEvent(scrollYProgress, 'change', progress => {
    const videoEl = videoRef.current
    videoEl?.[progress === 1 ? 'pause' : 'play']()
    requestAnimationFrame(() => {
      const { start, end } = frameRate.videoFadeInOut
      const videoContainerEl = videoContainerRef.current
      const partProgress = computePartProgress({ progress, start, end })
      videoContainerEl?.style.setProperty('--opacity', (1 - partProgress).toString())
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
        <video ref={videoRef} src="/video/intro.mp4" autoPlay loop muted />
      </div>
    </section>
  )
}
