import { css } from '@emotion/react'
import { HiddenText, Icon } from '@/shared/ui'
import { $variable } from '@/shared/constants'

const topButtonStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  font-size: 2rem;
  border: 1px solid ${$variable.color.floatingBoxBorder};
  border-radius: 50%;
  background-color: ${$variable.color.floatingBoxBackground};
  cursor: pointer;
  pointer-events: all;
  @media ${$variable.breakpoint.xl} {
    width: 2.25rem;
    height: 2.25rem;
    font-size: 1.75rem;
    border: none;
    background-color: transparent;
  }
  @media ${$variable.breakpoint.md} {
    width: 1.5rem;
    height: 1.5rem;
    font-size: 1.5rem;
  }
  @media ${$variable.breakpoint.sm} {
    width: 1.25rem;
    height: 1.25rem;
    font-size: 1.25rem;
  }
`

export default function TopButton() {
  return (
    <button
      type="button"
      title="상단으로"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }}
      css={topButtonStyle}
    >
      <Icon.ArrowUp />
      <HiddenText>상단으로</HiddenText>
    </button>
  )
}
