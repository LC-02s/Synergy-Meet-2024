import React from 'react'
import { OverlayViewer, MediaProvider } from '@/shared/hooks'

export default function Provider({ children }: React.PropsWithChildren) {
  return (
    <MediaProvider>
      {children}
      <OverlayViewer />
    </MediaProvider>
  )
}
