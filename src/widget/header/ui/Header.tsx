import { useBreakpoint } from '@/shared/hooks'
import { headerLeftStyle, headerRightStyle, headerStyle } from './Header.style'
import MainLogo from './MainLogo'
import Menu from './Menu'
import Timer from './Timer'
import FormLink from './FormLink'

function HeaderRight() {
  const xl = useBreakpoint('xl')

  if (xl) {
    return null
  }

  return (
    <div css={headerRightStyle}>
      <Timer />
      <FormLink />
    </div>
  )
}

function LastOfMenuItem() {
  const xs = useBreakpoint('xs')

  if (!xs) {
    return null
  }

  return (
    <li>
      <FormLink />
      <Timer />
    </li>
  )
}

export default function Header() {
  return (
    <header css={headerStyle}>
      <div css={headerLeftStyle}>
        <MainLogo href="/" title="메인으로">
          Synergy Meet
        </MainLogo>
        <Menu>
          <Menu.Item href="#introduce" title="밋업 소개 바로가기">
            밋업 소개
          </Menu.Item>
          <Menu.Item href="#session" title="세션 소개 바로가기">
            세션 소개
          </Menu.Item>
          <Menu.Item href="#guide-map" title="오시는 길 바로가기">
            오시는 길
          </Menu.Item>
          <Menu.Item href="#faq" title="자주하는 질문 바로가기">
            자주 받는 질문
          </Menu.Item>
          <LastOfMenuItem />
        </Menu>
      </div>
      <HeaderRight />
    </header>
  )
}
