import React from 'react'
import { graphql } from 'gatsby'
import Hero from 'sections/case-study/01-Hero'
import Challenge from 'sections/case-study/02-Challenge'
import Exploration from 'sections/case-study/03-Exploration'

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
      <Exploration
        text={contentfulCaseStudy.explorationText}
        image1={contentfulCaseStudy.explorationImage1}
        image2={contentfulCaseStudy.explorationImage2}
        image3={contentfulCaseStudy.explorationImage3}
        image4={contentfulCaseStudy.explorationImage4}
        image5={contentfulCaseStudy.explorationImage5}
        image6={contentfulCaseStudy.explorationImage6}
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
      explorationText
      explorationImage1 {
        gatsbyImageData
      }
      explorationImage2 {
        gatsbyImageData
      }
      explorationImage3 {
        gatsbyImageData
      }
      explorationImage4 {
        gatsbyImageData
      }
      explorationImage5 {
        gatsbyImageData
      }
      explorationImage6 {
        gatsbyImageData
      }
    }
  }
`