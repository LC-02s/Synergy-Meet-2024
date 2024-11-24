import React from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { useBooleanState, useBreakpoint, useOutsideClick } from '@/shared/hooks'
import { HiddenText } from '@/shared/ui'
import { menuItemStyle, menuRootStyle, menuRootStyleMd } from './Menu.style'

function MenuItem(props: JSX.IntrinsicElements['a']) {
  return (
    <li css={menuItemStyle}>
      <a {...props}>{props.children}</a>
    </li>
  )
}

function MenuMobile({ children }: React.PropsWithChildren) {
  const [isOpen, { setFalse: close, toggle }] = useBooleanState()
  const containerRef = useOutsideClick<HTMLDivElement>(close)

  React.useEffect(() => close, [close])

  return (
    <div ref={containerRef} css={menuRootStyleMd}>
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

function MenuRoot({ children }: React.PropsWithChildren) {
  const md = useBreakpoint('md')

  if (md) {
    return <MenuMobile>{children}</MenuMobile>
  }

  return (
    <nav>
      <ul css={menuRootStyle}>{children}</ul>
    </nav>
  )
}

const Menu = Object.assign(MenuRoot, { Item: MenuItem })

export default Menu
