import React from 'react'
import Provider from './Provider'

export default function App() {
  const [count, setCount] = React.useState(0)

  return (
    <Provider>
      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>count is {count}</button>
      </div>
    </Provider>
  )
}
