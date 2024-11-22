import { css } from '@emotion/react'
import { $variable } from '@/shared/constants'

export const mapContainerStyle = css`
  position: relative;
  padding: 8rem 2.75rem;
  margin: 0rem auto;
  width: 100%;
  @media ${$variable.breakpoint.md} {
    padding: 6rem 1.25rem;
  }
  & > p {
    font-size: ${$variable.font.size500};
    font-weight: ${$variable.font.medium};
    color: ${$variable.color.cyan500};
    text-align: center;
    line-height: ${$variable.leading.normal};
    word-break: keep-all;
    @media ${$variable.breakpoint.xl} {
      font-size: ${$variable.font.size400};
    }
    @media ${$variable.breakpoint.md} {
      font-size: ${$variable.font.size300};
    }
    @media ${$variable.breakpoint.sm} {
      font-size: ${$variable.font.size200};
    }
    & > br {
      display: none;
      @media ${$variable.breakpoint.xs} {
        display: block;
      }
    }
  }
  & > h3 {
    margin: 1.25rem 0rem 2.25rem;
    font-size: ${$variable.font.size800};
    font-weight: ${$variable.font.bold};
    text-align: center;
    line-height: ${$variable.leading.normal};
    @media ${$variable.breakpoint.xl} {
      font-size: ${$variable.font.size700};
    }
    @media ${$variable.breakpoint.md} {
      margin: 1rem 0rem 2rem;
      font-size: ${$variable.font.size600};
    }
    @media ${$variable.breakpoint.sm} {
      font-size: ${$variable.font.size500};
    }
  }
`

export const mapStyle = css`
  position: relative;
  & > #map {
    position: relative;
    width: 100%;
    min-height: 20rem;
    max-height: 60rem;
    height: 68vh;
    background-color: ${$variable.color.gray800};
    border-radius: 1rem;
    overflow: hidden;
  }
`

export const toolbarStyle = css`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  right: 1rem;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px) saturate(120%);
  border-radius: 0.75rem;
  @media ${$variable.breakpoint.md} {
    display: inline-block;
    bottom: 0.75rem;
    left: 0.75rem;
    right: 0.75rem;
  }
  @media ${$variable.breakpoint.xs} {
    padding: 0.75rem 0.5rem 0.5rem;
  }
  & > p {
    position: relative;
    padding: 0rem 0rem 0rem 2.75rem;
    font-size: ${$variable.font.size400};
    word-break: keep-all;
    line-height: ${$variable.leading.normal};
    @media ${$variable.breakpoint.lg} {
      padding: 0rem 0rem 0rem 2.25rem;
      font-size: ${$variable.font.size300};
    }
    @media ${$variable.breakpoint.md} {
      margin: 0rem 0rem 1rem;
      padding: 0.5rem 0.5rem 0rem 2rem;
    }
    @media ${$variable.breakpoint.sm} {
      padding: 0.25rem 0.5rem 0rem 1.75rem;
      font-size: ${$variable.font.size200};
    }
    @media ${$variable.breakpoint.xs} {
      margin: 0rem 0rem 1.25rem;
    }
    & > br {
      display: none;
      @media ${$variable.breakpoint.lg} {
        display: block;
      }
      @media ${$variable.breakpoint.sm} {
        display: none;
      }
    }
    & > svg {
      position: absolute;
      top: 0rem;
      bottom: 0.25rem;
      left: 0.75rem;
      margin: auto 0rem;
      font-size: ${$variable.font.size600};
      @media ${$variable.breakpoint.lg} {
        left: 0.25rem;
      }
      @media ${$variable.breakpoint.md} {
        top: 0.325rem;
        bottom: initial;
        left: 0.125rem;
      }
      @media ${$variable.breakpoint.sm} {
        font-size: ${$variable.font.size500};
      }
    }
  }
  & > div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    @media ${$variable.breakpoint.md} {
      justify-content: space-between;
    }
    @media ${$variable.breakpoint.xs} {
      display: block;
    }
    & > button {
      margin: 0rem 0.5rem 0rem 0rem;
      font-size: ${$variable.font.size300};
      white-space: nowrap;
      @media ${$variable.breakpoint.sm} {
        font-size: ${$variable.font.size200};
      }
      @media ${$variable.breakpoint.xs} {
        margin: 0rem 0rem 0.5rem;
        width: 100%;
      }
    }
    & > a {
      @media ${$variable.breakpoint.md} {
        flex: 1;
      }
      & > svg {
        margin: 0rem 0.25rem 0rem 0rem;
        font-size: ${$variable.font.size600};
        @media ${$variable.breakpoint.sm} {
          font-size: ${$variable.font.size500};
        }
      }
      & > span {
        padding: 0rem 0.5rem 0rem 0rem;
        white-space: nowrap;
      }
    }
  }
`

export const imageGridStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0rem 0rem;
  @media ${$variable.breakpoint.md} {
    display: block;
  }
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(100% / 3 - 2rem / 3);
    height: 16rem;
    border-radius: 1rem;
    overflow: hidden;
    background-color: ${$variable.color.gray800};
    @media ${$variable.breakpoint.xl} {
      height: 12rem;
    }
    @media ${$variable.breakpoint.lg} {
      height: 10rem;
    }
    @media ${$variable.breakpoint.md} {
      width: 100%;
      min-height: 10rem;
      max-height: 20rem;
      height: 36vw;
    }
    & + div {
      @media ${$variable.breakpoint.md} {
        margin: 1rem 0rem 0rem;
      }
    }
    & > img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.2s ease-in-out;
      transform: scale(1);
      &:hover {
        transform: scale(1.1);
      }
    }
  }
`
