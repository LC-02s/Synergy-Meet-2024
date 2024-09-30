import React from 'react'
import { css } from '@emotion/react'
import { motion, AnimatePresence } from 'framer-motion'
import { $variable } from '@/shared/constants'
import { useBooleanState, useBreakpoint, useOutsideClick } from '@/shared/hooks'
import { HiddenText } from '@/shared/ui'

function MenuItem(props: JSX.IntrinsicElements['a']) {
  return (
    <li
      css={css`
        display: block;
        & + & {
          margin: 0rem 0rem 0rem 0.5rem;
          @media ${$variable.breakpoint.md} {
            margin: 0.25rem 0rem 0rem;
          }
        }
        & > a {
          display: block;
          padding: 0.25rem 0.5rem;
          font-size: ${$variable.font.size300};
          font-weight: ${$variable.font.medium};
          color: ${$variable.color.gray000};
          white-space: nowrap;
          opacity: 0.6;
          transition: opacity 0.2s ease-in-out;
          &:focus,
          &:hover,
          &:active {
            opacity: 1;
          }
          @media ${$variable.breakpoint.md} {
            opacity: 1;
          }
        }
      `}
    >
      <a {...props} />
    </li>
  )
}

function MenuRoot({ children }: React.PropsWithChildren) {
  const md = useBreakpoint('md')
  const [isOpen, { setFalse: close, toggle }] = useBooleanState()
  const containerRef = useOutsideClick<HTMLDivElement>(close)

  React.useEffect(() => (!md ? close : undefined)?.(), [md, close])

  if (md) {
    return (
      <div
        ref={containerRef}
        css={css`
          position: relative;
          & > button {
            position: relative;
            display: block;
            padding: 0.25rem;
            cursor: pointer;
            transform: rotate(180deg);
            & > p {
              position: relative;
              width: 1.5rem;
              height: 1.5rem;
              background: transparent;
              & > span {
                position: absolute;
                left: 0;
                display: block;
                width: 100%;
                height: 0.125rem;
                border-radius: 0.25rem;
                background: ${$variable.color.gray000};
                opacity: 1;
                transform: rotate(0deg);
                transition: 0.25s ease-in-out;
                &:nth-of-type(1) {
                  top: 0.25rem;
                  transform-origin: left center;
                }
                &:nth-of-type(2) {
                  top: 50%;
                  transform: translateY(-50%);
                  transform-origin: left center;
                }
                &:nth-of-type(3) {
                  top: calc(100% - 0.25rem);
                  transform-origin: left center;
                  transform: translateY(-100%);
                }
              }
              &.open > span {
                &:nth-of-type(1) {
                  transform: rotate(45deg);
                  top: 0.125rem;
                  left: 14%;
                }
                &:nth-of-type(2) {
                  width: 0%;
                  opacity: 0;
                }
                &:nth-of-type(3) {
                  transform: translateY(-50%) rotate(-45deg);
                  top: calc(100% - 0.25rem);
                  left: 14%;
                }
              }
            }
          }
          & > nav {
            position: absolute;
            top: 2.5rem;
            right: 0rem;
            width: 12rem;
            padding: 0.5rem;
            border: 1px solid ${$variable.color.floatingBoxBorder};
            border-radius: 0.5rem;
            background-color: ${$variable.color.floatingBoxBackground};
            overflow: hidden;
          }
        `}
      >
        <button type="button" title={isOpen ? '메뉴 닫기' : '메뉴 열기'} onClick={toggle}>
          <p className={isOpen ? 'open' : ''}>
            <span />
            <span />
            <span />
          </p>
          <HiddenText>{isOpen ? '메뉴 닫기' : '메뉴 열기'}</HiddenText>
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{
                transform: 'translate(8%, -12%) scale(0.8)',
                opacity: 0,
              }}
              animate={{
                height: 'auto',
                transform: 'translate(0%, 0%) scaleY(1)',
                opacity: 1,
              }}
              exit={{
                height: 0,
                transform: 'translate(8%, -12%) scale(0.8)',
                opacity: 0,
              }}
              transition={{ ease: 'easeInOut', duration: 0.16 }}
            >
              <ul>{children}</ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    )
  }
  return (
    <nav>
      <ul
        css={css`
          display: flex;
          justify-content: flex-start;
          align-items: center;
        `}
      >
        {children}
      </ul>
    </nav>
  )
}

const Menu = Object.assign(MenuRoot, { Item: MenuItem })

export default Menu
