import { css } from '@emotion/react'
import { $variable, STOP_SCROLL_CLASS_NAME } from '@/shared/constants'

export const globalStyle = css`
  body {
    color: ${$variable.color.gray000};
    background-color: ${$variable.color.gray900};
  }
  body.${STOP_SCROLL_CLASS_NAME} {
    touch-action: none;
    overflow: hidden;
  }
`
