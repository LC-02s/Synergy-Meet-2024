import React from 'react'
import { useBooleanState } from '@/shared/hooks'
import { latitude, longitude } from '../constants'
import { mapStyle } from './GuideMap.style'
import ToolBar from './ToolBar'

export default function NaverMap() {
  const mapRef = React.useRef<HTMLDivElement | null>(null)
  const [isDisabled, { toggle }] = useBooleanState(true)

  React.useEffect(() => {
    const mapEl = mapRef.current ?? 'map'
    const coordinate = new naver.maps.LatLng(latitude, longitude)
    const map = new naver.maps.Map(mapEl, { center: coordinate, zoom: 16 })

    new naver.maps.Marker({ position: coordinate, map })
  }, [])

  return (
    <div css={mapStyle}>
      <div id="map" ref={mapRef} style={{ pointerEvents: isDisabled ? 'none' : 'auto' }} />
      <ToolBar isDisabled={isDisabled} toggleDisabled={toggle} />
    </div>
  )
}
