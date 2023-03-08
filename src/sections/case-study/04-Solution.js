import React from 'react'
import styled, { css } from 'styled-components'
import { fresponsive } from 'utils/fullyResponsive'
import colors from 'styles/colors'
import text from 'styles/text'
import { GatsbyImage } from 'gatsby-plugin-image'

const Solution = ({
  text1,
  italicText,
  text2,
  image1,
  image2,
  image3
}) => {
  return (
    <Wrapper>
      <Content>
        <Num>03</Num>
        <Line/>
        <Row>
          <Title>Finding a<br/>Solution</Title>
          <Column>
            <Text>{text1}</Text>
            <ItalicText>{italicText}</ItalicText>
            <Text>{text2}</Text>
          </Column>
        </Row>
      </Content>
      <Image1 image={image1.gatsbyImageData} alt={image1.description}/>
      <Image2 image={image2.gatsbyImageData} alt={image2.description}/>
      <Image3 image={image3.gatsbyImageData} alt={image3.description}/>
    </Wrapper>
  )
}

export default Solution

const Wrapper = styled.section`
  position: relative;
  background-color: ${colors.white};

  ${fresponsive(css`
    height: 1310px;
  `)}
`

const Content = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${fresponsive(css`
    width: 1200px;
    padding: 0px 120px;
    left: 120px;
    top: 150px;
  `)}
`

const Num = styled.span`
  ${text.n3}
  color: ${colors.black};
`

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${colors.black};

  ${fresponsive(css`
    margin: 25px 0px;
  `)}
`

const Row = styled.div`
  display: flex;
  align-items: flex-start;

  ${fresponsive(css`
    gap: 120px;
  `)}
`

const Title = styled.h4`
  ${text.h4}
  color: ${colors.black};

  ${fresponsive(css`
    width: 360px;
  `)}
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${fresponsive(css`
    gap: 25px;
  `)}
`

const ItalicText = styled.p`
  ${text.d5}
  color: ${colors.black};

  ${fresponsive(css`
    width: 480px;
  `)}
`

const Text = styled.p`
  ${text.body1}
  color: ${colors.black};

  ${fresponsive(css`
    width: 480px;
  `)}
`

const Image = styled(GatsbyImage)`
  position: absolute !important;
`

const Image1 = styled(Image)`
  bottom: 0;

  ${fresponsive(css`
    width: 455px;
    height: 700px;
    left: 240px;
  `)}
`

const Image2 = styled(Image)`
  ${fresponsive(css`
    width: 455px;
    height: 325px;
    right: 240px;
    bottom: 375px;
  `)}
`

const Image3 = styled(Image)`
  ${fresponsive(css`
    width: 455px;
    height: 325px;
    right: 240px;
    bottom: 0px;
  `)}
`