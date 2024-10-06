import React from 'react'
import { motion } from 'framer-motion'
import { css } from '@emotion/react'

const dimmedStyle = css`
  position: absolute;
  z-index: -1;
  top: 0rem;
  bottom: 0rem;
  left: 0rem;
  right: 0rem;
  padding: 0rem;
  margin: 0rem;
  border: none;
  background-color: rgba(255, 255, 255, 0.2);
`

const Dimmed = React.forwardRef<HTMLDivElement, React.ComponentProps<typeof motion.div>>(
  (props, ref) => <motion.div ref={ref} {...props} css={dimmedStyle} />,
)

export default Dimmed
