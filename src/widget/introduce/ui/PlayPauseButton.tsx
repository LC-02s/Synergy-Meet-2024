import React from 'react'
import { useBooleanState } from '@/shared/hooks'
import { Button, Icon } from '@/shared/ui'

export default function PlayPauseButton({
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
