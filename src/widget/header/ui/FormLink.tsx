import { AlertDialog, buttonCSS, buttonVariable, Icon } from '@/shared/ui'
import { $variable, FORM_LINK } from '@/shared/constants'
import { useBreakpoint, useOverlay, useTimesUp } from '@/shared/hooks'

export default function FormLink() {
  const { isTimesUp } = useTimesUp()
  const md = useBreakpoint('md')
  const xs = useBreakpoint('xs')
  const { open } = useOverlay()

  return (
    <a
      href={FORM_LINK}
      title={`새창이동: 참가 신청하러 가기${isTimesUp ? ' (마감됨)' : ''}`}
      target="_blank"
      rel="noreferrer"
      onClick={(e) => {
        e.preventDefault()
        open(({ isOpen, close }) => (
          <AlertDialog open={isOpen} onClose={close}>
            {isTimesUp ? '마감되었습니다' : '신청 폼 준비 중입니다'}
          </AlertDialog>
        ))
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
      <span style={{ margin: '0.125rem 0rem 0rem', padding: '0rem 0.25rem', whiteSpace: 'nowrap' }}>
        참가 신청하기
      </span>
      {!md && <Icon.ArrowRightUp style={{ fontSize: $variable.font.size600 }} />}
    </a>
  )
}
