import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import styled, { css } from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

import colors from 'styles/colors'
import text from 'styles/text'

import { fresponsive, ftablet, fmobile } from 'utils/fullyResponsive'

const DATA = [
  "Put People First: Design for the humans who will use it, and make their experience top priority.",
  "Less is More: Simple designs are memorable and usable - don't add clutter, subtract instead.",
  "Iterate, Iterate, Iterate: Design is a journey, not a destination - keep collecting feedback and refining."
]

const Manifesto = () => {

  const images = useStaticQuery(graphql`
    query ManifestoQuery {
      headshot: file(relativePath: {eq: "headshot.jpg"}) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `)

  const headshot = getImage(images.headshot)

  const items = DATA.map((item, index) => (
    <Item key={item}>
      <Num>0{index + 1}.</Num>
      <Text>{item}</Text>
    </Item>
  ))

  return (
    <Wrapper>
      <Headshot image={headshot} alt="Brandon Headshot"/>
      <Content>
        <Title>Manifesto</Title>
        <List>{items}</List>
        <Copywrite>Design Manifesto</Copywrite>
        <Means>What great design means to me.</Means>
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

  ${fmobile(css`
    height: 1986px;
  `)}
`

const Headshot = styled(GatsbyImage)`
  position: absolute;
  z-index: 3;
  top: 0;
  left: 0;

  ${fresponsive(css`
    width: 840px;
    height: 700px;
  `)}

  ${ftablet(css`
    width: 613px;
  `)}

  ${fmobile(css`
    width: 281px;
    height: 320px;
  `)}
`

const Content = styled.div`
  background-color: ${colors.black};
  position: absolute;
  overflow: hidden;
  right: 0;
  bottom: 0;

  ${fresponsive(css`
    width: 1190px;
    height: 1319px;
  `)}

  ${ftablet(css`
    width: 819px;
  `)}

  ${fmobile(css`
    width: 100%;
    height: 1716px;
  `)}
`

const Title = styled.h2`
  position: absolute;
  ${text.h1}
  color: ${colors.white};
  transform: rotate(90deg) translateY(-100%);
  transform-origin: top left;
  font-weight: 700;

  ${fresponsive(css`
    left: 40px;
    top: 464px;
  `)}

  ${fmobile(css`
    ${text.h3}
    font-weight: 700;
    top: 15px;
    left: -40px;
  `)}
`

const List = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;

  ${fresponsive(css`
    gap: 107px;
    right: 240px;
    top: 651px;
  `)}

  ${ftablet(css`
    gap: 112px;
    right: 60px;
  `)}

  ${fmobile(css`
    gap: 100px;
    left: 47px;
  `)}
`

const Item = styled.li`
  display: flex;
  align-items: center;
  
  ${fresponsive(css`
    gap: 65px;
  `)}

  ${ftablet(css`
    gap: 47px;
  `)}

  ${fmobile(css`
    flex-direction: column;
    align-items: flex-start;
    gap: 25px;
  `)}
`

const Num = styled.span`
  ${text.n2}
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px ${colors.white};
`

const Text = styled.p`
  ${text.h6}
  color: ${colors.white};

  ${fresponsive(css` 
    width: 480px;
  `)}

  ${ftablet(css`
    ${text.h7}
    width: 350px;
  `)}

  ${fmobile(css`
    ${text.h7}
    width: 280px;
  `)}
`

const Copywrite = styled.span`
  ${text.h4}
  position: absolute;
  color: ${colors.white};

  ${fresponsive(css`
    top: 50px;
    right: 120px;
    width: 360px;
  `)}

  ${ftablet(css`
    right: 43px;
    width: 264px;
  `)}

  ${fmobile(css`
    ${text.h7}
    top: 75px;
    right: 47px;
    width: 140px;
  `)}

  &::after {
    font-family: 'Neue Montreal';
    font-style: normal;
    font-weight: 400;
    line-height: 110%;
    letter-spacing: -0.02em;
    text-decoration: none;
    position: absolute;
    content: '\u00a9';
    top: 50%;
    right: 30%;

    ${fresponsive(css`
      font-size: 30px;
    `)}

    ${ftablet(css`
      right: 4%;
    `)}

    ${fmobile(css`
      font-size: 25px;
      right: 10%;
    `)}
  }
`

const Means = styled.span`
  ${text.body1}
  position: absolute;
  color: ${colors.white};

  ${fresponsive(css`
    top: 506px;
    right: 360px;
    width: 120px;
  `)}

  ${ftablet(css`
    right: 187px;
  `)}

  ${fmobile(css`
    top: 437px;
    right: 47px;
  `)}
`
