import React from 'react'
import { buttonCSS, buttonVariable, type ButtonVariants } from './Button.style'

type ButtonProps = ButtonVariants & JSX.IntrinsicElements['button']

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, color, size, round, square, style = {}, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        {...props}
        css={buttonCSS}
        style={{ ...buttonVariable({ variant, color, size, round, square }), ...style }}
      />
    )
  },
)

export default Button
