import React from 'react'
import styled, { css } from 'styled-components'
import { fresponsive } from 'utils/fullyResponsive'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import colors from 'styles/colors'
import text from 'styles/text'

const Manifesto = () => {

  const images = useStaticQuery(graphql`
    query ManifestoQuery {
      headshot: file(relativePath: {eq: "headshot.jpg"}) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  `)

  return (
    <Wrapper>
      <Headshot image={images.headshot.childImageSharp.gatsbyImageData}/>
      <Content>

      </Content>
    </Wrapper>
  )
}

export default Manifesto

const Wrapper = styled.section`
  position: relative;
  background-color: ${colors.white};

  ${fresponsive(css`
    height: 1475px;
  `)}
`

const Headshot = styled(GatsbyImage)`
  position: absolute !important;
  z-index: 2;
  left: 0;
  top: 0;

  ${fresponsive(css`
    width: 840px;
    height: 700px;
  `)}
`

const Content = styled.div`
  position: absolute;
  z-index: 1;
  background-color: ${colors.black};
  right: 0;
  bottom: 0;

  ${fresponsive(css`
    width: 1190px;
    height: 1319px;
  `)}
`

