import React from 'react'
import { graphql } from 'gatsby'
import Hero from 'sections/case-study/01-Hero'
import Challenge from 'sections/case-study/02-Challenge'

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
      <Challenge
        italicText={contentfulCaseStudy.challengeItalicText}
        text={contentfulCaseStudy.challengeText}
        image={contentfulCaseStudy.challengeImage}
        url={contentfulCaseStudy.siteUrl}
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
      challengeImage {
        gatsbyImageData
      }
      challengeItalicText
      challengeText
      siteUrl
    }
  }
`