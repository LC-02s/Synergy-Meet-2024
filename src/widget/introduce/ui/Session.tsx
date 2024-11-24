import React from 'react'
import type { Swiper } from 'swiper/types'
import { type SwiperProps, Swiper as SwiperWrapper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { motion } from 'motion/react'
import { useBreakpoint } from '@/shared/hooks'
import { extractEmotionClassName } from '@/shared/utils'
import { Button, Icon } from '@/shared/ui'
import { SESSION_LIST } from '../constants'
import { sessionStyle, sessionTitleStyle, sessionWrapperStyle } from './Introduce.style'
import PlayPauseButton from './PlayPauseButton'
import SessionContent from './SessionContent'

import 'swiper/css'

function MobileWrapper({ children }: React.PropsWithChildren) {
  return (
    <div css={sessionWrapperStyle}>
      <ul>{children}</ul>
    </div>
  )
}

function wrapperFactor(props: SwiperProps) {
  return ({ children }: React.PropsWithChildren) => {
    const xl = useBreakpoint('xl')

    return (
      <SwiperWrapper
        className={extractEmotionClassName(sessionWrapperStyle)}
        wrapperTag="ul"
        modules={[Autoplay]}
        autoplay={{ delay: 2400, disableOnInteraction: false, pauseOnMouseEnter: true }}
        slidesPerView="auto"
        spaceBetween={20}
        loop
        {...props}
      >
        {children}
        {!xl && children}
      </SwiperWrapper>
    )
  }
}

export default function Session() {
  const swiperRef = React.useRef<Swiper | null>(null)

  const sm = useBreakpoint('sm')
  const Wrapper = !sm
    ? wrapperFactor({ onSwiper: (swiper) => (swiperRef.current = swiper) })
    : MobileWrapper

  const slidePrev = React.useCallback(() => {
    const swiper = swiperRef.current
    swiper?.slidePrev()
  }, [])

  const slideNext = React.useCallback(() => {
    const swiper = swiperRef.current
    swiper?.slideNext()
  }, [])

  const autoplayHandler = React.useCallback((player: { play: () => void; pause: () => void }) => {
    const swiper = swiperRef.current

    if (!swiper?.autoplay) return

    if (swiper.autoplay.paused) {
      swiper.autoplay.resume()
      player.play()
      return
    }

    swiper.autoplay.pause()
    player.pause()
  }, [])

  return (
    <div css={sessionStyle}>
      <div css={sessionTitleStyle}>
        <h3>
          세션 소개&nbsp;
          <span>{sm ? `총 ${SESSION_LIST.length}개` : `(${SESSION_LIST.length})`}</span>
        </h3>
        {!sm && (
          <p>
            <Button title="이전 슬라이드" variant="subtle" size="lg" square onClick={slidePrev}>
              <Icon.AltArrowLeftBold />
            </Button>
            <Button title="다음 슬라이드" variant="subtle" size="lg" square onClick={slideNext}>
              <Icon.AltArrowRightBold />
            </Button>
            <PlayPauseButton variant="subtle" size="lg" square clickHandler={autoplayHandler} />
          </p>
        )}
      </div>
      <Wrapper>
        {SESSION_LIST.map((session, idx) =>
          sm ? (
            <motion.li
              key={session.title}
              initial={{ y: '30%', opacity: 0 }}
              animate={{ y: '0%', opacity: 1 }}
              transition={{ ease: 'easeInOut', duration: 0.16, delay: 0.1 * idx }}
            >
              <SessionContent {...session} />
            </motion.li>
          ) : (
            <SwiperSlide key={session.title} tag="li">
              <SessionContent {...session} />
            </SwiperSlide>
          ),
        )}
      </Wrapper>
    </div>
  )
}
