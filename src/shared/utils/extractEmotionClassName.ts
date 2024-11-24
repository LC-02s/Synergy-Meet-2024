import type { SerializedStyles } from '@emotion/react'
import { EMOTION_PREFIX } from '../constants'

export default function extractEmotionClassName(css: SerializedStyles) {
  return [EMOTION_PREFIX, css.name].join('-')
}
