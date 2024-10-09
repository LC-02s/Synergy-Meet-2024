import React from 'react'
import { Global } from '@emotion/react'
import { OverlayViewer, MediaProvider } from '@/shared/hooks'
import { ViewportProvider } from '@/shared/ui'
import { globalStyle } from './App.style'

export default function Provider({ children }: React.PropsWithChildren) {
  return (
    <MediaProvider>
      <ViewportProvider>
        <Global styles={globalStyle} />
        {children}
        <OverlayViewer />
      </ViewportProvider>
    </MediaProvider>
  )
}
