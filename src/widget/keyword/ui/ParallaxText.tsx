import React from 'react'
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from 'motion/react'
import { css } from '@emotion/react'
import { $variable } from '@/shared/constants'
import { wrap } from '@/shared/utils'
import { TEXT_REPEAT } from '../constants'

interface ParallaxTextProps {
  baseVelocity?: number
}

const parallaxStyle = css`
  width: 100%;
  overflow: hidden;
  padding: 0.5rem 0rem 0rem;
  background-color: ${$variable.color.cyan700};
  & + & {
    margin: 2.75rem 0rem 0rem;
    @media ${$variable.breakpoint.lg} {
      margin: 2.25rem 0rem 0rem;
    }
    @media ${$variable.breakpoint.md} {
      margin: 1.75rem 0rem 0rem;
    }
    @media ${$variable.breakpoint.sm} {
      margin: 1.25rem 0rem 0rem;
    }
  }
  & > p {
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    white-space: nowrap;
    overflow: hidden;
    & > span {
      display: block;
      font-size: ${$variable.font.size900};
      font-weight: ${$variable.font.black};
      color: ${$variable.color.gray900};
      line-height: ${$variable.leading.normal};
      white-space: nowrap;
      text-transform: uppercase;
      & + span {
        margin: 0rem 0rem 0rem 1.25rem;
      }
      @media ${$variable.breakpoint.xl} {
        font-size: ${$variable.font.size800};
      }
      @media ${$variable.breakpoint.md} {
        font-size: ${$variable.font.size700};
      }
      @media ${$variable.breakpoint.sm} {
        font-size: ${$variable.font.size600};
      }
    }
  }
`

export default function ParallaxText({
  children,
  baseVelocity = 100,
}: React.PropsWithChildren<ParallaxTextProps>) {
  const wrapperRef = React.useRef<HTMLDivElement | null>(null)
  const baseX = useMotionValue(0)

  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 })
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false })
  const direction = React.useRef<1 | -1>(1)

  const x = useTransform(baseX, (value) => {
    const wrapperEl = wrapperRef.current
    const wrapperWidth = wrapperEl?.offsetWidth ?? 0
    const min = wrapperWidth / TEXT_REPEAT
    const max = wrapperWidth / (TEXT_REPEAT / 2)

    return `-${wrap({ min, max, value })}px`
  })

  useAnimationFrame((_, delta) => {
    const velocity = velocityFactor.get()
    const prev = baseX.get()
    const moveBy = direction.current * baseVelocity * (delta / 1000)

    if (velocity) {
      direction.current = velocity < 0 ? -1 : 1
    }

    baseX.set(prev + moveBy + direction.current * moveBy * velocity)
  })

  return (
    <div css={parallaxStyle}>
      <motion.p ref={wrapperRef} style={{ x }}>
        {Array.from({ length: TEXT_REPEAT }, (_, i) => {
          return <span key={i}>{children} </span>
        })}
      </motion.p>
    </div>
  )
}
