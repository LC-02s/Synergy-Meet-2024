import React from 'react'
import { MediaProvider } from '@/shared/hooks'

export default function Provider({ children }: React.PropsWithChildren) {
  return <MediaProvider>{children}</MediaProvider>
}
