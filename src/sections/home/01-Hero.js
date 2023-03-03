import React from 'react'
import styled, { css } from 'styled-components'
import text from 'styles/text'
import colors from 'styles/colors'
import { fresponsive, ftablet, fmobile } from 'utils/fullyResponsive'
import Button from 'components/Button'
import TempBg from 'images/temp-hero-bg.jpg'
import TempBgTablet from 'images/tempBg-tablet.jpg'
import TempBgMobile from 'images/tempBg-mobile.jpg'

const Hero = () => {
  return (
    <Wrapper>
      <Title>
        <Span>Visual Designer</Span>
        <Span2>specializing in</Span2>
        <Span3>digital design</Span3>
      </Title>
      <PositionedButton>View My Work</PositionedButton>
      <Motto>
        <NeverSettle>Never settle</NeverSettle>
        <Boring>for boring design.</Boring>
      </Motto>
    </Wrapper>
  )
}

export default Hero

const Wrapper = styled.section`
  background-color: ${colors.black};
  background-image: url(${TempBg});
  background-size: 100% 100%;
  background-position: center;
  position: relative;
  width: 100%;
  
  ${fresponsive(css`
    height: 800px;
  `)}

  ${ftablet(css`
    background-image: url(${TempBgTablet});
    height: 1080px;
  `)}

  ${fmobile(css`
    background-image: url(${TempBgMobile});
    height: 950px;
  `)}
`

const Title = styled.h1`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;

  ${fresponsive(css`
    top: 180px;
  `)}

  ${ftablet(css`
    top: 350px;
  `)}

  ${fmobile(css`
    top: 227px;
  `)}
`

const Span = styled.span`
  ${text.h2}
  color: ${colors.white};
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;

  ${ftablet(css`
    ${text.h3}
  `)}

  ${fmobile(css`
    ${text.h4}
  `)}
`

const Span2 = styled(Span)`
  ${text.d1}
  -webkit-text-fill-color: transparent;
  
  ${fresponsive(css`
  -webkit-text-stroke: 1px ${colors.white};
    top: 125px;
  `)}

  ${ftablet(css`
    ${text.d2}
    top: 97px;
  `)}

  ${fmobile(css`
    ${text.d3}
    top: 50px;
  `)}
`

const Span3 = styled(Span)`
  ${fresponsive(css`
    top: 192px;
  `)}

  ${ftablet(css`
    top: 194px;
  `)}

  ${fmobile(css`
    top: 100px;
  `)}
`

const PositionedButton = styled(Button)`
  position: absolute;

  ${fresponsive(css`
    bottom: 48px;
    right: 360px;
  `)}

  ${ftablet(css`
    bottom: 104px;
    right: 102px;
  `)}

  ${fmobile(css`
    bottom: 309px;
    left: 50%;
    transform: translateX(-50%);
    width: 281px;
  `)}
`

const Motto = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${fresponsive(css`
    bottom: 44px;
    left: 360px;
  `)}

  ${ftablet(css`
    bottom: 100px;
    left: 102px;
  `)}

  ${fmobile(css`
    bottom: 89px;
    left: 47px;
  `)}
`

const NeverSettle = styled.span`
  ${text.d5}
  color: ${colors.white};
  position: relative;

  ${fresponsive(css`
    padding-right: 20px;
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
      font-size: 12px;
    `)}
  }
`

const Boring = styled.span`
  ${text.h6}
  color: ${colors.white};
`
