import React from 'react'
import { MediaProvider } from '@/shared/ui'

export default function Provider({ children }: React.PropsWithChildren) {
  return <MediaProvider>{children}</MediaProvider>
}
