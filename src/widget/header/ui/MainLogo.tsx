import { css } from '@emotion/react'
import { $variable } from '@/shared/constants'

const mainLogoStyle = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  & > a {
    display: block;
    font-size: ${$variable.font.size600};
    font-weight: ${$variable.font.black};
    color: ${$variable.color.gray000};
    line-height: ${$variable.leading.normal};
    white-space: nowrap;
    @media ${$variable.breakpoint.xl} {
      font-size: ${$variable.font.size500};
    }
  }
`

export default function MainLogo(props: JSX.IntrinsicElements['a']) {
  return (
    <h1 css={mainLogoStyle}>
      <a {...props}>{props.children}</a>
    </h1>
  )
}
