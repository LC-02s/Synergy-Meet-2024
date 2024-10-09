import { css } from '@emotion/react'
import { $variable, DVH100 } from '@/shared/constants'

export const introStyle = css`
  position: relative;
  width: 100%;
  height: calc(${DVH100} * 4);
`

export const introTitleStyle = css`
  position: fixed;
  top: 50%;
  left: 0rem;
  right: 0rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translateY(-80%);
  &.forward,
  &.backward {
    display: none;
  }
  & > span {
    display: block;
    font-size: 5rem;
    font-weight: ${$variable.font.black};
    color: ${$variable.color.gray000};
    line-height: ${$variable.leading.normal};
    white-space: nowrap;
    opacity: var(--opacity);
    transform: translateY(var(--translateY));
    @supports (-webkit-text-stroke: 1px #fff) {
      color: rgba(255, 255, 255, 0.36);
      -webkit-text-stroke: 1px rgba(255, 255, 255, 0.8);
    }
    @media ${$variable.breakpoint.xl} {
      font-size: 4.25rem;
    }
    @media ${$variable.breakpoint.lg} {
      font-size: 4rem;
    }
    @media ${$variable.breakpoint.md} {
      font-size: 3.75rem;
    }
    @media ${$variable.breakpoint.sm} {
      font-size: ${$variable.font.size900};
    }
  }
`

export const scrollGuideStyle = css`
  position: fixed;
  bottom: 3rem;
  left: 0rem;
  right: 0rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${$variable.color.gray000};
  text-align: center;
  opacity: var(--opacity);
  transform: translateY(var(--translateY));
  @media ${$variable.breakpoint.xl} {
    bottom: 8.5rem;
  }
  @media ${$variable.breakpoint.md} {
    bottom: 6.75rem;
  }
  @media ${$variable.breakpoint.xs} {
    bottom: 3rem;
  }
  &.hidden {
    display: none;
  }
  & > strong {
    margin: 0rem 0rem 1.125rem;
    font-size: ${$variable.font.size600};
    font-weight: ${$variable.font.bold};
    color: inherit;
    line-height: ${$variable.leading.tight};
    @media ${$variable.breakpoint.md} {
      font-size: ${$variable.font.size500};
    }
  }
  & > span {
    margin: 0rem 0rem 2rem;
    font-size: ${$variable.font.size400};
    font-weight: ${$variable.font.medium};
    color: ${$variable.color.gray100};
    line-height: ${$variable.leading.relaxed};
    @media ${$variable.breakpoint.xl} {
      margin: 0rem 0rem 1.5rem;
    }
    @media ${$variable.breakpoint.md} {
      margin: 0rem 0rem 1.25rem;
      font-size: ${$variable.font.size300};
    }
    @media ${$variable.breakpoint.sm} {
      font-size: ${$variable.font.size200};
    }
    & > br {
      display: none;
      @media ${$variable.breakpoint.md} {
        display: block;
      }
    }
  }
  & > svg {
    font-size: 3rem;
    color: inherit;
    @media ${$variable.breakpoint.xl} {
      font-size: 2.75rem;
    }
    @media ${$variable.breakpoint.md} {
      font-size: 2.5rem;
    }
  }
`

export const introVideoStyle = css`
  position: sticky;
  z-index: -1;
  top: 0rem;
  bottom: calc(${DVH100} * 4);
  left: 0rem;
  right: 0rem;
  width: 100%;
  height: ${DVH100};
  overflow: hidden;
  opacity: var(--opacity);
  &::after {
    content: '';
    position: absolute;
    z-index: 2;
    top: 0rem;
    bottom: 0rem;
    left: 0rem;
    right: 0rem;
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: saturate(120%) blur(0.125rem);
  }
  & > p {
    position: absolute;
    z-index: 3;
    top: 0rem;
    bottom: 0rem;
    left: 0rem;
    right: 0rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & > canvas {
    position: absolute;
    z-index: 1;
    top: 0rem;
    bottom: 0rem;
    left: 50%;
    right: auto;
    display: block;
    width: auto;
    height: ${DVH100};
    transform: translateX(-50%);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    &.landscape {
      top: 50%;
      bottom: auto;
      left: 0rem;
      right: 0rem;
      width: 100vw;
      height: auto;
      transform: translateY(-50%);
    }
  }
`
