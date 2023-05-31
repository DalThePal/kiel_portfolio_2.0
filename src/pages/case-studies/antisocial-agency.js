import React from 'react'
import Hero from 'sections/caseStudy/01-Hero'
import Video from 'sections/caseStudy/02-Video'
import Picture from 'sections/caseStudy/03-Picture'
import Links from 'sections/caseStudy/04-Links'
import { graphql } from 'gatsby'
import WebM from 'images/anti-social.webm'

const AntiSocial = ({data}) => {
  return (
    <>
      <Hero 
        image={data.heroImage}
        title="AntiSocial Agency"
        project="Redesign the website for Antisocial Agency. A social media focused agency born from social, built for impact."
        role="Creative Direction, UX, UI, Research"
        url="https://antisocialsolutions.com/"
      />
      <Video
        title1="A Strategic shift in an online presence"
        text1="Antisocial, the social media agency owned by Thinkingbox, was itching to make some waves and transform the way they were perceived by their clients and the industry. They were dead-set on becoming the go-to trusted leader in social media marketing, and we were ready to help them achieve that. We dove headfirst into the world of social media marketing, scouring through their competitors with a fine-tooth comb. We were determined to help Antisocial blaze a trail. Armed with newfound insights, we took a hard look at Antisocial's values and objectives, ensuring that they permeated every aspect of the user experience."
        video={WebM}
        title2="Creating space for personality in work"
        text2="Taking a closer look at the Antisocial brand and the wild marketing & design efforts they had executed for a general audience of Gen Z'rs, my initial reaction was to push the boundaries and go all out. However, I had to remind myself that the target audience for the website were lead marketers who were seeking out new social campaigns. With this in mind, I reimagined the website design to maintain the brand identity while creating moments that highlighted their impressive work. The result was a clean, contemporary website with subtle interactive elements that brought out their unique personality."
        image1={data.image1}
        image2={data.image2}
        image3={data.image3}
        image4={data.image4}
      />
      <Picture
        title="Turning heads on day 1"
        text="Since the launch of the new site Antisocial has seen a significant impact on incoming work. With the new site making it really easy to learn about the beautiful work that is being done it also give social media marketers access to articles and insights on the daily from the leaders in social media marketing & design."
        image={data.imageLarge}
      />
      <Links
        hide={0}
      />
    </>
  )
}

export default AntiSocial

export const pageQuery = graphql`
  query {
    heroImage: file(relativePath: {eq: "anti-social-hero.jpg"}) {
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