import { TOTAL_FRAME } from '../constants'

export function getFrameImage(idx: number) {
  return `/video/intro-${(idx + 1).toString().padStart(4, '0')}.jpeg`
}

export function getFrameProgress(scrollProgress: number) {
  return Math.round((TOTAL_FRAME - 1) * scrollProgress)
}
