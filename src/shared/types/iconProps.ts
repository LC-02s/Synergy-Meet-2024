import React from 'react'
import type { Interpolation, Theme } from '@emotion/react'

export type IconProps = React.SVGProps<SVGSVGElement> & {
  css?: Interpolation<Theme>
}
