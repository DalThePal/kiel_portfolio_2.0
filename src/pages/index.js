import React from "react"
import Seo from "components/Seo"
import Hero from 'sections/home/01-Hero'

const IndexPage = () => {
  return (
    <>
      <Hero/>
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
