import React, { useMemo } from 'react'
import styled, { css } from 'styled-components'
import { fresponsive } from 'utils/fullyResponsive'
import colors from 'styles/colors'
import text from 'styles/text'
import { navigate, useStaticQuery, graphql } from 'gatsby'
import RotatingTitle from './RotatingTitle'
import { GatsbyImage } from 'gatsby-plugin-image'
import Study, { Inner } from './Study'

const CaseStudyLinks = ({ hide }) => {

  const images = useStaticQuery(graphql`
    query {
      antiSocial: file(relativePath: {eq: "anti-social-case-study.jpg"}) {
        childImageSharp {
          gatsbyImageData
        }
      }
      dallenHoyal: file(relativePath: {eq: "dallen-hoyal-case-study.jpg"}) {
        childImageSharp {
          gatsbyImageData
        }
      }
      idk: file(relativePath: {eq: "idk-case-study.jpg"}) {
        childImageSharp {
          gatsbyImageData
        }
      }
      lemond: file(relativePath: {eq: "lemond-case-study.jpg"}) {
        childImageSharp {
          gatsbyImageData
        }
      }
      source7: file(relativePath: {eq: "source-7-case-study.jpg"}) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `)

  const studies = useMemo(() => [
    {
      route: "/case-studies/antisocial-agency",
      title: "AntiSocial Agency",
      image: images.antiSocial,
      year: "2023",
      role: <>Creative&nbsp;Direction, UX, UI</>
    },
    {
      route: "/case-studies/adobe-consonant",
      title: "Adobe Consonant",
      image: images.idk,
      year: "2023",
      role: <>Creative&nbsp;Direction, Branding</>
    },
    {
      route: "/case-studies/jasper-ai",
      title: "Jasper AI",
      image: images.antiSocial,
      year: "2023",
      role: <>Creative&nbsp;Direction, UX, UI</>
    },
    {
      route: "/case-studies/dallen-hoyal",
      title: "Dallen Hoyal",
      image: images.dallenHoyal,
      year: "2023",
      role: <>Creative&nbsp;Direction, UX, UI</>
    },
    {
      route: "/case-studies/lemond-cycles",
      title: "Lemond Cycles",
      image: images.lemond,
      year: "2020",
      role: <>Creative&nbsp;Direction, Branding</>
    },
    {
      route: "/case-studies/source-7'",
      title: "Source 7",
      image: images.source7,
      year: "2020",
      role: <>Creative&nbsp;Direction, Branding, UX, UI</>
    },
  ], [images])

  return (
    <Wrapper>
      {hide !== 0 && <CaseStudy1
        data={studies[0]}
      />}
     {hide !== 1 && <CaseStudy2
        data={studies[1]}
     />}
      {hide !== 2 && <CaseStudy3
        data={studies[2]}
      />}
      {hide !== 3 && <CaseStudy4
        data={studies[3]}
      />}
      {hide !== 4 && <CaseStudy5
        data={studies[4]}
      />}
      {hide !== 5 && <CaseStudy6
        data={studies[5]}
      />}
    </Wrapper>
  )
}

export default CaseStudyLinks

const Wrapper = styled.div`
  position: relative;
  z-index: 8;
  background-color: ${colors.black};
  width: 100%;
  display: flex;
  flex-direction: column;

  ${fresponsive(css`
    gap: 64px;
  `)}
`

const CaseStudy1 = styled(Study)`

  ${Inner} {
    ${fresponsive(css`
      left: 133px;
    `)}
  }
`

const CaseStudy2 = styled(Study)`
  ${Inner} {
    ${fresponsive(css`
      right: 133px;
    `)}
  }
`

const CaseStudy3 = styled(Study)`
  ${Inner} {
    ${fresponsive(css`
      right: 698px;
    `)}
  }
`

const CaseStudy4 = styled(Study)`
  ${Inner} {
    ${fresponsive(css`
      left: 133px;
    `)}
  }
`

const CaseStudy5 = styled(Study)`
  ${Inner} {
    ${fresponsive(css`
      right: 486px;
    `)}
  }
`

const CaseStudy6 = styled(Study)`
  ${Inner} {
    ${fresponsive(css`
      right: 278px;
    `)}
  }
`
