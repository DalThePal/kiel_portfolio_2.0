import React from 'react'
import styled, { css } from 'styled-components'

import { fresponsive, ftablet, fmobile } from 'utils/fullyResponsive'

import text from 'styles/text'
import colors from 'styles/colors'

import Button from 'components/Button'

const Cta = () => {
  return (
    <Wrapper>
      <Content>
        <Kicker>Far From Ordinary</Kicker>
        <Title1>Never settle</Title1>
        <Title2>for boring.</Title2>
        <Text>Stand out from the crowd.</Text>
        <StyledButton>Let's Talk</StyledButton>
      </Content>
      <Ellipse/>
    </Wrapper>
  )
}

export default Cta

const Wrapper = styled.section`
  background-color: ${colors.white};
  position: relative;

  ${fresponsive(css`
    height: 1573px;
  `)}

  ${ftablet(css`
    height: 1298px;
  `)}

  ${fmobile(css`
    height: 923px;
  `)}
`

const Ellipse = styled.div`
  background-color: ${colors.black};
  transform: rotate(30deg) translate(-50%, 50%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform-origin: center;

  ${fresponsive(css`
    width: 1800px;
    height: 650px;
    border-radius: 1800px / 650px;
  `)}

  ${ftablet(css`
    width: 1350px;
    height: 488px;
    border-radius: 1350px / 488px;
  `)}

  ${fmobile(css`
    width: 1012px;
    height: 366px;
    border-radius: 1012px / 366px;
  `)}
`

const Content = styled.div`
  position: absolute;
  z-index: 2;

  ${fresponsive(css`
    width: 1400px;
    height: 447px;
    top: 750px;
  `)}

  ${ftablet(css`
    width: 1024px;
    top: 540px;
  `)}

  ${fmobile(css`
    height: 342px;
    width: 375px;
    top: 380px;
  `)}
`

const StyledButton = styled(Button)`
  position: absolute;
  bottom: 0;

  ${fresponsive(css`
    width: 360px;
    left: 480px;
  `)}

  ${ftablet(css`
    left: 411px;
  `)}

  ${fmobile(css`
    left: 47px;
    width: 281px;
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

  ${ftablet(css`
    left: 410px;
  `)}

  ${fmobile(css`
    ${text.h6}
    left: 47px;
    text-align: center;
    bottom: 104px;
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

  ${ftablet(css`
    left: 203px;
  `)}

  ${fmobile(css`
    ${text.h4}
    left: 33px;
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

    ${fmobile(css`
      font-size: 20px;
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

  ${ftablet(css`
    left: 239px;
  `)}

  ${fmobile(css`
    ${text.d3}
    left: 54px;
    top: 87px;
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

  ${ftablet(css`
    left: 411px;
  `)}

  ${fmobile(css`
    left: 130px;
  `)}
`
