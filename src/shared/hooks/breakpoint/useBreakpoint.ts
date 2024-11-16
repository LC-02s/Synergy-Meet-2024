import React from 'react'
import { create } from 'zustand'
import { $variable } from '../../constants'

interface Breakpoint {
  xs: boolean
  sm: boolean
  md: boolean
  lg: boolean
  xl: boolean
}

interface BreakpointSetter {
  (breakpoint: Breakpoint): void
}

interface BreakpointStore {
  breakpoint: Breakpoint
  updateBreakpoint: BreakpointSetter
}

const useBreakpointStore = create<BreakpointStore>((set) => ({
  breakpoint: { xs: false, sm: false, md: false, lg: false, xl: false },
  updateBreakpoint: (breakpoint) => set({ breakpoint }),
}))

export function useUpdateMedia() {
  const updateBreakpoint = useBreakpointStore((state) => state.updateBreakpoint)
  const updateMedia = React.useCallback(() => {
    updateBreakpoint({
      xs: window.matchMedia($variable.breakpoint.xs).matches,
      sm: window.matchMedia($variable.breakpoint.sm).matches,
      md: window.matchMedia($variable.breakpoint.md).matches,
      lg: window.matchMedia($variable.breakpoint.lg).matches,
      xl: window.matchMedia($variable.breakpoint.xl).matches,
    })
  }, [updateBreakpoint])

  return updateMedia
}

export function useBreakpoint(point: keyof Breakpoint) {
  return useBreakpointStore((state) => state.breakpoint[point])
}
