import ReactDOM from 'react-dom/server'
import createEmotionServer from '@emotion/server/create-instance'
import createCache from '@emotion/cache'
import { App } from '@/app'
import { EMOTION_PREFIX } from '@/shared/constants'

export function render() {
  const cache = createCache({ key: EMOTION_PREFIX })
  const { extractCriticalToChunks, constructStyleTagsFromChunks } = createEmotionServer(cache)
  const html = ReactDOM.renderToString(<App cache={cache} />)
  const head = constructStyleTagsFromChunks(extractCriticalToChunks(html))

  return { html, head }
}
