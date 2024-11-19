import React from 'react'
import { css } from '@emotion/react'
import { $variable } from '@/shared/constants'

const loaderStyle = css`
  position: fixed;
  z-index: 999999;
  top: 0rem;
  bottom: 0rem;
  left: 0rem;
  right: 0rem;
  font-size: ${$variable.font.size800};
  background-color: ${$variable.color.gray900};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > img {
    width: 5rem;
    margin: 0rem auto 2rem;
    animation: splash-icon 6s linear infinite;
    transform-origin: 50% 50%;
  }
  & > h1 {
    padding: 0rem 0rem 2.75rem;
    font-size: ${$variable.font.size600};
    font-weight: ${$variable.font.bold};
    color: ${$variable.color.gray000};
    text-align: center;
    line-height: ${$variable.leading.normal};
  }
  @keyframes splash-icon {
    100% {
      transform: rotate(360deg);
    }
  }
`

export default function Splash() {
  const [isHydrated, setHydrated] = React.useState(false)

  React.useEffect(() => setHydrated(true), [])

  if (isHydrated) {
    return null
  }

  return (
    <div css={loaderStyle}>
      <img src="/img/synergy-logo-512.png" alt="시너지 밋 아이콘" />
      <h1>Synergy Meet</h1>
    </div>
  )
}
