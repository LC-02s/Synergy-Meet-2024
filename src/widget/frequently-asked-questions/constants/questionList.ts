import { ADMIN_EMAIL } from '@/shared/constants'

type Question = Readonly<{ question: string; answer: string }>

const QUESTION_LIST: Question[] = [
  Object.freeze({
    question: '참가자 선정은 어떻게 하나요?',
    answer: '참가 신청자들 중 무작위로 30명을 추첨해서 선정해요.',
  }),
  Object.freeze({
    question: '행사 참여는 무료인가요?',
    answer:
      '시너지 밋은 별도의 참가비를 받지 않고 있어요. 최종 참가자로 선정되실 경우 신청폼에 작성하신 이메일로 안내드려요.',
  }),
  Object.freeze({
    question: '참가 신청이 정상적으로 접수되었는지 확인하고 싶어요!',
    answer: '신청폼을 올바르게 제출하셨다면 신청폼에 작성하신 이메일로 응답 사본을 보내드려요.',
  }),
  Object.freeze({
    question: '신청을 했지만 사정이 생겨 갈 수 없게 되었어요. 어떻게 해야 할까요?',
    answer: `참여가 어려우신 경우에는 운영팀 메일(${ADMIN_EMAIL})으로 참여 취소 요청을 보내주시면 취소를 도와드려요. 비영리로 진행하는 만큼 no-show는 가능한 피해주세요!`,
  }),
  Object.freeze({
    question: '주차가 가능한가요?',
    answer: '주차는 별도로 지원되지 않아요. 대중교통 이용을 권장해 드려요.',
  }),
]

export default QUESTION_LIST
