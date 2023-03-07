import React from 'react'
import Hero from 'sections/case-study/01-Hero'
import { graphql } from 'gatsby'

const CaseStudy = ({ data }) => {
  
  const { contentfulCaseStudy } = data

  return (
    <>
      <Hero
        title={contentfulCaseStudy.title}
        text={contentfulCaseStudy.heroText}
        indentedText={contentfulCaseStudy.heroIndentedText}
        image={contentfulCaseStudy.heroImage}
        tags={contentfulCaseStudy.tags}
        color={contentfulCaseStudy.primaryColor}
      />
    </>
  )
}

export default CaseStudy

export const pageQuery = graphql`
  query($id: String!) {
    contentfulCaseStudy(id: { eq: $id }) {
      metaTitle
      metaDescription
      title
      slug
      primaryColor
      tags
      heroImage {
        gatsbyImageData
        description
      }
      heroText
      heroIndentedText
    }
  }
`