import ReactDOM from 'react-dom/client'
import createCache from '@emotion/cache'
import { App } from '@/app'
import { EMOTION_PREFIX } from '@/shared/constants'

ReactDOM.hydrateRoot(
  document.getElementById('main') || document.body,
  <App cache={createCache({ key: EMOTION_PREFIX })} />,
)
