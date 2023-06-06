import React from 'react'
import LogoProvider, { LogoContext } from './LogoProvider'

export default function Providers({ children }) {
  return (
    <LogoProvider>
      {children}
    </LogoProvider>
  )
}

export {
  LogoContext
}