import React from 'react'
import { type MotionValue, motion, useTransform } from 'motion/react'
import { computePartProgress, formatDeadline } from '@/shared/utils'
import { ADDRESS, DEADLINE } from '@/shared/constants'
import { Icon } from '@/shared/ui'
import { scrollGuideStyle } from './Intro.style'

interface ScrollGuideProps {
  scrollYProgress: MotionValue<number>
}

export default function ScrollGuide({ scrollYProgress }: ScrollGuideProps) {
  const scrollGuideProgress = useTransform(scrollYProgress, (progress) => {
    return computePartProgress({ progress, start: 0.25, end: 0.5 })
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

  return (
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
  )
}
