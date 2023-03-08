import React from 'react'
import styled, { css } from 'styled-components'
import { fresponsive } from 'utils/fullyResponsive'
import { GatsbyImage } from 'gatsby-plugin-image'

import Button from 'components/Button'

import text from 'styles/text'
import colors from 'styles/colors'

const Challenge = ({
  image,
  url,
  text,
  italicText
}) => {

  const handleButtonClick = (href) => {
    window.open(href, "blank")
  }

  return (
    <Wrapper>
      <Content>
        <Num>01</Num>
        <Line/>
        <Row>
          <Title>The<br/>Challenge</Title>
          <Column>
            <ItalicText>{italicText}</ItalicText>
            <Text>{text}</Text>
            <StyledButton onClick={() => handleButtonClick(url)}>View the site</StyledButton>
          </Column>
        </Row>
      </Content>
      <Image image={image.gatsbyImageData}/>
    </Wrapper>
  )
}

export default Challenge

const Wrapper = styled.section`
  background-color: ${colors.black};
  display: flex;
  flex-direction: column;

  ${fresponsive(css`
    padding: 150px 240px 0px;
    gap: 75px;
  `)}
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`

const Image = styled(GatsbyImage)`
  width: 100%;

  ${fresponsive(css`
    height: 799px;
  `)}
`

const Num = styled.span`
  ${text.n3}
  color: ${colors.white};
`

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${colors.white};

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
  color: ${colors.white};

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

const StyledButton = styled(Button)`
  ${fresponsive(css`
    width: 360px;
  `)}
`

const ItalicText = styled.p`
  ${text.d5}
  color: ${colors.white};

  ${fresponsive(css`
    width: 480px;
  `)}
`

const Text = styled.p`
  ${text.body1}
  color: ${colors.white};

  ${fresponsive(css`
    width: 480px;
  `)}
`