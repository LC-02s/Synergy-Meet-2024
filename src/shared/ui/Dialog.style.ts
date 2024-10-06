import React from 'react'
import { css } from '@emotion/react'
import { $variable } from '../constants'
import { rem } from '../utils'

const dialogVariants = {
  size: {
    xs: rem(288),
    sm: rem(384),
    md: rem(480),
    lg: rem(720),
    xl: rem(960),
  },
}

export interface DialogVariable {
  size?: keyof typeof dialogVariants.size
}

export function dialogVariable({ size = 'md' }: DialogVariable) {
  return {
    '--dialog-size': dialogVariants.size[size],
  } as React.CSSProperties
}

export const dialogStyle = css`
  position: fixed;
  z-index: 99999;
  top: 0rem;
  bottom: 0rem;
  left: 0rem;
  right: 0rem;
`

export const dialogContainerStyle = css`
  position: absolute;
  top: 2.5rem;
  left: 50%;
  width: calc(100vw - 2.5rem);
  max-width: var(--dialog-size);
  max-height: calc(100dvh - 5rem);
  box-sizing: border-box;
  padding: 1.25rem;
  border-radius: 0.75rem;
  background-color: ${$variable.color.gray800};
  transform: translateX(-50%);
`

export const dialogHeaderStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  margin: 0rem;
  margin-bottom: 0.5rem;
`

export const dialogTitleStyle = css`
  display: block;
  width: auto;
  height: auto;
  box-sizing: border-box;
  margin: 0rem;
  padding: 0rem;
  font-size: ${$variable.font.size400};
  font-weight: ${$variable.font.bold};
  color: ${$variable.color.gray000};
  line-height: ${$variable.leading.normal};
`

export const dialogContentStyle = css`
  display: block;
  width: 100%;
  min-height: 3rem;
  max-height: calc(100dvh - 17.5rem);
  box-sizing: border-box;
  padding: 0.25rem 0rem;
  font-size: ${$variable.font.size300};
  font-weight: ${$variable.font.regular};
  color: ${$variable.color.gray050};
  line-height: ${$variable.leading.normal};
  overflow-y: auto;
  & > p {
    display: block;
    box-sizing: border-box;
    padding: 0px;
    margin: 0px;
    font-size: inherit;
    font-weight: inherit;
    color: inherit;
    line-height: ${$variable.leading.relaxed};
  }
`

export const dialogFooterStyle = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  box-sizing: border-box;
  margin: 1.25rem 0rem 0rem;
  padding: 1rem 0rem 0rem;
  & > button {
    min-width: 5rem;
  }
`
