import React from "react"
import Seo from "components/Seo"
import Hero from 'sections/home/01-Hero'
import Work from 'sections/home/02-Work'
import CaseStudies from "sections/home/03-CaseStudies"
import styled from 'styled-components'
import colors from 'styles/colors'

const IndexPage = () => {
  return (
    <Wrapper>
      <Hero/>
      <Work/>
      <CaseStudies/>
    </Wrapper>
  )
}

export const Head = () => {
  return (
    <Seo
      title="Kiel Cummings"
      description="Kiel Cummings Portfolio"
      pathname="/"
    />
  )
}

export default IndexPage

const Wrapper = styled.div`
  background-color: ${colors.black};
`