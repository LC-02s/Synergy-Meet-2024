import React from 'react'
import ReactDOM from 'react-dom/client'
import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import { App } from '@/app'
import { EMOTION_PREFIX } from '@/shared/constants'

const cache = createCache({ key: EMOTION_PREFIX })

ReactDOM.hydrateRoot(
  document.getElementById('main')!,
  <React.StrictMode>
    <CacheProvider value={cache}>
      <App />
    </CacheProvider>
  </React.StrictMode>,
)
