import React from 'react'
import { useIsomorphicLayoutEffect } from 'framer-motion'
import { useUpdateMedia, useWindowEvent } from '../hooks'

export default function MediaProvider({ children }: React.PropsWithChildren) {
  const updateMedia = useUpdateMedia()

  useIsomorphicLayoutEffect(updateMedia, [])
  useWindowEvent('resize', updateMedia)

  return children
}
