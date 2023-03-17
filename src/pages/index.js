import React from "react"
import Seo from "components/Seo"
import Hero from 'sections/home/01-Hero'
import Work from 'sections/home/02-Work'

const IndexPage = () => {
  return (
    <>
      <Hero/>
      <Work/>
    </>
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
