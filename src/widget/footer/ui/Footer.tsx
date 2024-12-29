import { css } from '@emotion/react'
import { $variable, ADDRESS } from '@/shared/constants'
import { Break, HiddenText, Icon } from '@/shared/ui'
import { COPYRIGHT } from '../constants'

const footerStyle = css`
  width: 100%;
  height: auto;
  padding: 3rem 0rem 4rem;
  border-top: 0.0625rem solid ${$variable.color.gray700};
  @media ${$variable.breakpoint.xl} {
    padding: 3rem 0rem 10rem;
  }
  @media ${$variable.breakpoint.md} {
    padding: 3rem 0rem 9rem;
  }
  @media ${$variable.breakpoint.sm} {
    padding: 2rem 0rem 8rem;
  }
  @media ${$variable.breakpoint.xs} {
    padding: 2.5rem 0rem 6rem;
  }
  & > div {
    width: 100%;
    max-width: 80rem;
    padding: 0rem 2.5rem;
    margin: 0rem auto;
    @media ${$variable.breakpoint.md} {
      padding: 0rem 1.25rem;
    }
    & > div {
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      align-items: center;
      margin: 0rem 0rem 1rem;
      @media ${$variable.breakpoint.md} {
        margin: 0rem 0rem 1.5rem;
      }
      @media ${$variable.breakpoint.sm} {
        display: block;
      }
      & > ul {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        @media ${$variable.breakpoint.sm} {
          justify-content: center;
          margin: 0rem 0rem 2rem;
        }
        & > li {
          margin: 0rem 0rem 0rem 0.75rem;
          & > a {
            font-size: ${$variable.font.size800};
            color: ${$variable.color.gray400};
            transition: color 0.2s ease-in-out;
            &:hover,
            &:active {
              color: ${$variable.color.gray000};
            }
          }
        }
      }
      & > address {
        font-size: ${$variable.font.size300};
        font-style: normal;
        color: ${$variable.color.gray400};
        line-height: ${$variable.leading.relaxed};
        word-break: keep-all;
        @media ${$variable.breakpoint.sm} {
          text-align: center;
        }
        & > br {
          display: none;
          @media ${$variable.breakpoint.md} {
            display: block;
          }
          @media ${$variable.breakpoint.xs} {
            display: none;
          }
        }
      }
    }
    & > p {
      font-size: ${$variable.font.size300};
      color: ${$variable.color.gray400};
      line-height: ${$variable.leading.normal};
      word-break: keep-all;
      @media ${$variable.breakpoint.sm} {
        text-align: center;
      }
    }
  }
`

export default function Footer() {
  return (
    <footer css={footerStyle}>
      <div>
        <div>
          <ul>
            <li>
              <a href="#none" title="모각코 스터디 디스코드 참여하기">
                <Icon.Discord />
                <HiddenText>모각코 스터디 디스코드 참여하기</HiddenText>
              </a>
            </li>
            <li>
              <a href="#none" title="모각코 스터디 젭 참여하기">
                <Icon.Zep />
                <HiddenText>모각코 스터디 젭 참여하기</HiddenText>
              </a>
            </li>
          </ul>
          <address>
            <Break value={ADDRESS} />
          </address>
        </div>
        <p>&copy; {COPYRIGHT}</p>
      </div>
    </footer>
  )
}
