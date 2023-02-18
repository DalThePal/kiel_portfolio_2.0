import * as React from "react"
import styled from 'styled-components'
import Header from "components/Header"
import Footer from 'components/Footer'
import Scroll from 'components/Scroll'

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Scroll>
        <Header />
        {children}
        <Footer/>
      </Scroll>
    </Wrapper>
  )
}

export default Layout

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  width: 100vw;
  overflow: hidden;
`
