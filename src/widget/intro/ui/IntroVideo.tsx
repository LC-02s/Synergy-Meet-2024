import React from 'react'
import { type MotionValue, motion, useMotionValueEvent, useTransform } from 'motion/react'
import { computePartProgress } from '@/shared/utils'
import { introVideoStyle } from './Intro.style'

interface IntroVideoProps {
  scrollYProgress: MotionValue<number>
}

export default function IntroVideo({ scrollYProgress }: IntroVideoProps) {
  const videoRef = React.useRef<HTMLVideoElement | null>(null)

  const videoFadeOutProgress = useTransform(scrollYProgress, (progress) => {
    return computePartProgress({ progress, start: 0.75, end: 1 })
  })
  const videoOpacity = useTransform(videoFadeOutProgress, (progress) => {
    return 1 - progress
  })

  const videoDarknessProgress = useTransform(scrollYProgress, (progress) => {
    return computePartProgress({ progress, start: 0, end: 0.4 })
  })
  const videoBrightness = useTransform(videoDarknessProgress, (progress) => {
    return `brightness(${100 - progress * 40}%)`
  })

  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    const videoEl = videoRef.current
    videoEl?.[progress === 1 ? 'pause' : 'play']()
  })

  return (
    <motion.div css={introVideoStyle} style={{ opacity: videoOpacity, filter: videoBrightness }}>
      <video ref={videoRef} autoPlay loop muted>
        <source src="/video/intro.webm" type="video/webm" />
        <source src="/video/intro.mp4" type="video/mp4" />
      </video>
    </motion.div>
  )
}
