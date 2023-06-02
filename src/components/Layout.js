import React from "react"
import styled from 'styled-components'
import Header from "components/Header"
import Footer from 'components/Footer'
import Scroll from 'components/Scroll'
import Preloader from "components/Preloader"
import { useTrackPageReady } from 'utils/pageReady'

const Layout = ({ children }) => {

  useTrackPageReady()

  return (
    <Wrapper>
      <Header />
      <Preloader/>
      <Scroll>
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
