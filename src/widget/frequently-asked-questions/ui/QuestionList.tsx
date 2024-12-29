import React from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { css } from '@emotion/react'
import { $variable } from '@/shared/constants'
import { useBreakpoint } from '@/shared/hooks'
import { QUESTION_LIST } from '../constants'

const questionListStyle = css`
  display: block;
  width: 100%;
  height: auto;
  max-width: 80rem;
  padding: 0rem 2.5rem;
  margin: 3rem auto 0rem;
  @media ${$variable.breakpoint.xl} {
    margin: 2.75rem auto 0rem;
  }
  @media ${$variable.breakpoint.md} {
    padding: 0rem 1.25rem;
    margin: 2.25rem auto 0rem;
  }
  & > li {
    & + li {
      margin: 1rem 0rem 0rem;
    }
    & > button {
      display: block;
      width: 100%;
      height: auto;
      padding: 1.75rem 2rem;
      overflow: hidden;
      border-radius: 1rem;
      background-color: ${$variable.color.gray800};
      transition: all 0.2s ease-in-out;
      @media ${$variable.breakpoint.md} {
        padding: 1.25rem;
        border-radius: 0.75rem;
      }
      &.selected,
      &:hover,
      &:active {
        background-color: ${$variable.color.cyan800};
      }
      & > strong {
        position: relative;
        display: block;
        padding: 0rem 0rem 0rem 1.75rem;
        font-size: ${$variable.font.size500};
        font-weight: ${$variable.font.medium};
        color: ${$variable.color.gray000};
        text-align: left;
        word-break: keep-all;
        line-height: ${$variable.leading.relaxed};
        @media ${$variable.breakpoint.xl} {
          font-size: ${$variable.font.size400};
        }
        @media ${$variable.breakpoint.md} {
          padding: 0rem 0rem 0rem 1.5rem;
        }
        @media ${$variable.breakpoint.sm} {
          padding: 0rem 0rem 0rem 1.25rem;
          font-size: ${$variable.font.size300};
        }
        &::before {
          content: 'Q. ';
          position: absolute;
          left: 0rem;
        }
      }
      & > span {
        display: block;
        font-size: ${$variable.font.size400};
        font-weight: ${$variable.font.regular};
        color: ${$variable.color.gray100};
        text-align: left;
        word-break: keep-all;
        line-height: ${$variable.leading.relaxed};
        @media ${$variable.breakpoint.md} {
          padding: 0rem 0rem 0.25rem;
          font-size: ${$variable.font.size300};
        }
        @media ${$variable.breakpoint.sm} {
          font-size: ${$variable.font.size200};
        }
      }
    }
  }
`

interface QuestionItemProps {
  question: string
  answer: string
  selectedState: [string, (value: string) => void]
}

function QuestionItem({
  question,
  answer,
  selectedState: [selectedQuestion, select],
}: QuestionItemProps) {
  const sm = useBreakpoint('sm')
  const isSelected = selectedQuestion === question

  return (
    <button
      type="button"
      className={isSelected ? 'selected' : undefined}
      title={`대답 ${isSelected ? '닫기' : '보기'}: ${question}`}
      onClick={() => select(isSelected ? '' : question)}
    >
      <strong>{question}</strong>
      <AnimatePresence>
        {isSelected && (
          <motion.span
            initial={{ height: 0, marginTop: '0rem', opacity: 0 }}
            animate={{ height: 'auto', marginTop: sm ? '0.75rem' : '1rem', opacity: 1 }}
            exit={{ height: 0, marginTop: '0rem', opacity: 0 }}
            transition={{ ease: 'easeInOut', duration: 0.16 }}
          >
            {answer}
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  )
}

export default function QuestionList() {
  const selectedState = React.useState('')

  return (
    <ul css={questionListStyle}>
      {QUESTION_LIST.map(({ question, answer }, idx) => (
        <motion.li
          key={question}
          initial={{ y: '30%', opacity: 0 }}
          whileInView={{ y: '0%', opacity: 1 }}
          transition={{ ease: 'easeInOut', duration: 0.16, delay: 0.1 * idx }}
          viewport={{ once: true, margin: '-12%' }}
        >
          <QuestionItem question={question} answer={answer} selectedState={selectedState} />
        </motion.li>
      ))}
    </ul>
  )
}
