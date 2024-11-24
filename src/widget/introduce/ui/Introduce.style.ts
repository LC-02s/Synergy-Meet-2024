import { css } from '@emotion/react'
import { $variable } from '@/shared/constants'

export const introduceSectionStyle = css`
  position: relative;
  padding: 6rem 0rem 8rem;
`

export const introduceStyle = css`
  position: relative;
  margin: 0rem 0rem 12rem;
  padding: 0rem 2.5rem;
  @media ${$variable.breakpoint.xl} {
    margin: 0rem 0rem 10rem;
  }
  @media ${$variable.breakpoint.md} {
    margin: 0rem 0rem 8rem;
  }
  @media ${$variable.breakpoint.sm} {
    padding: 0rem 1.25rem;
  }
  & > h2 {
    margin: 0rem 0rem 3rem;
    font-size: ${$variable.font.size900};
    font-weight: ${$variable.font.bold};
    color: ${$variable.color.gray000};
    text-align: center;
    line-height: ${$variable.leading.normal};
    white-space: nowrap;
    @media ${$variable.breakpoint.xl} {
      margin: 0rem 0rem 2rem;
      font-size: ${$variable.font.size800};
    }
    @media ${$variable.breakpoint.md} {
      margin: 0rem 0rem 1.5rem;
      font-size: ${$variable.font.size700};
    }
    @media ${$variable.breakpoint.xs} {
      font-size: ${$variable.font.size600};
    }
  }
  & > p {
    font-size: ${$variable.font.size600};
    font-weight: ${$variable.font.regular};
    color: ${$variable.color.gray100};
    text-align: center;
    line-height: ${$variable.leading.relaxed};
    word-break: keep-all;
    @media ${$variable.breakpoint.xl} {
      font-size: ${$variable.font.size500};
    }
    @media ${$variable.breakpoint.md} {
      font-size: ${$variable.font.size400};
    }
    @media ${$variable.breakpoint.sm} {
      font-size: ${$variable.font.size300};
    }
    & > br {
      @media ${$variable.breakpoint.md} {
        display: none;
      }
    }
  }
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 4.75rem 0rem 0rem;
    @media ${$variable.breakpoint.xl} {
      margin: 3.25rem 0rem 0rem;
    }
    @media ${$variable.breakpoint.sm} {
      margin: 2.25rem 0rem 0rem;
    }
    & > a > span {
      display: block;
      padding: 0.625rem 1.25rem 0.5rem;
      font-size: ${$variable.font.size500};
      font-weight: inherit;
      color: inherit;
      line-height: ${$variable.leading.normal};
      white-space: nowrap;
      @media ${$variable.breakpoint.xl} {
        padding: 0.5rem 1.25rem;
        font-size: ${$variable.font.size400};
      }
      @media ${$variable.breakpoint.md} {
        padding: 0.5rem 0.75rem;
      }
      @media ${$variable.breakpoint.sm} {
        padding: 0.25rem 0.75rem;
        font-size: ${$variable.font.size300};
      }
    }
  }
`
