import React from 'react'
import styled, { css } from 'styled-components'
import { fresponsive } from 'utils/fullyResponsive'
import colors from 'styles/colors'
import text from 'styles/text'
import { GatsbyImage } from 'gatsby-plugin-image'

const Results = ({
  text1,
  italicText,
  text2,
  image1,
  image2,
  image3,
  image4,
  image5
}) => {
  return (
    <Wrapper>
      <Content>
        <Num>04</Num>
        <Line/>
        <Row>
          <Title>The Final<br/>Designs</Title>
          <Column>
            <Text>{text1}</Text>
            <ItalicText>{italicText}</ItalicText>
            <Text>{text2}</Text>
          </Column>
        </Row>
      </Content>
      <Images>
        <Image1 image={image1.gatsbyImageData} alt={image1.description}/>
        <Image2 image={image2.gatsbyImageData} alt={image2.description}/>
        <Image3 image={image3.gatsbyImageData} alt={image3.description}/>
        <Image4 image={image4.gatsbyImageData} alt={image4.description}/>
        <Image5 image={image5.gatsbyImageData} alt={image5.description}/>
      </Images>
    </Wrapper>
  )
}

export default Results

const Wrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: ${colors.white};

  ${fresponsive(css`
    gap: 75px;
    height: 2819px;
    padding: 150px 240px 0px;
  `)}
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
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

const Images = styled.div`
  width: 100%;
  position: relative;

  ${fresponsive(css`
    height: 2059px;
  `)}
`

const Image = styled(GatsbyImage)`
  position: absolute !important;
`

const Image1 = styled(Image)`
  width: 100%;

  ${fresponsive(css`
    top: 0px;
    left: 0px;
    height: 639px;
  `)}
`

const Image2 = styled(Image)`
  ${fresponsive(css`
    top: 689px;
    left: 0px;
    width: 600px;
    height: 640px;
  `)}
`

const Image3 = styled(Image)`
  ${fresponsive(css`
    top: 689px;
    right: 0px;
    width: 310px;
    height: 295px;
  `)}
`

const Image4 = styled(Image)`
  ${fresponsive(css`
    top: 1034px;
    right: 0px;
    width: 310px;
    height: 295px;
  `)}
`

const Image5 = styled(Image)`
  width: 100%;

  ${fresponsive(css`
    left: 0px;
    bottom: 0px;
    height: 680px;
  `)}
`