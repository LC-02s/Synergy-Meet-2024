export type Session = Readonly<{
  title: string
  author: string
  type: 'FE' | 'BE'
  tag: {
    keyword: string
    color: `${'red' | 'yellow' | 'green' | 'blue'}800` | 'gray700'
  }[]
}>
