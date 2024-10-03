import React from 'react'
import { Global } from '@emotion/react'
import { OverlayViewer, MediaProvider } from '@/shared/hooks'
import { globalStyle } from './App.style'

export default function Provider({ children }: React.PropsWithChildren) {
  return (
    <MediaProvider>
      <Global styles={globalStyle} />
      {children}
      <OverlayViewer />
    </MediaProvider>
  )
}
