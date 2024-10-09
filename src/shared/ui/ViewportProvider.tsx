import React from 'react'
import { useIsomorphicLayoutEffect } from 'framer-motion'
import { useWindowEvent } from '../hooks'

export default function ViewportProvider({ children }: React.PropsWithChildren) {
  const viewportHandler = React.useCallback(() => {
    document.body.style.setProperty('--dvh', `${window.innerHeight}px`)
  }, [])

  useIsomorphicLayoutEffect(viewportHandler, [])
  useWindowEvent('resize', viewportHandler)

  return children
}
