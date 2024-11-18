import React from 'react'
import type { EmotionCache } from '@emotion/cache'
import { CacheProvider, Global } from '@emotion/react'
import { MediaProvider } from '@/shared/hooks'
import { ViewportProvider } from '@/shared/ui'
import { globalStyle } from './App.style'

interface ProviderProps {
  cache: EmotionCache
}

export default function Provider({ cache, children }: React.PropsWithChildren<ProviderProps>) {
  return (
    <React.StrictMode>
      <CacheProvider value={cache}>
        <Global styles={globalStyle} />
        <MediaProvider>
          <ViewportProvider>{children}</ViewportProvider>
        </MediaProvider>
      </CacheProvider>
    </React.StrictMode>
  )
}
