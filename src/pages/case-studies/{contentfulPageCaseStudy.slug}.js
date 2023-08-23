import React from 'react'
import Hero from 'sections/caseStudy/01-Hero'
import Video from 'sections/caseStudy/02-Video'
import Picture from 'sections/caseStudy/03-Picture'
import Links from 'sections/caseStudy/04-Links'
import { graphql } from 'gatsby'

const CaseStudy = ({data}) => {

  const { contentfulPageCaseStudy } = data

  return (
    <>
      <Hero 
        image={contentfulPageCaseStudy.coverImage}
        title={contentfulPageCaseStudy.title}
        project={contentfulPageCaseStudy.description.description}
        role={contentfulPageCaseStudy.roles.join(',')}
      />
      <Video
        title1={contentfulPageCaseStudy.section1Title}
        text1={contentfulPageCaseStudy.section1Description.section1Description}
        video={{
          src: contentfulPageCaseStudy.section1Video.file.url,
          type: contentfulPageCaseStudy.section1Video.file.contentType
        }}
        title2={contentfulPageCaseStudy.section2Title}
        text2={contentfulPageCaseStudy.section2Description.section2Description}
        image1={contentfulPageCaseStudy.section2Image1}
        image2={contentfulPageCaseStudy.section2Image2}
        image3={contentfulPageCaseStudy.section2Image3}
        image4={contentfulPageCaseStudy.section2Image4}
      />
      <Picture
        title={contentfulPageCaseStudy.section3Title}
        text={contentfulPageCaseStudy.section3Description.section3Description}
        image={contentfulPageCaseStudy.section3Image}
      />
      <Links
        hide={3}
      />
    </>
  )
}

export default CaseStudy

export const pageQuery = graphql`
  query CaseStudyPage($id: String) {
    contentfulPageCaseStudy(id: { eq: $id }) {
      coverImage {
        gatsbyImageData
        filename
      }
      description {
        description
      }
      metaDescription {
        metaDescription
      }
      metaTitle
      previewImage {
        gatsbyImageData
        filename
      }
      roles
      section1Description {
        section1Description
      }
      section1Title
      section1Video {
        file {
          url
          contentType
        }
      }
      section2Description {
        section2Description
      }
      section2Image1 {
        gatsbyImageData
        filename
      }
      section2Image2 {
        gatsbyImageData
        filename
      }
      section2Image3 {
        gatsbyImageData
        filename
      }
      section2Image4 {
        gatsbyImageData
        filename
      }
      section2Title
      section3Description {
        section3Description
      }
      section3Image {
        filename
        gatsbyImageData
      }
      section3Title
      slug
      title
      year
    }
  }
`