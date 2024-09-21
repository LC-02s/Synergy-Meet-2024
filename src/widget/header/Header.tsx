import React from 'react'
import { css } from '@emotion/react'

export default function Header() {
  const [count, setCount] = React.useState(0)

  return (
    <div
      css={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.75rem;
      `}
    >
      <h1>Header</h1>
      <button onClick={() => setCount(prev => prev + 1)}>count: {count}</button>
    </div>
  )
}
