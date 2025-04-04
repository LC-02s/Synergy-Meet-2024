import { css } from '@emotion/react'
import { $variable } from '@/shared/constants'

export const introStyle = css`
  position: relative;
  width: 100%;
  height: 400vh;
  margin: 0rem 0rem -54vh;
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
  transition: all 0.2s ease-in-out;
  @media ${$variable.breakpoint.lg} {
    top: 48%;
  }
  @media ${$variable.breakpoint.md} {
    top: 45%;
  }
  @media ${$variable.breakpoint.xs} {
    top: 48%;
  }
  & > span {
    display: block;
    font-size: 5rem;
    font-weight: ${$variable.font.black};
    color: ${$variable.color.gray000};
    line-height: ${$variable.leading.normal};
    white-space: nowrap;
    text-transform: uppercase;
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
  @media ${$variable.breakpoint.xl} {
    bottom: 8.5rem;
  }
  @media ${$variable.breakpoint.md} {
    bottom: 6.75rem;
  }
  @media ${$variable.breakpoint.xs} {
    bottom: 3rem;
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
  bottom: 400vh;
  left: 0rem;
  right: 0rem;
  width: 100%;
  height: 100vh;
  overflow: hidden;
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
  & > video {
    position: absolute;
    z-index: 1;
    top: 0rem;
    bottom: 0rem;
    left: 0rem;
    right: 0rem;
    display: block;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
  }
`
