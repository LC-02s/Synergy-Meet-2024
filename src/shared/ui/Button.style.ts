import { css } from '@emotion/react'
import { $variable } from '../constants'
import { rem } from '../utils'

const buttonVariants = {
  variant: {
    default: {
      gray: {
        default: {
          color: $variable.color.gray000,
          border: $variable.color.gray800,
          background: $variable.color.gray800,
        },
        active: {
          color: $variable.color.gray000,
          border: $variable.color.gray700,
          background: $variable.color.gray700,
        },
        disabled: {
          color: $variable.color.gray700,
          border: $variable.color.gray800,
          background: $variable.color.gray800,
        },
      },
      red: {
        default: {
          color: $variable.color.red300,
          border: $variable.color.gray800,
          background: $variable.color.gray800,
        },
        active: {
          color: $variable.color.red300,
          border: $variable.color.gray700,
          background: $variable.color.gray700,
        },
        disabled: {
          color: $variable.color.red800,
          border: $variable.color.gray800,
          background: $variable.color.gray800,
        },
      },
      yellow: {
        default: {
          color: $variable.color.yellow300,
          border: $variable.color.gray800,
          background: $variable.color.gray800,
        },
        active: {
          color: $variable.color.yellow300,
          border: $variable.color.gray700,
          background: $variable.color.gray700,
        },
        disabled: {
          color: $variable.color.yellow800,
          border: $variable.color.gray800,
          background: $variable.color.gray800,
        },
      },
      green: {
        default: {
          color: $variable.color.green300,
          border: $variable.color.gray800,
          background: $variable.color.gray800,
        },
        active: {
          color: $variable.color.green300,
          border: $variable.color.gray700,
          background: $variable.color.gray700,
        },
        disabled: {
          color: $variable.color.green800,
          border: $variable.color.gray800,
          background: $variable.color.gray800,
        },
      },
      blue: {
        default: {
          color: $variable.color.blue300,
          border: $variable.color.gray800,
          background: $variable.color.gray800,
        },
        active: {
          color: $variable.color.blue300,
          border: $variable.color.gray700,
          background: $variable.color.gray700,
        },
        disabled: {
          color: $variable.color.blue800,
          border: $variable.color.gray800,
          background: $variable.color.gray800,
        },
      },
      cyan: {
        default: {
          color: $variable.color.cyan300,
          border: $variable.color.gray800,
          background: $variable.color.gray800,
        },
        active: {
          color: $variable.color.cyan300,
          border: $variable.color.gray700,
          background: $variable.color.gray700,
        },
        disabled: {
          color: $variable.color.cyan800,
          border: $variable.color.gray800,
          background: $variable.color.gray800,
        },
      },
    },
    light: {
      gray: {
        default: {
          color: $variable.color.gray050,
          border: $variable.color.gray700,
          background: $variable.color.gray700,
        },
        active: {
          color: $variable.color.gray050,
          border: $variable.color.gray600,
          background: $variable.color.gray600,
        },
        disabled: {
          color: $variable.color.gray700,
          border: $variable.color.gray800,
          background: $variable.color.gray800,
        },
      },
      red: {
        default: {
          color: $variable.color.red300,
          border: $variable.color.red800,
          background: $variable.color.red800,
        },
        active: {
          color: $variable.color.red300,
          border: $variable.color.red700,
          background: $variable.color.red700,
        },
        disabled: {
          color: $variable.color.red700,
          border: $variable.color.red900,
          background: $variable.color.red900,
        },
      },
      yellow: {
        default: {
          color: $variable.color.yellow300,
          border: $variable.color.yellow800,
          background: $variable.color.yellow800,
        },
        active: {
          color: $variable.color.yellow300,
          border: $variable.color.yellow700,
          background: $variable.color.yellow700,
        },
        disabled: {
          color: $variable.color.yellow700,
          border: $variable.color.yellow900,
          background: $variable.color.yellow900,
        },
      },
      green: {
        default: {
          color: $variable.color.green300,
          border: $variable.color.green800,
          background: $variable.color.green800,
        },
        active: {
          color: $variable.color.green300,
          border: $variable.color.green700,
          background: $variable.color.green700,
        },
        disabled: {
          color: $variable.color.green700,
          border: $variable.color.green900,
          background: $variable.color.green900,
        },
      },
      blue: {
        default: {
          color: $variable.color.blue300,
          border: $variable.color.blue800,
          background: $variable.color.blue800,
        },
        active: {
          color: $variable.color.blue300,
          border: $variable.color.blue600,
          background: $variable.color.blue600,
        },
        disabled: {
          color: $variable.color.blue600,
          border: $variable.color.blue900,
          background: $variable.color.blue900,
        },
      },
      cyan: {
        default: {
          color: $variable.color.cyan300,
          border: $variable.color.cyan800,
          background: $variable.color.cyan800,
        },
        active: {
          color: $variable.color.cyan300,
          border: $variable.color.cyan700,
          background: $variable.color.cyan700,
        },
        disabled: {
          color: $variable.color.cyan700,
          border: $variable.color.cyan900,
          background: $variable.color.cyan900,
        },
      },
    },
    filled: {
      gray: {
        default: {
          color: $variable.color.gray700,
          border: $variable.color.gray100,
          background: $variable.color.gray000,
        },
        active: {
          color: $variable.color.gray800,
          border: $variable.color.gray200,
          background: $variable.color.gray200,
        },
        disabled: {
          color: $variable.color.gray700,
          border: $variable.color.gray800,
          background: $variable.color.gray800,
        },
      },
      red: {
        default: {
          color: $variable.color.gray000,
          border: $variable.color.red600,
          background: $variable.color.red600,
        },
        active: {
          color: $variable.color.gray000,
          border: $variable.color.red400,
          background: $variable.color.red400,
        },
        disabled: {
          color: $variable.color.red700,
          border: $variable.color.red900,
          background: $variable.color.red900,
        },
      },
      yellow: {
        default: {
          color: $variable.color.gray000,
          border: $variable.color.yellow600,
          background: $variable.color.yellow600,
        },
        active: {
          color: $variable.color.gray000,
          border: $variable.color.yellow400,
          background: $variable.color.yellow400,
        },
        disabled: {
          color: $variable.color.yellow700,
          border: $variable.color.yellow900,
          background: $variable.color.yellow900,
        },
      },
      green: {
        default: {
          color: $variable.color.gray000,
          border: $variable.color.green600,
          background: $variable.color.green600,
        },
        active: {
          color: $variable.color.gray000,
          border: $variable.color.green400,
          background: $variable.color.green400,
        },
        disabled: {
          color: $variable.color.green700,
          border: $variable.color.green900,
          background: $variable.color.green900,
        },
      },
      blue: {
        default: {
          color: $variable.color.gray000,
          border: $variable.color.blue500,
          background: $variable.color.blue500,
        },
        active: {
          color: $variable.color.gray000,
          border: $variable.color.blue400,
          background: $variable.color.blue400,
        },
        disabled: {
          color: $variable.color.blue600,
          border: $variable.color.blue900,
          background: $variable.color.blue900,
        },
      },
      cyan: {
        default: {
          color: $variable.color.gray000,
          border: $variable.color.cyan600,
          background: $variable.color.cyan600,
        },
        active: {
          color: $variable.color.gray000,
          border: $variable.color.cyan500,
          background: $variable.color.cyan500,
        },
        disabled: {
          color: $variable.color.cyan700,
          border: $variable.color.cyan900,
          background: $variable.color.cyan900,
        },
      },
    },
    subtle: {
      gray: {
        default: {
          color: $variable.color.gray000,
          border: 'transparent',
          background: 'transparent',
        },
        active: {
          color: $variable.color.gray000,
          border: $variable.color.gray700,
          background: $variable.color.gray700,
        },
        disabled: {
          color: $variable.color.gray700,
          border: 'transparent',
          background: 'transparent',
        },
      },
      red: {
        default: {
          color: $variable.color.red300,
          border: 'transparent',
          background: 'transparent',
        },
        active: {
          color: $variable.color.red300,
          border: $variable.color.red800,
          background: $variable.color.red800,
        },
        disabled: {
          color: $variable.color.red800,
          border: 'transparent',
          background: 'transparent',
        },
      },
      yellow: {
        default: {
          color: $variable.color.yellow300,
          border: 'transparent',
          background: 'transparent',
        },
        active: {
          color: $variable.color.yellow300,
          border: $variable.color.yellow800,
          background: $variable.color.yellow800,
        },
        disabled: {
          color: $variable.color.yellow800,
          border: 'transparent',
          background: 'transparent',
        },
      },
      green: {
        default: {
          color: $variable.color.green300,
          border: 'transparent',
          background: 'transparent',
        },
        active: {
          color: $variable.color.green300,
          border: $variable.color.green800,
          background: $variable.color.green800,
        },
        disabled: {
          color: $variable.color.green800,
          border: 'transparent',
          background: 'transparent',
        },
      },
      blue: {
        default: {
          color: $variable.color.blue300,
          border: 'transparent',
          background: 'transparent',
        },
        active: {
          color: $variable.color.blue300,
          border: $variable.color.blue800,
          background: $variable.color.blue800,
        },
        disabled: {
          color: $variable.color.blue800,
          border: 'transparent',
          background: 'transparent',
        },
      },
      cyan: {
        default: {
          color: $variable.color.cyan300,
          border: 'transparent',
          background: 'transparent',
        },
        active: {
          color: $variable.color.cyan300,
          border: $variable.color.cyan800,
          background: $variable.color.cyan800,
        },
        disabled: {
          color: $variable.color.cyan800,
          border: 'transparent',
          background: 'transparent',
        },
      },
    },
    floating: {
      gray: {
        default: {
          color: $variable.color.gray000,
          border: $variable.color.floatingBoxBorder,
          background: $variable.color.floatingBoxBackground,
        },
        active: {
          color: $variable.color.gray000,
          border: $variable.color.floatingBoxBorder,
          background: $variable.color.floatingBoxBorder,
        },
        disabled: {
          color: $variable.color.gray400,
          border: $variable.color.floatingBoxBorder,
          background: $variable.color.floatingBoxBackground,
        },
      },
      red: {
        default: {
          color: $variable.color.red300,
          border: $variable.color.floatingBoxBorder,
          background: $variable.color.floatingBoxBackground,
        },
        active: {
          color: $variable.color.red300,
          border: $variable.color.floatingBoxBorder,
          background: $variable.color.floatingBoxBorder,
        },
        disabled: {
          color: $variable.color.gray400,
          border: $variable.color.floatingBoxBorder,
          background: $variable.color.floatingBoxBackground,
        },
      },
      yellow: {
        default: {
          color: $variable.color.yellow300,
          border: $variable.color.floatingBoxBorder,
          background: $variable.color.floatingBoxBackground,
        },
        active: {
          color: $variable.color.yellow300,
          border: $variable.color.floatingBoxBorder,
          background: $variable.color.floatingBoxBorder,
        },
        disabled: {
          color: $variable.color.gray400,
          border: $variable.color.floatingBoxBorder,
          background: $variable.color.floatingBoxBackground,
        },
      },
      green: {
        default: {
          color: $variable.color.green300,
          border: $variable.color.floatingBoxBorder,
          background: $variable.color.floatingBoxBackground,
        },
        active: {
          color: $variable.color.green300,
          border: $variable.color.floatingBoxBorder,
          background: $variable.color.floatingBoxBorder,
        },
        disabled: {
          color: $variable.color.gray400,
          border: $variable.color.floatingBoxBorder,
          background: $variable.color.floatingBoxBackground,
        },
      },
      blue: {
        default: {
          color: $variable.color.blue300,
          border: $variable.color.floatingBoxBorder,
          background: $variable.color.floatingBoxBackground,
        },
        active: {
          color: $variable.color.blue300,
          border: $variable.color.floatingBoxBorder,
          background: $variable.color.floatingBoxBorder,
        },
        disabled: {
          color: $variable.color.gray400,
          border: $variable.color.floatingBoxBorder,
          background: $variable.color.floatingBoxBackground,
        },
      },
      cyan: {
        default: {
          color: $variable.color.cyan300,
          border: $variable.color.floatingBoxBorder,
          background: $variable.color.floatingBoxBackground,
        },
        active: {
          color: $variable.color.cyan300,
          border: $variable.color.floatingBoxBorder,
          background: $variable.color.floatingBoxBorder,
        },
        disabled: {
          color: $variable.color.gray400,
          border: $variable.color.floatingBoxBorder,
          background: $variable.color.floatingBoxBackground,
        },
      },
    },
  },
  size: {
    xs: {
      height: rem(32),
      padding: '0.25rem 0.5rem',
      font: $variable.font.size200,
    },
    sm: {
      height: rem(36),
      padding: '0.25rem 0.5rem',
      font: $variable.font.size200,
    },
    md: {
      height: rem(40),
      padding: '0.5rem 0.75rem',
      font: $variable.font.size300,
    },
    lg: {
      height: rem(48),
      padding: '0.5rem 1rem',
      font: $variable.font.size400,
    },
    xl: {
      height: rem(64),
      padding: '0.75rem 1.5rem',
      font: $variable.font.size400,
    },
  },
  round: {
    xs: rem(4),
    sm: rem(8),
    md: rem(12),
    lg: rem(16),
    xl: rem(20),
    full: '9999px',
  },
}

