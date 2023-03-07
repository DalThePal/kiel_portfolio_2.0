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
  position: relative;
  background-color: ${colors.black};

  ${fresponsive(css`
    height: 1537px;
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

const Image = styled(GatsbyImage)`
  position: absolute !important;

  ${fresponsive(css`
    width: 1200px;
    height: 799px;
    left: 120px;
    bottom: 150px;
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