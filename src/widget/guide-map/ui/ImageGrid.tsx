import { useBreakpoint } from '@/shared/hooks'
import { imageGridStyle } from './GuideMap.style'

export default function ImageGrid() {
  const md = useBreakpoint('md')
  const images = md ? [2, 1] : [3, 1, 2]

  return (
    <ul css={imageGridStyle}>
      {images.map((id, idx) => (
        <li key={id}>
          <img src={`/img/goorm-square-${id}.jpg`} alt={`구름 스퀘어 이미지 ${idx + 1}`} />
        </li>
      ))}
    </ul>
  )
}
