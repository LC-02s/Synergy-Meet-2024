import React from 'react'
import { css } from '@emotion/react'
import { useInterval } from '@/shared/hooks'
import { $variable, DEADLINE } from '@/shared/constants'
import { DAY, HOUR, MINUTE, SECOND } from '../constants'

export default function Timer(props: JSX.IntrinsicElements['p']) {
  const [isHydrated, setHydrated] = React.useState(false)
  const [isTimesUp, setTimesUp] = React.useState(false)
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
  }, [])

  const { start, clear } = useInterval(computeDeadline, SECOND, false)

  React.useEffect(computeDeadline, [computeDeadline])

  React.useEffect(() => setHydrated(true), [])

  React.useEffect(() => (isTimesUp ? clear : start)(), [isTimesUp, start, clear])

  if (!isHydrated) {
    return (
      <p
        {...props}
        css={css`
          display: block;
          width: 12rem;
          height: 1.5rem;
          border-radius: 0.25rem;
          background-color: ${$variable.color.cyan900};
        `}
      />
    )
  }
  return (
    <p
      {...props}
      css={css`
        display: block;
        font-size: ${$variable.font.size300};
        font-weight: ${$variable.font.medium};
        color: ${$variable.color.cyan400};
        white-space: nowrap;
      `}
    >
      {isTimesUp
        ? '마감되었습니다'
        : `${days.toString().padStart(2, '0')}일 ${hours.toString().padStart(2, '0')}시간 ${minutes.toString().padStart(2, '0')}분 ${seconds.toString().padStart(2, '0')}초 남음`}
    </p>
  )
}
