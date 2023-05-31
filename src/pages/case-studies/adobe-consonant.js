import React from 'react'
import Hero from 'sections/caseStudy/01-Hero'
import Video from 'sections/caseStudy/02-Video'
import Picture from 'sections/caseStudy/03-Picture'
import Links from 'sections/caseStudy/04-Links'
import { graphql } from 'gatsby'
import WebM from 'images/dallen-hoyal.webm'

const AdobeConsonant = ({data}) => {
  return (
    <>
      <Hero 
        image={data.heroImage}
        title="Adobe Consonant"
        project="Rethinking Action Based Tables for the Adobe.com platform."
        role="Design Director, UX Design, UX Research"
      />
      <Video
        title1="Eliminating Inconsistencies"
        text1="We observed inconsistencies across platforms during our audit of information tables on Adobe.com. To create a consistent standard of usage, our goal is to create a Table component that is an adaptive solution for action based tables on both mobile and desktop. This approach will help us to eliminate confusion that comes with breaking established visual cues, allowing users to utilize the component faster."
        video={WebM}
        title2="Establishing Versatile Standards"
        text2="When creating a Table component, we must establish versatile standards for content, customization, sizing, and purpose. This means that we need to make sure that the component works on both mobile and desktop and is able to adapt to various types of content. By doing this, we can ensure that the component is easy to use, regardless of the device or context."
        image1={data.image1}
        image2={data.image2}
        image3={data.image3}
        image4={data.image4}
      />
      <Picture
        title="Building a User-Centric System"
        text="We want to create a Table component that is user-centric, allowing users to quickly understand and navigate the information presented. This means that the component must be designed to provide clear visual cues and help guide users to the right action. With our adaptive Table component, we can ensure that users can find and utilize the information they need faster and more efficiently."
        image={data.imageLarge}
      />
      <Links
        hide={1}
      />
    </>
  )
}

export default AdobeConsonant

export const pageQuery = graphql`
  query {
    heroImage: file(relativePath: {eq: "adobe-consonant-hero.jpg"}) {
      childImageSharp {
        gatsbyImageData
      }
    }
    image1: file(relativePath: {eq: "dallen-hoyal-1.jpg"}) {
      childImageSharp {
        gatsbyImageData
      }
    }
    image2: file(relativePath: {eq: "dallen-hoyal-2.jpg"}) {
      childImageSharp {
        gatsbyImageData
      }
    }
    image3: file(relativePath: {eq: "dallen-hoyal-3.jpg"}) {
      childImageSharp {
        gatsbyImageData
      }
    }
    image4: file(relativePath: {eq: "dallen-hoyal-4.jpg"}) {
      childImageSharp {
        gatsbyImageData
      }
    }
    imageLarge: file(relativePath: {eq: "dallen-hoyal-large.jpg"}) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`