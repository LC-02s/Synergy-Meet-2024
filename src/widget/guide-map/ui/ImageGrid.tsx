import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { useBooleanState, useBreakpoint } from '@/shared/hooks'
import { extractEmotionClassName } from '@/shared/utils'
import { Icon } from '@/shared/ui'
import { imageGridStyle } from './GuideMap.style'

import 'swiper/css'

function ImageItem({ id }: { id: number }) {
  return <img src={`/img/goorm-square-${id}.jpg`} alt={`구름 스퀘어 이미지 ${id}`} />
}

function ImageGridMobile() {
  const [isPlay, { setTrue: play, setFalse: pause }] = useBooleanState(true)
  const IconComponent = isPlay ? Icon.PauseBold : Icon.PlayBold

  return (
    <Swiper
      className={extractEmotionClassName(imageGridStyle)}
      wrapperTag="ul"
      modules={[Autoplay]}
      autoplay={{ delay: 3200, disableOnInteraction: false, pauseOnMouseEnter: true }}
      onTap={(swiper) => {
        if (swiper.autoplay.paused) {
          swiper.autoplay.resume()
          play()
          return
        }
        swiper.autoplay.pause()
        pause()
      }}
      loop
    >
      {[3, 1, 2].map((id) => (
        <SwiperSlide key={id} tag="li">
          <ImageItem id={id} />
        </SwiperSlide>
      ))}
      <button
        type="button"
        title={`슬라이드 ${isPlay ? '멈춤' : '재생'}`}
        className={isPlay ? 'play' : 'pause'}
      >
        <IconComponent />
      </button>
    </Swiper>
  )
}

export default function ImageGrid() {
  const md = useBreakpoint('md')

  if (md) {
    return <ImageGridMobile />
  }

  return (
    <div css={imageGridStyle}>
      <ul>
        {[2, 1, 3].map((id) => (
          <li key={id}>
            <ImageItem id={id} />
          </li>
        ))}
      </ul>
    </div>
  )
}
