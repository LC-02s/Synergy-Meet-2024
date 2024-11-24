type Session = Readonly<{
  title: string
  author: string
  type: 'FE' | 'BE'
  tag: {
    keyword: string
    color: `${'red' | 'yellow' | 'green' | 'blue'}800` | 'gray700'
  }[]
}>

const SESSION_LIST: Session[] = [
  Object.freeze({
    title: '리액트로 진짜 confirm ui 만들기',
    author: '이찬',
    type: 'FE',
    tag: [
      Object.freeze({ keyword: 'React', color: 'blue800' }),
      Object.freeze({ keyword: 'Message-Queue', color: 'green800' }),
    ],
  }),
  Object.freeze({
    title: '프로젝트에 DS와 써드파티 서비스 적용하기',
    author: '신현호',
    type: 'FE',
    tag: [
      Object.freeze({ keyword: 'DS', color: 'blue800' }),
      Object.freeze({ keyword: 'StoryBook', color: 'red800' }),
      Object.freeze({ keyword: 'Sentry', color: 'yellow800' }),
    ],
  }),
  Object.freeze({
    title: '우리 팀은 카프카를 어떻게 사용하고 있을까?',
    author: '강철원',
    type: 'BE',
    tag: [
      Object.freeze({ keyword: 'Apache', color: 'red800' }),
      Object.freeze({ keyword: 'Kafka', color: 'gray700' }),
    ],
  }),
  Object.freeze({
    title: '바텀시트 같은 ui는 어떻게 만들어질까?',
    author: '이찬',
    type: 'FE',
    tag: [Object.freeze({ keyword: 'React', color: 'blue800' })],
  }),
  Object.freeze({
    title: '이렇게도 성장해보기',
    author: '강철원',
    type: 'BE',
    tag: [Object.freeze({ keyword: 'Open-Source', color: 'green800' })],
  }),
]

export default SESSION_LIST
