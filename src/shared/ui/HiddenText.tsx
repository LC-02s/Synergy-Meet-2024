import { css } from '@emotion/react'
import type { HeadingTag } from '../types'

type TextTag = 'span' | 'label' | 'caption' | HeadingTag

type HiddenTextProps<T extends TextTag> = React.PropsWithoutRef<JSX.IntrinsicElements[T]> & {
  as?: T
}

export default function HiddenTextForA11y<T extends TextTag>({ as, ...props }: HiddenTextProps<T>) {
  const Component = as || 'span'

  return (
    <Component
      {...(props as Omit<HiddenTextProps<'span'>, 'as'>)}
      css={css`
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0px;
        margin: 0px;
        border: none;
        font-size: 2px;
        white-space: nowrap;
        clip: rect(1px 1px 1px 1px);
        outline: none;
        overflow: hidden;
      `}
    />
  )
}
