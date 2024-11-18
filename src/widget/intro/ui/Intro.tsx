import React from 'react'
import { motion, useScroll, useMotionValueEvent, useTransform } from 'motion/react'
import { ADDRESS, DEADLINE } from '@/shared/constants'
import { Icon } from '@/shared/ui'
import { computePartProgress, formatDeadline } from '@/shared/utils'
import { introStyle, introTitleStyle, scrollGuideStyle, introVideoStyle } from './Intro.style'

const frameRate = {
  guideFadeInOut: { start: 0.25, end: 0.5 },
  videoFadeInOut: { start: 0.75, end: 1 },
  title: [
    {
      fadeIn: { start: 0.1, end: 0.2 },
      fadeOut: { start: 0.6, end: 0.7 },
    },
    {
      fadeIn: { start: 0.2, end: 0.3 },
      fadeOut: { start: 0.7, end: 0.8 },
    },
    {
      fadeIn: { start: 0.3, end: 0.4 },
      fadeOut: { start: 0.8, end: 0.9 },
    },
  ],
}

export default function Intro() {
  const containerRef = React.useRef<HTMLElement | null>(null)
  const { scrollYProgress } = useScroll({ target: containerRef })

  const titleContainerRef = React.useRef<HTMLHeadingElement | null>(null)
  const titleProgressList = useTransform(scrollYProgress, (progress) => {
    return frameRate.title.map(({ fadeIn, fadeOut }) => ({
      forwardProgress: computePartProgress({ progress, ...fadeIn }),
      backwardProgress: computePartProgress({ progress, ...fadeOut }),
    }))
  })

  useMotionValueEvent(titleProgressList, 'change', (progressList) => {
    requestAnimationFrame(() => {
      const titleContainerEl = titleContainerRef.current
      const titleEls = titleContainerEl?.querySelectorAll('span')
      const isBackward = progressList[frameRate.title.length - 1].backwardProgress === 1

      titleEls?.forEach((titleEl, idx) => {
        const { forwardProgress, backwardProgress } = progressList[idx]

        if (backwardProgress === 0) {
          titleEl.style.setProperty('--opacity', forwardProgress.toString())
          titleEl.style.setProperty('--translateY', `${forwardProgress * 30}%`)
        }
        if (forwardProgress === 1) {
          titleEl.style.setProperty('--opacity', (1 - backwardProgress).toString())
          titleEl.style.setProperty('--translateY', `${30 - backwardProgress * 30}%`)
        }
      })
      titleContainerEl?.classList[isBackward ? 'add' : 'remove']('hidden')
    })
  })

  const scrollGuideProgress = useTransform(scrollYProgress, (progress) => {
    return computePartProgress({ progress, ...frameRate.guideFadeInOut })
  })
  const scrollGuideDisplay = useTransform(scrollGuideProgress, (progress) => {
    return progress === 1 ? 'none' : 'flex'
  })
  const scrollGuideOpacity = useTransform(scrollGuideProgress, (progress) => {
    return 1 - progress
  })
  const scrollGuideY = useTransform(scrollGuideProgress, (progress) => {
    return `-${progress * 30}%`
  })

  const videoRef = React.useRef<HTMLVideoElement | null>(null)
  const videoContainerProgress = useTransform(scrollYProgress, (progress) => {
    return computePartProgress({ progress, ...frameRate.videoFadeInOut })
  })
  const videoContainerOpacity = useTransform(videoContainerProgress, (progress) => {
    return 1 - progress
  })

  useMotionValueEvent(videoContainerProgress, 'change', (progress) => {
    const videoEl = videoRef.current
    videoEl?.[progress === 1 ? 'pause' : 'play']()
  })

  return (
    <section id="intro" ref={containerRef} css={introStyle}>
      <h2 ref={titleContainerRef} className="hidden" css={introTitleStyle}>
        <span>2024</span>
        <span>SYNERGY</span>
        <span>MEET</span>
      </h2>
      <motion.p
        css={scrollGuideStyle}
        style={{
          display: scrollGuideDisplay,
          opacity: scrollGuideOpacity,
          y: scrollGuideY,
        }}
      >
        <strong>{formatDeadline(DEADLINE)}</strong>
        <span>
          {ADDRESS.split('\n').map((separated) => (
            <React.Fragment key={separated}>
              {separated}
              <br />
            </React.Fragment>
          ))}
        </span>
        <Icon.AltArrowDown />
      </motion.p>
      <motion.div css={introVideoStyle} style={{ opacity: videoContainerOpacity }}>
        <video ref={videoRef} src="/video/intro.mp4" autoPlay loop muted />
      </motion.div>
    </section>
  )
}
