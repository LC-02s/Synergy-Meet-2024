import { introduceSectionStyle, introduceStyle } from './Introduce.style'
import FormLink from './FormLink'
import Session from './Session'

export default function Introduce() {
  return (
    <section id="introduce" css={introduceSectionStyle}>
      <div css={introduceStyle}>
        <h2>Synergy Meet</h2>
        <p>
          시너지 밋은 취업 준비생들끼리 모여서 취업 준비 관련 정보도 공유하고 <br />
          진행했던 프로젝트를 토대로 발표도 하고 서로 피드백도 주고받으면서 <br />
          함께 시너지를 내며 성장하기 위해 기획된 밋업이에요
        </p>
        <div>
          <FormLink />
        </div>
      </div>
      <Session />
    </section>
  )
}
