import React from 'react'
import { graphql } from 'gatsby'
import Hero from 'sections/case-study/01-Hero'
import Challenge from 'sections/case-study/02-Challenge'
import Exploration from 'sections/case-study/03-Exploration'
import Solution from 'sections/case-study/04-Solution'
import Results from 'sections/case-study/05-Results'
import Marquee from 'sections/case-study/06-Marquee'

const CaseStudy = ({ data }) => {
  
  const { contentfulCaseStudy } = data
  console.log(contentfulCaseStudy)

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
      <Results
        text1={contentfulCaseStudy.resultsText1}
        italicText={contentfulCaseStudy.resultsItalicText}
        text2={contentfulCaseStudy.resultsText2}
        image1={contentfulCaseStudy.resultsImage1}
        image2={contentfulCaseStudy.resultsImage2}
        image3={contentfulCaseStudy.resultsImage3}
        image4={contentfulCaseStudy.resultsImage4}
        image5={contentfulCaseStudy.resultsImage5}
      />
      <Marquee/>
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
        description
      }
      challengeItalicText
      challengeText
      siteUrl
      explorationText
      explorationImage1 {
        gatsbyImageData
        description
      }
      explorationImage2 {
        gatsbyImageData
        description
      }
      explorationImage3 {
        gatsbyImageData
        description
      }
      explorationImage4 {
        gatsbyImageData
        description
      }
      explorationImage5 {
        gatsbyImageData
        description
      }
      explorationImage6 {
        gatsbyImageData
        description
      }
      solutionText1
      solutionItalicText
      solutionText2
      solutionImage1 {
        gatsbyImageData
        description
      }
      solutionImage2 {
        gatsbyImageData
        description
      }
      solutionImage3 {
        gatsbyImageData
        description
      }
      resultsText1
      resultsItalicText
      resultsText2
      resultsImage1 {
        gatsbyImageData
        description
      }
      resultsImage2 {
        gatsbyImageData
        description
      }
      resultsImage3 {
        gatsbyImageData
        description
      }
      resultsImage4 {
        gatsbyImageData
        description
      }
      resultsImage5 {
        gatsbyImageData
        description
      }
    }
  }
`