import React from 'react'
import { graphql } from 'gatsby'
import Hero from 'sections/case-study/01-Hero'
import Challenge from 'sections/case-study/02-Challenge'
import Exploration from 'sections/case-study/03-Exploration'
import Solution from 'sections/case-study/04-Solution'

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
      <Solution
        text1={contentfulCaseStudy.solutionText1}
        italicText={contentfulCaseStudy.solutionItalicText}
        text2={contentfulCaseStudy.solutionText2}
        image1={contentfulCaseStudy.solutionImage1}
        image2={contentfulCaseStudy.solutionImage2}
        image3={contentfulCaseStudy.solutionImage3}
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
      solutionText1
      solutionItalicText
      solutionText2
      solutionImage1 {
        gatsbyImageData
      }
      solutionImage2 {
        gatsbyImageData
      }
      solutionImage3 {
        gatsbyImageData
      }
    }
  }
`