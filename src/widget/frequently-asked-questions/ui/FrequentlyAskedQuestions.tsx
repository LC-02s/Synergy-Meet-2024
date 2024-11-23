import { css } from '@emotion/react'
import { $variable, ADMIN_EMAIL } from '@/shared/constants'
import QuestionList from './QuestionList'

const faqStyle = css`
  padding: 5rem 0rem 0rem;
  @media ${$variable.breakpoint.md} {
    padding: 4rem 0rem 0rem;
  }
  & > h3 {
    padding: 0rem 2.5rem;
    margin: 0rem 0rem 1.5rem;
    font-size: ${$variable.font.size800};
    font-weight: ${$variable.font.bold};
    text-align: center;
    line-height: ${$variable.leading.normal};
    @media ${$variable.breakpoint.xl} {
      margin: 0rem 0rem 1.25rem;
      font-size: ${$variable.font.size700};
    }
    @media ${$variable.breakpoint.md} {
      margin: 0rem 0rem 1rem;
      padding: 0rem 1.25rem;
      font-size: ${$variable.font.size600};
    }
    @media ${$variable.breakpoint.xs} {
      font-size: ${$variable.font.size500};
    }
  }
  & > p {
    padding: 0rem 2.5rem;
    font-size: ${$variable.font.size500};
    font-weight: ${$variable.font.regular};
    color: ${$variable.color.gray100};
    text-align: center;
    line-height: ${$variable.leading.relaxed};
    word-break: keep-all;
    @media ${$variable.breakpoint.xl} {
      font-size: ${$variable.font.size400};
    }
    @media ${$variable.breakpoint.md} {
      padding: 0rem 1.25rem;
      font-size: ${$variable.font.size300};
    }
    @media ${$variable.breakpoint.sm} {
      font-size: ${$variable.font.size200};
    }
  }
`

export default function FrequentlyAskedQuestions() {
  return (
    <section id="faq" css={faqStyle}>
      <h3>자주 받는 질문</h3>
      <p>추가적으로 궁금한 사항은 시너지 밋 운영팀 메일({ADMIN_EMAIL})으로 문의해 주세요</p>
      <QuestionList />
    </section>
  )
}
