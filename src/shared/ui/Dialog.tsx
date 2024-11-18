/* eslint-disable react-refresh/only-export-components */
import React from 'react'
import ReactDOM from 'react-dom'
import { AnimatePresence, motion, useIsomorphicLayoutEffect } from 'motion/react'
import { useOutsideClick, useStopScroll } from '../hooks'
import { $variable } from '../constants'
import Button from './Button'
import Dimmed from './Dimmed'
import HiddenText from './HiddenText'
import * as Icon from './icon'
import {
  type DialogVariable,
  dialogStyle,
  dialogContainerStyle,
  dialogHeaderStyle,
  dialogTitleStyle,
  dialogContentStyle,
  dialogFooterStyle,
  dialogVariable,
} from './Dialog.style'
import { handleDialogA11y } from './Dialog.util'

interface DialogState {
  close?: () => void
}

const DialogContext = React.createContext<DialogState | null>(null)

function useDialog() {
  const context = React.useContext(DialogContext)

  if (!context) {
    throw new Error('useDialog is only available within DialogProvider.')
  }
  return context
}

function Header(props: JSX.IntrinsicElements['div']) {
  return <div {...props} css={dialogHeaderStyle} />
}

function Title(props: JSX.IntrinsicElements['h2']) {
  return (
    <h2 {...props} css={dialogTitleStyle}>
      {props.children || 'Synergy Meet'}
    </h2>
  )
}

function CloseButton({ onClick, ...props }: React.ComponentProps<typeof Button>) {
  const { close } = useDialog()

  return (
    <Button
      title="닫기"
      size="xs"
      round="full"
      square
      onClick={(e) => {
        close?.()
        onClick?.(e)
      }}
      {...props}
    >
      <Icon.X style={{ fontSize: $variable.font.size400 }} />
      <HiddenText>닫기</HiddenText>
    </Button>
  )
}

function Content(props: JSX.IntrinsicElements['div']) {
  return <div {...props} css={dialogContentStyle} />
}

function Footer(props: JSX.IntrinsicElements['div']) {
  return <div {...props} css={dialogFooterStyle} />
}

interface DialogProps extends DialogVariable {
  open?: boolean
  onClose?: () => void
  withoutDimmed?: boolean
  cancelWithOutsideClick?: boolean
}

function Dialog({
  open: isOpen,
  onClose,
  size,
  withoutDimmed,
  cancelWithOutsideClick = true,
  children,
}: React.PropsWithChildren<DialogProps>) {
  const close = React.useCallback(() => onClose?.(), [onClose])
  const containerRef = useOutsideClick<HTMLDivElement>(() => {
    if (isOpen && cancelWithOutsideClick) onClose?.()
  })

  useStopScroll(isOpen ?? false)

  useIsomorphicLayoutEffect(() => {
    if (isOpen) {
      const containerEl = containerRef.current
      handleDialogA11y(containerEl)
    }
  }, [isOpen])

  return ReactDOM.createPortal(
    <AnimatePresence>
      {isOpen && (
        <div style={dialogVariable({ size })} css={dialogStyle}>
          <motion.div
            ref={containerRef}
            initial={{
              transform: 'translate(-50%, -24%) scale(0.9)',
              opacity: 0.3,
            }}
            animate={{
              transform: 'translate(-50%, 0%) scale(1)',
              opacity: 1,
            }}
            exit={{
              transform: 'translate(-50%, -24%) scale(0.9)',
              opacity: 0.3,
            }}
            transition={{ ease: 'easeInOut', duration: 0.16 }}
            css={dialogContainerStyle}
          >
            <DialogContext.Provider value={{ close }}>{children}</DialogContext.Provider>
          </motion.div>
          {!withoutDimmed && (
            <Dimmed
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ ease: 'easeInOut', duration: 0.16 }}
            />
          )}
        </div>
      )}
    </AnimatePresence>,
    document.querySelector('main') || document.body,
  )
}

export default Object.assign(Dialog, {
  Header,
  Title,
  CloseButton,
  Content,
  Footer,
})
