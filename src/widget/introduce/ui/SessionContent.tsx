import { $variable } from '@/shared/constants'
import type { Session } from '../types'

export default function SessionContent({ title, author, type, tag }: Session) {
  return (
    <>
      <h4>
        <span>{`[${type}] ${author}`}&nbsp;&nbsp;</span>
        {title}
      </h4>
      <ul>
        {tag.map(({ keyword, color }) => (
          <li key={keyword} style={{ backgroundColor: $variable.color[color] }}>
            #{keyword}
          </li>
        ))}
      </ul>
    </>
  )
}
