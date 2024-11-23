import { DEADLINE, DURATION_OF_TIME } from '@/shared/constants'
import { formatDeadline } from '@/shared/utils'
import { mapContainerStyle } from './GuideMap.style'
import NaverMap from './NaverMap'
import ImageGrid from './ImageGrid'

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
        <ImageGrid />
      </div>
    </section>
  )
}
