import { buttonCSS, buttonVariable, Icon } from '@/shared/ui'
import { $variable } from '@/shared/constants'
import { useBreakpoint } from '@/shared/hooks'
import { useTimesUp } from './Timer'

export default function FormLink() {
  const isTimesUp = useTimesUp()
  const md = useBreakpoint('md')
  const xs = useBreakpoint('xs')

  return (
    <a
      href="/participation"
      title={`새창이동: 참가 신청하러 가기${isTimesUp ? ' (마감됨)' : ''}`}
      target="_blank"
      onClick={e => {
        e.preventDefault()
      }}
      aria-disabled={isTimesUp}
      css={buttonCSS}
      style={buttonVariable({
        variant: 'filled',
        color: 'cyan',
        size: md ? 'sm' : 'md',
        round: xs ? 'sm' : 'full',
      })}
    >
      <span style={{ margin: '0.125rem 0rem 0rem', padding: '0rem 0.25rem' }}>참가 신청하기</span>
      {!md && <Icon.ArrowRightUp style={{ fontSize: $variable.font.size600 }} />}
    </a>
  )
}
