import * as React from "react"
import { graphql } from 'gatsby'

import Seo from "components/seo"

import Hero from 'sections/home/01-Hero'
import Marquee from "sections/home/02-Marquee"
import SelectedWorks from 'sections/home/03-SelectedWorks'
import Manifesto from "sections/home/04-Manifesto"
import Services from 'sections/home/05-Services'

const IndexPage = ({ data }) => {
  return (
    <>
      <Hero/>
      <Marquee/>
      <SelectedWorks
        caseStudies={data.contentfulHomePage.featuredCaseStudies}
      />
      <Manifesto/>
      <Services/>
    </>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage

export const pageQuery = graphql`
  query HomePageQuery {
    contentfulHomePage {
      metaTitle
      metaDescription
      featuredCaseStudies {
        title
        tags
        featuredImage {
          gatsbyImageData(
            placeholder: BLURRED
          )
        }
      }
    } 
  }
`
