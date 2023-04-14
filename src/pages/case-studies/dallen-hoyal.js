import React from 'react'
import Hero from 'sections/caseStudy/01-Hero'
import { useStaticQuery, graphql } from 'gatsby'

const DallenHoyal = () => {

  const images = useStaticQuery(graphql`
    query {
      heroImage: file(relativePath: {eq: "dallen-hoyal-hero.jpg"}) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `)

  return (
    <>
      <Hero 
        image={images.heroImage}
        title="Dallen Hoyal Portfolio"
        project="Design a Portfolio Website for an Interactive Experience Developer in the Salt Lake Area."
        role="Creative Direction, UX & UI Design"
      />
    </>
  )
}

export default DallenHoyal