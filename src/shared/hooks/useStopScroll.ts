import React from 'react'
import { STOP_SCROLL_CLASS_NAME } from '../constants'

export default function useStopScroll(stop: boolean) {
  React.useEffect(() => {
    document.body.classList[stop ? 'add' : 'remove'](STOP_SCROLL_CLASS_NAME)
    return () => {
      document.body.classList.remove(STOP_SCROLL_CLASS_NAME)
    }
  }, [stop])
}
