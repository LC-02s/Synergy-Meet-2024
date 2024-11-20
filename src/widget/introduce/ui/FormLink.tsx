import { FORM_LINK } from '@/shared/constants'
import { useOverlay, useTimesUp } from '@/shared/hooks'
import { AlertDialog, buttonCSS, buttonVariable } from '@/shared/ui'

export default function FormLink() {
  const { isTimesUp } = useTimesUp()
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
      style={buttonVariable({ variant: 'filled', color: 'cyan', size: 'md', round: 'full' })}
    >
      <span>참가 신청 바로가기</span>
    </a>
  )
}
