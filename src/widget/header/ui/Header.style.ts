import { css } from '@emotion/react'
import { $variable } from '@/shared/constants'

export const headerStyle = css`
  position: fixed;
  z-index: 9999;
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
  background: rgba(19, 21, 23, 1, 0.6);
  background: linear-gradient(0deg, rgba(19, 21, 23, 0) 0%, rgba(3, 5, 7, 1) 100%);
  @media ${$variable.breakpoint.md} {
    height: 4rem;
    padding: 0.75rem 1.25rem;
  }
`

export const headerLeftStyle = css`
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
`

export const headerRightStyle = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  & > * + * {
    margin-left: 1.25rem;
  }
  @media ${$variable.breakpoint.xl} {
    display: none;
  }
`
