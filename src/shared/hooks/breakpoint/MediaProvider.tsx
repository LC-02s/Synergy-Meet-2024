import React from 'react'
import { useIsomorphicLayoutEffect } from 'motion/react'
import { useUpdateMedia } from './useBreakpoint'
import useWindowEvent from '../useWindowEvent'

export default function MediaProvider({ children }: React.PropsWithChildren) {
  const updateMedia = useUpdateMedia()

  useIsomorphicLayoutEffect(updateMedia, [])
  useWindowEvent('resize', updateMedia)

  return children
}
