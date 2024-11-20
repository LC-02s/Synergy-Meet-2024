import React from 'react'
import { type MotionValue, motion, useMotionValueEvent, useTransform } from 'motion/react'
import { computePartProgress } from '@/shared/utils'
import { introVideoStyle } from './Intro.style'

interface IntroVideoProps {
  scrollYProgress: MotionValue<number>
}

export default function IntroVideo({ scrollYProgress }: IntroVideoProps) {
  const videoRef = React.useRef<HTMLVideoElement | null>(null)
  const videoContainerProgress = useTransform(scrollYProgress, (progress) => {
    return computePartProgress({ progress, start: 0.75, end: 1 })
  })
  const videoContainerOpacity = useTransform(videoContainerProgress, (progress) => {
    return 1 - progress
  })

  useMotionValueEvent(videoContainerProgress, 'change', (progress) => {
    const videoEl = videoRef.current
    videoEl?.[progress === 1 ? 'pause' : 'play']()
  })

  return (
    <motion.div css={introVideoStyle} style={{ opacity: videoContainerOpacity }}>
      <video ref={videoRef} src="/video/intro.mp4" autoPlay loop muted />
    </motion.div>
  )
}
