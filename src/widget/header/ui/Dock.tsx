import { css } from '@emotion/react'
import { motion } from 'framer-motion'
import { useBreakpoint } from '@/shared/hooks'
import { $variable } from '@/shared/constants'
import TopButton from './TopButton'
import Timer from './Timer'
import FormLink from './FormLink'

export default function Dock() {
  const xl = useBreakpoint('xl')
  const xs = useBreakpoint('xs')

  if (xs) return
  return (
    <motion.div
      initial={{
        transform: 'translateY(36%)',
        opacity: 0,
      }}
      animate={{
        transform: 'translateY(0%)',
        opacity: 1,
      }}
      exit={{
        transform: 'translateY(36%)',
        opacity: 0,
      }}
      transition={{ ease: 'easeInOut', duration: 0.16 }}
      css={css`
        position: fixed;
        bottom: 2.5rem;
        left: 2.5rem;
        right: 2.5rem;
        width: auto;
        height: 4rem;
        display: inline-flex;
        justify-content: flex-end;
        align-items: center;
        pointer-events: none;
        @media ${$variable.breakpoint.xl} {
          left: 2rem;
          right: 2rem;
          justify-content: space-between;
          padding: 0rem 0rem 0rem 0.75rem;
          border: 1px solid ${$variable.color.floatingBoxBorder};
          border-radius: 9999px;
          background-color: ${$variable.color.floatingBoxBackground};
        }
        @media ${$variable.breakpoint.md} {
          bottom: 1.5rem;
          left: 1rem;
          right: 1rem;
          height: 3.5rem;
          padding: 0rem 0rem 0rem 1rem;
        }
        @media ${$variable.breakpoint.sm} {
          height: auto;
          padding: 0.5rem 0.5rem 0.5rem 1rem;
        }
        & > div {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          padding: 0rem 0.75rem;
          @media ${$variable.breakpoint.md} {
            padding: 0rem 0.5rem;
          }
          @media ${$variable.breakpoint.sm} {
            padding: 0rem;
          }
          & > * + * {
            margin-left: 1.25rem;
            @media ${$variable.breakpoint.md} {
              margin-left: 0.75rem;
            }
            @media ${$variable.breakpoint.sm} {
              margin-left: 0.5rem;
            }
          }
        }
      `}
    >
      <TopButton />
      {xl && (
        <div>
          <Timer />
          <FormLink />
        </div>
      )}
    </motion.div>
  )
}
