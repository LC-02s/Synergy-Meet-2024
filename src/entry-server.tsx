import React from 'react'
import ReactDOM from 'react-dom/server'
import createEmotionServer from '@emotion/server/create-instance'
import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import { App } from '@/app'
import { EMOTION_PREFIX } from '@/shared/constants'

export function render() {
  const cache = createCache({ key: EMOTION_PREFIX })
  const { extractCriticalToChunks, constructStyleTagsFromChunks } = createEmotionServer(cache)
  const html = ReactDOM.renderToString(
    <React.StrictMode>
      <CacheProvider value={cache}>
        <App />
      </CacheProvider>
    </React.StrictMode>,
  )
  const head = constructStyleTagsFromChunks(extractCriticalToChunks(html))

  return { html, head }
}
