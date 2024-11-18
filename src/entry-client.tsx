import ReactDOM from 'react-dom/client'
import createCache from '@emotion/cache'
import { App } from '@/app'
import { EMOTION_PREFIX } from '@/shared/constants'
import { getMainElement } from '@/shared/utils'

ReactDOM.hydrateRoot(getMainElement(), <App cache={createCache({ key: EMOTION_PREFIX })} />)
