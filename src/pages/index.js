import React from "react"
import styled from 'styled-components'
import gsap from 'gsap'
import colors from 'styles/colors'
import Seo from "components/Seo"
import Hero from 'sections/home/01-Hero'
import Work from 'sections/home/02-Work'

const IndexPage = () => {
  return (
    <Wrapper>
      <Hero/>
      <Work/>
    </Wrapper>
  )
}

export const Head = () => {
  return (
    <Seo
      title="Kiel Cummings"
      description="Kiel Cumming Portfolio"
      pathname="/"
    />
  )
}

export default IndexPage

const Wrapper = styled.div`
  background-color: ${colors.tan};
`