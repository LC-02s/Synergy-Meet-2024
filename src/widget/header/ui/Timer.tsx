import React from 'react'
import { useInterval } from '@/shared/hooks'
import { DEADLINE } from '@/shared/constants'
import { useTimesUp } from '@/shared/hooks'
import { DAY, HOUR, MINUTE, SECOND } from '../constants'
import { timerSkeletonStyle, timerStyle } from './Timer.style'

export default function Timer(props: JSX.IntrinsicElements['p']) {
  const { isTimesUp, setTimesUp } = useTimesUp()
  const [isHydrated, setHydrated] = React.useState(false)
  const [days, setDays] = React.useState(0)
  const [hours, setHours] = React.useState(0)
  const [minutes, setMinutes] = React.useState(0)
  const [seconds, setSeconds] = React.useState(0)

  const computeDeadline = React.useCallback(() => {
    const targetDate = new Date(DEADLINE)
    const now = new Date()
    const timeDiff = targetDate.getTime() - now.getTime()

    if (timeDiff < 0) {
      setTimesUp(true)
      return
    }
    setDays(Math.floor(timeDiff / DAY))
    setHours(Math.floor((timeDiff % DAY) / HOUR))
    setMinutes(Math.floor((timeDiff % HOUR) / MINUTE))
    setSeconds(Math.floor((timeDiff % MINUTE) / SECOND))
  }, [setTimesUp])

  const { start, clear } = useInterval(computeDeadline, SECOND, false)

  React.useEffect(computeDeadline, [computeDeadline])

  React.useEffect(() => setHydrated(true), [])

  React.useEffect(() => (isTimesUp ? clear : start)(), [isTimesUp, start, clear])

  if (!isHydrated) {
    return <p {...props} css={timerSkeletonStyle} />
  }
  return (
    <p {...props} css={timerStyle}>
      {isTimesUp
        ? '마감되었습니다'
        : `${days.toString().padStart(2, '0')}d ${hours.toString().padStart(2, '0')}h ${minutes.toString().padStart(2, '0')}m ${seconds.toString().padStart(2, '0')}s`}
    </p>
  )
}
