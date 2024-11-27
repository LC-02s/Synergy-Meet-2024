import { css } from '@emotion/react'
import { $variable } from '@/shared/constants'

export const timerSkeletonStyle = css`
  display: block;
  width: 8.75rem;
  height: 1.5rem;
  border-radius: 0.25rem;
  background-color: ${$variable.color.cyan900};
`

export const timerStyle = css`
  display: block;
  font-size: ${$variable.font.size300};
  font-weight: ${$variable.font.medium};
  color: ${$variable.color.cyan400};
  white-space: nowrap;
  @media ${$variable.breakpoint.md} {
    font-size: ${$variable.font.size200};
  }
  @media ${$variable.breakpoint.xs} {
    margin: 0.5rem 0rem 0rem;
    text-align: center;
  }
`
