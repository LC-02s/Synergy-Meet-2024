import { css } from '@emotion/react'
import { $variable, DEADLINE } from '@/shared/constants'
import { formatDeadline } from '@/shared/utils'
import ParallaxText from './ParallaxText'

const keywordStyle = css`
  padding: 6rem 0rem 10rem;
  @media ${$variable.breakpoint.lg} {
    padding: 5rem 0rem 8rem;
  }
  @media ${$variable.breakpoint.sm} {
    padding: 4rem 0rem 6rem;
  }
  & > div:first-of-type {
    transform: rotate(-1.6deg);
  }
  & > div:last-of-type {
    background-color: ${$variable.color.green700};
    transform: rotate(0.4deg);
  }
`

export default function Keyword() {
  return (
    <section id="keyword" css={keywordStyle}>
      <ParallaxText baseVelocity={80}>2024 SYNERGY MEET</ParallaxText>
      <ParallaxText baseVelocity={-80}>
        GOORM-SQUARE &nbsp; {formatDeadline(DEADLINE)} 13:30 ~ 18:00&nbsp;
      </ParallaxText>
    </section>
  )
}
