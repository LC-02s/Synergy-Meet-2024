import React from 'react'
import { type MotionValue, motion, useTransform } from 'motion/react'
import { computePartProgress } from '@/shared/utils'
import { introTitleStyle } from './Intro.style'

interface IntroTitleProps {
  scrollYProgress: MotionValue<number>
}

interface IntroTitleWordProps extends IntroTitleProps {
  fadeIn: { start: number; end: number }
  fadeOut: { start: number; end: number }
}

function IntroTitleWord({
  scrollYProgress,
  fadeIn,
  fadeOut,
  children,
}: React.PropsWithChildren<IntroTitleWordProps>) {
  const wordProgress = useTransform(scrollYProgress, (progress) => {
    return {
      forwardProgress: computePartProgress({ progress, ...fadeIn }),
      backwardProgress: computePartProgress({ progress, ...fadeOut }),
    }
  })

  const wordOpacity = useTransform(wordProgress, ({ forwardProgress, backwardProgress }) => {
    if (backwardProgress === 0) return forwardProgress
    if (forwardProgress === 1) return 1 - backwardProgress
    return 0
  })
  const wordY = useTransform(wordProgress, ({ forwardProgress, backwardProgress }) => {
    if (backwardProgress === 0) return `${forwardProgress * 30}%`
    if (forwardProgress === 1) return `${30 - backwardProgress * 30}%`
    return ''
  })

  return <motion.span style={{ opacity: wordOpacity, y: wordY }}>{children}</motion.span>
}

export default function IntroTitle({ scrollYProgress }: IntroTitleProps) {
  const titleProgress = useTransform(scrollYProgress, (progress) => {
    return computePartProgress({ progress, start: 0.1, end: 0.9 })
  })

  const titleDisplay = useTransform(titleProgress, (progress) => {
    if (progress === 0 || progress === 1) return 'none'
    return 'flex'
  })

  const computeWeight = (d: number, v: number) => d + v * 0.1

  return (
    <motion.h2 css={introTitleStyle} style={{ display: titleDisplay }}>
      {['2024', 'SYNERGY', 'MEET'].map((word, idx) => (
        <IntroTitleWord
          key={word}
          scrollYProgress={scrollYProgress}
          fadeIn={{ start: computeWeight(0.1, idx), end: computeWeight(0.2, idx) }}
          fadeOut={{ start: computeWeight(0.6, idx), end: computeWeight(0.7, idx) }}
        >
          {word}
        </IntroTitleWord>
      ))}
    </motion.h2>
  )
}
