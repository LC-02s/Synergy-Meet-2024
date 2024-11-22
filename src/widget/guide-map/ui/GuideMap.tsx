import { DEADLINE, DURATION_OF_TIME } from '@/shared/constants'
import { formatDeadline } from '@/shared/utils'
import { mapContainerStyle, imageGridStyle } from './GuideMap.style'
import NaverMap from './NaverMap'

export default function GuideMap() {
  return (
    <section id="guide-map" css={mapContainerStyle}>
      <p>
        {formatDeadline(DEADLINE)} {DURATION_OF_TIME.join(' ~ ')}&nbsp;&nbsp;
        <br />
        구름스퀘어
      </p>
      <h3>우리 여기서 만나요!</h3>
      <div>
        <NaverMap />
        <div css={imageGridStyle}>
          {[1, 2, 3].map((idx) => (
            <div key={idx}>
              <img src={`/img/goorm-square-${idx}.jpg`} alt={`구름 스퀘어 이미지 ${idx}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