export interface ButtonVariants {
  variant?: keyof typeof buttonVariants.variant
  color?: keyof typeof buttonVariants.variant.default
  size?: keyof typeof buttonVariants.size
  round?: keyof typeof buttonVariants.round
  square?: boolean
}

export function buttonVariable({
  variant = 'default',
  color = 'gray',
  size = 'md',
  round = 'sm',
  square = false,
}: ButtonVariants) {
  const { default: defaultColor, active, disabled } = buttonVariants.variant[variant][color]
  const { height, padding, font } = buttonVariants.size[size]

  return {
    '--button-width': square ? height : 'auto',
    '--button-height': height,
    '--button-padding': square ? '0rem' : padding,
    '--button-font-size': font,
    '--button-color-default': defaultColor.color,
    '--button-color-active': active.color,
    '--button-color-disabled': disabled.color,
    '--button-border-default': defaultColor.border,
    '--button-border-active': active.border,
    '--button-border-disabled': disabled.border,
    '--button-background-default': defaultColor.background,
    '--button-background-active': active.background,
    '--button-background-disabled': disabled.background,
    '--button-round': buttonVariants.round[round],
  } as React.CSSProperties
}

export const buttonCSS = css`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: var(--button-width);
  height: auto;
  min-height: var(--button-height);
  box-sizing: border-box;
  padding: var(--button-padding);
  border: 1px solid var(--button-border-default);
  font-size: var(--button-font-size);
  font-weight: ${$variable.font.medium};
  color: var(--button-color-default);
  word-break: keep-all;
  background-color: var(--button-background-default);
  border-radius: var(--button-round);
  cursor: pointer;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  &:focus,
  &:hover,
  &:active {
    color: var(--button-color-active);
    border-color: var(--button-border-active);
    background-color: var(--button-background-active);
  }
  &:disabled,
  &[aria-disabled='true'] {
    color: var(--button-color-disabled);
    border-color: var(--button-border-disabled);
    background-color: var(--button-background-disabled);
    cursor: not-allowed;
  }
`
