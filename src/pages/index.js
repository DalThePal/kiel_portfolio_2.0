import * as React from "react"
import { graphql } from 'gatsby'
import Seo from "components/seo"
import Hero from 'sections/home/01-Hero'
import Marquee from "sections/home/02-Marquee"
import Projects from 'sections/home/03-Projects'
import Manifesto from 'sections/home/04-Manifesto'

const IndexPage = ({ data }) => {
  return (
    <>
      <Hero/>
      <Marquee/>
      <Projects
        caseStudies={data.contentfulHomePage.featuredCaseStudies}
      />
      <Manifesto/>
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
