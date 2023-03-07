import React from 'react'
import styled, { css } from 'styled-components'
import { fresponsive } from 'utils/fullyResponsive'

import { GatsbyImage } from 'gatsby-plugin-image'

import colors from 'styles/colors'
import text from 'styles/text'

const Exploration = ({
  text,
  image1,
  image2,
  image3,
  image4,
  image5,
  image6
}) => {
  return (
    <Wrapper>
      <Content>
        <Num>02</Num>
        <Title>Exploration</Title>
        <Searching>Searching High & Low</Searching>
        <Text>{text}</Text>
      </Content>
      <Image1 image={image1.gatsbyImageData} alt={image1.description}/>
      <Image2 image={image2.gatsbyImageData} alt={image2.description}/>
      <Image3 image={image3.gatsbyImageData} alt={image3.description}/>
      <Image4 image={image4.gatsbyImageData} alt={image4.description}/>
      <Image5 image={image5.gatsbyImageData} alt={image5.description}/>
      <Image6 image={image6.gatsbyImageData} alt={image5.description}/>
    </Wrapper>
  )
}

export default Exploration

const Wrapper = styled.section`
  position: relative;
  background-color: ${colors.white};

  ${fresponsive(css`
    height: 1687px;
  `)}
`

const Content = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  left: 50%;
  transform: translateX(-50%);

  ${fresponsive(css`
    top: 150px;
  `)}
`

const Title = styled.h6`
  position: relative;
  z-index: 2;
  ${text.h7}
  color: ${colors.black};
  text-align: center;

  ${fresponsive(css`
    margin-bottom: 15px;
  `)}
`

const Searching = styled.span`
  position: relative;
  z-index: 2;
  ${text.d3};
  color: ${colors.black};
  text-align: center;

  ${fresponsive(css`
    margin-bottom: 25px;
  `)}
`

const Text = styled.p`
  position: relative;
  z-index: 2;
  ${text.body1}
  color: ${colors.black};
  text-align: center;

  ${fresponsive(css`
    width: 440px;
  `)}
`

const Num = styled.span`
  ${text.n1}
  position: absolute;
  z-index: 1;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  color: ${colors.black};
  opacity: 0.2;
`

const Image = styled(GatsbyImage)`
  position: absolute !important;
`

const Image1 = styled(Image)`
  z-index: 1;

  ${fresponsive(css`
    width: 480px;
    height: 320px;
    top: 488px;
    left: 120px;
  `)}
`

const Image2 = styled(Image)`
  z-index: 3;

  ${fresponsive(css`
    width: 310px;
    height: 207px;
    top: 518px;
    right: 240px;
  `)}
`

const Image3 = styled(Image)`
  z-index: 2;

  ${fresponsive(css`
    width: 360px;
    height: 240px;
    top: 758px;
    left: 360px;
  `)}
`

const Image4 = styled(Image)`
  z-index: 2;

  ${fresponsive(css`
    width: 480px;
    height: 320px;
    top: 658px;
    right: 120px;
  `)}
`

const Image5 = styled(Image)`
  z-index: 1;

  ${fresponsive(css`
    width: 720px;
    height: 479px;
    top: 928px;
    right: 240px;
  `)}
`

const Image6 = styled(Image)`
  z-index: 2;

  ${fresponsive(css`
    width: 480px;
    height: 320px;
    top: 1367px;
    left: 240px;
  `)}
`