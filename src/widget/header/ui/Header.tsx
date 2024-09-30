import { css } from '@emotion/react'
import { $variable } from '@/shared/constants'
import { useBreakpoint } from '@/shared/hooks'
import MainLogo from './MainLogo'
import Menu from './Menu'
import Timer from './Timer'
import FormLink from './FormLink'

function HeaderRightXL() {
  const xl = useBreakpoint('xl')

  return (
    !xl && (
      <div
        css={css`
          display: flex;
          justify-content: flex-end;
          align-items: center;
          & > * + * {
            margin-left: 1.25rem;
          }
          @media ${$variable.breakpoint.xl} {
            display: none;
          }
        `}
      >
        <Timer />
        <FormLink />
      </div>
    )
  )
}

function MenuItemXS() {
  const xs = useBreakpoint('xs')

  return (
    xs && (
      <li>
        <FormLink />
        <Timer />
      </li>
    )
  )
}

export default function Header() {
  return (
    <header
      css={css`
        position: fixed;
        top: 0rem;
        left: 0rem;
        right: 0rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1.25rem;
        width: 100%;
        height: 4.25rem;
        padding: 0.75rem 2.5rem;
        @media ${$variable.breakpoint.md} {
          height: 4rem;
          padding: 0.75rem 1.25rem;
        }
      `}
    >
      <div
        css={css`
          display: flex;
          justify-content: flex-start;
          align-items: center;
          @media ${$variable.breakpoint.xl} {
            justify-content: space-between;
            width: 100%;
          }
          & > * + * {
            margin: 0rem 0rem 0rem 3rem;
            @media ${$variable.breakpoint.xl} {
              margin: 0rem 0rem 0rem 1.5rem;
            }
          }
        `}
      >
        <MainLogo href="/" title="메인으로">
          Synergy Meet
        </MainLogo>
        <Menu>
          <Menu.Item href="#introduce" title="밋업 소개 바로가기">
            밋업 소개
          </Menu.Item>
          <Menu.Item href="#must-read" title="참여 전 필독 바로가기">
            참여 전 필독
          </Menu.Item>
          <Menu.Item href="#faq" title="자주하는 질문 바로가기">
            자주하는 질문
          </Menu.Item>
          <Menu.Item href="#map" title="오시는 길 바로가기">
            오시는 길
          </Menu.Item>
          <MenuItemXS />
        </Menu>
      </div>
      <HeaderRightXL />
    </header>
  )
}
