import React from 'react'
import styled, { css } from 'styled-components'

import { fresponsive } from 'utils/fullyResponsive'

import text from 'styles/text'
import colors from 'styles/colors'

import Button from 'components/Button'

const CTA = () => {
  return (
    <Wrapper>
      <Ellipse>
        <Content>
          <Kicker>Far From Ordinary</Kicker>
          <Title1>Never settle</Title1>
          <Title2>for boring.</Title2>
          <Text>Stand out from the crowd.</Text>
          <StyledButton>Let's work together</StyledButton>
        </Content>
      </Ellipse>
    </Wrapper>
  )
}

export default CTA

const Wrapper = styled.section`
  background-color: ${colors.white};
  position: relative;

  ${fresponsive(css`
    height: 1573px;
  `)}
`

const Ellipse = styled.div`
  background-color: ${colors.black};
  transform: rotate(30deg) translate(-50%, 50%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: center;

  ${fresponsive(css`
    width: 1800px;
    height: 650px;
    border-radius: 1800px / 650px;
  `)}
`

const Content = styled.div`
  position: relative;
  transform: rotate(-30deg);

  ${fresponsive(css`
    width: 1400px;
    height: 447px;
  `)}
`

const StyledButton = styled(Button)`
  position: absolute;
  bottom: 0;

  ${fresponsive(css`
    width: 360px;
    left: 480px;
  `)}
`

const Text = styled.span`
  ${text.h5}
  color: ${colors.white};
  position: absolute;

  ${fresponsive(css`
    width: 300px;
    left: 478px;
    bottom: 94px;
  `)}
`

const Title1 = styled.h3`
  ${text.h3}
  position: absolute;
  color: ${colors.white};

  ${fresponsive(css`
    top: 17px;
    left: 411px;
    padding-right: 50px;
  `)}

  &::after {
    font-family: 'Neue Montreal';
    font-style: normal;
    font-weight: 400;
    line-height: 110%;
    letter-spacing: -0.02em;
    text-decoration: none;
    position: absolute;
    content: 'TM';
    top: 0;
    right: 0;

    ${fresponsive(css`
      font-size: 40px;
    `)}
  }
`

const Title2 = styled.h3`
  ${text.d2}
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px ${colors.white};
  position: absolute;

  ${fresponsive(css`
    top: 121px;
    left: 447px;
  `)}
`

const Kicker = styled.span`
  ${text.body1}
  color: ${colors.white};
  position: absolute;
  top: 0;

  ${fresponsive(css`
    left: 481px;
  `)}
`
