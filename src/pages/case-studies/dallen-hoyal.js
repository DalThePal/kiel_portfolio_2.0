import React from 'react'
import Hero from 'sections/caseStudy/01-Hero'
import Video from 'sections/caseStudy/02-Video'
import Picture from 'sections/caseStudy/03-Picture'
import { graphql } from 'gatsby'
import WebM from 'images/dallen-hoyal.webm'

const DallenHoyal = ({data}) => {
  return (
    <>
      <Hero 
        image={data.heroImage}
        title="Dallen Hoyal Portfolio"
        project="Design a Portfolio Website for an Interactive Experience Developer in the Salt Lake Area."
        role="Creative Direction, UX & UI Design"
      />
      <Video
        title1="Retro 80’s – Futuristic Design"
        text1="When it came to designing Dallen Hoyal’s portfolio, we wanted to create an experience that was equally futuristic and retro. This meant blending modern web design elements with the classic 80s synthwave look and feel. We incorporated bold colors and shapes, as well as patterns and textures that would make the portfolio stand out. By using a combination of modern and retro design elements, we were able to create a portfolio that was both user-friendly and visually stunning."
        video={WebM}
        title2="Showcasing Web Development Skills"
        text2="In addition to creating a visually striking portfolio, it was important to make sure that Dallen’s development skills were showcased. We used the latest web technologies, such as React, GSAP, HTML5, CSS3 to create an experience that was both dynamic and engaging. We also integrated parallax scrolling, animation, and other interactive elements to add depth and movement to the design. By utilizing these technologies, we were able to create a portfolio that demonstrated Dallen’s web development abilities."
        image1={data.image1}
        image2={data.image2}
        image3={data.image3}
        image4={data.image4}
      />
      <Picture
        title="Simple but Bold Experience"
        text="Our goal was to create a portfolio that was both visually stunning and user-friendly. To achieve this, we used a clean and streamlined design that was easy to navigate. We also incorporated simple scroll based landing page that had only one function: showcase work. By creating an intuitive and user-friendly design, we were able to create a portfolio that was both aesthetically pleasing and easy to use."
      />
    </>
  )
}

export default DallenHoyal

export const pageQuery = graphql`
  query {
    heroImage: file(relativePath: {eq: "dallen-hoyal-hero.jpg"}) {
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
  }
`