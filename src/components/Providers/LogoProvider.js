import React, { createContext, useState } from 'react'
import colors from 'styles/colors'

export const LogoContext = createContext()

export default function LogoProvider({children}) {
  const [color, setColor] = useState(colors.black)

  return (
    <LogoContext.Provider value={{color, setColor}}>
      {children}
    </LogoContext.Provider>
  )
}