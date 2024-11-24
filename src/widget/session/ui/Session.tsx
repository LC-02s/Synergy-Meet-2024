import React from 'react'
import type { Swiper } from 'swiper/types'
import { type SwiperProps, Swiper as SwiperWrapper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { motion } from 'motion/react'
import { css } from '@emotion/react'
import { $variable } from '@/shared/constants'
import { useBooleanState, useBreakpoint } from '@/shared/hooks'
import { Button, Icon } from '@/shared/ui'
import { SESSION_LIST } from '../constants'

import 'swiper/css'

const sessionStyle = css`
  position: relative;
  display: flex;
  padding: 0rem 0rem 5rem;
  @media ${$variable.breakpoint.xl} {
    display: block;
  }
  & > .title {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    width: 20rem;
    padding: 3rem 1.5rem 2.75rem 2.75rem;
    @media ${$variable.breakpoint.xl} {
      flex-direction: row;
      align-items: center;
      width: 100%;
      margin: 0rem auto 2.75rem;
      padding: 0rem 2.5rem;
    }
    @media ${$variable.breakpoint.md} {
      margin: 0rem 0rem 2rem;
      padding: 0rem 1.25rem;
    }
    @media ${$variable.breakpoint.sm} {
      display: block;
    }
    & > h3 {
      padding: 0rem 0rem 0rem 0.5rem;
      font-size: ${$variable.font.size700};
      font-weight: ${$variable.font.bold};
      line-height: ${$variable.leading.normal};
      @media ${$variable.breakpoint.md} {
        padding: 0.25rem 0rem 0rem 0.5rem;
        font-size: ${$variable.font.size600};
      }
      @media ${$variable.breakpoint.sm} {
        display: flex;
        justify-content: space-between;
        padding: 0rem 0.5rem;
        text-align: center;
      }
      & > span {
        font-size: ${$variable.font.size500};
        font-weight: ${$variable.font.regular};
        color: ${$variable.color.gray100};
        @media ${$variable.breakpoint.sm} {
          font-size: ${$variable.font.size400};
        }
      }
    }
    & > p {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 0.5rem;
      & > button {
        font-size: ${$variable.font.size600};
        &:last-of-type {
          margin: 0rem 0rem 0rem 1rem;
          font-size: ${$variable.font.size500};
        }
      }
    }
  }
  & > .wrapper {
    position: relative;
    flex: 1;
    overflow: hidden;
    @media ${$variable.breakpoint.xl} {
      width: 100%;
      padding: 0rem 0rem 0rem 2.25rem;
    }
    @media ${$variable.breakpoint.md} {
      padding: 0rem 0rem 0rem 1.25rem;
    }
    @media ${$variable.breakpoint.sm} {
      padding: 0rem;
      overflow: visible;
    }
    & > ul {
      position: relative;
      width: 100%;
      height: auto;
      z-index: 1;
      display: flex;
      @media ${$variable.breakpoint.sm} {
        display: block;
        padding: 0rem 1.25rem;
      }
      & > li {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        width: 24rem;
        height: 18rem;
        padding: 2rem;
        background-color: ${$variable.color.gray800};
        border-radius: 1rem;
        @media ${$variable.breakpoint.sm} {
          display: none;
          width: 100%;
          height: auto;
          padding: 1.5rem 1.25rem;
          ${SESSION_LIST.map((_, idx) => `&:nth-of-type(${idx + 1})`).join(',')} {
            display: block;
          }
        }
        & + li {
          @media ${$variable.breakpoint.sm} {
            margin: 1rem 0rem 0rem;
          }
        }
        & > h4 {
          font-size: ${$variable.font.size500};
          font-weight: ${$variable.font.bold};
          word-break: keep-all;
          line-height: ${$variable.leading.normal};
          @media ${$variable.breakpoint.sm} {
            font-size: ${$variable.font.size400};
            line-height: ${$variable.leading.relaxed};
          }
          & > span {
            display: block;
            margin: 0rem 0rem 1rem;
            font-size: ${$variable.font.size300};
            font-weight: ${$variable.font.regular};
            color: ${$variable.color.gray100};
            line-height: ${$variable.leading.normal};
            @media ${$variable.breakpoint.sm} {
              margin: 0rem 0rem 0.75rem;
            }
          }
        }
        & > ul {
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-start;
          align-items: flex-start;
          gap: 0.5rem;
          @media ${$variable.breakpoint.sm} {
            margin: 3rem 0rem 0rem;
          }
          & > li {
            padding: 0.625rem 0.75rem 0.5rem;
            font-size: ${$variable.font.size400};
            font-weight: ${$variable.font.medium};
            white-space: nowrap;
            background-color: ${$variable.color.gray700};
            border-radius: 0.5rem;
            @media ${$variable.breakpoint.sm} {
              padding: 0.5rem 0.75rem;
              font-size: ${$variable.font.size200};
            }
          }
        }
      }
    }
  }
`

function MobileWrapper({ children }: React.PropsWithChildren) {
  return (
    <div className="wrapper">
      <ul>{children}</ul>
    </div>
  )
}

function wrapperFactor(props: SwiperProps) {
  return ({ children }: React.PropsWithChildren) => {
    const xl = useBreakpoint('xl')

    return (
      <SwiperWrapper
        className="wrapper"
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

function PlayPauseButton({
  clickHandler,
  ...props
}: React.ComponentProps<typeof Button> & {
  clickHandler: (player: { play: () => void; pause: () => void }) => void
}) {
  const [isPlay, { setTrue: play, setFalse: pause }] = useBooleanState(true)
  const IconComponent = isPlay ? Icon.PauseBold : Icon.PlayBold
  const handleClick = React.useCallback(() => {
    clickHandler?.({ play, pause })
  }, [clickHandler, play, pause])

  return (
    <Button {...props} title={`슬라이드 ${isPlay ? '멈춤' : '재생'}`} onClick={handleClick}>
      <IconComponent />
    </Button>
  )
}

function SessionContent({ title, author, type, tag }: (typeof SESSION_LIST)[number]) {
  return (
    <>
      <h4>
        <span>{`[${type}] ${author}`}&nbsp;&nbsp;</span>
        {title}
      </h4>
      <ul>
        {tag.map(({ keyword, color }) => (
          <li key={keyword} style={{ backgroundColor: $variable.color[color] }}>
            #{keyword}
          </li>
        ))}
      </ul>
    </>
  )
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
    <section id="session" css={sessionStyle}>
      <div className="title">
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
    </section>
  )
}
