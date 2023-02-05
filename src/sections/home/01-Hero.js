import React from 'react'
import styled, { css } from 'styled-components'
import text from 'styles/text'
import colors from 'styles/colors'
import { fresponsive } from 'utils/fullyResponsive'
import Button from 'components/button'
import TempBG from 'images/temp-hero-bg.jpg'

const Hero = () => {
  return (
    <Wrapper>
      <Title>
        <Span>Creative director</Span>
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
  background-image: url(${TempBG});
  background-size: 100% 100%;
  background-position: center;
  position: relative;
  width: 100%;
  
  ${fresponsive(css`
    height: 800px;
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
`

const Span = styled.span`
  ${text.h2}
  color: ${colors.white};
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
`

const Span2 = styled(Span)`
  ${text.d1}
  -webkit-text-fill-color: transparent;
  
  ${fresponsive(css`
  -webkit-text-stroke: 1px ${colors.white};
    top: 85px;
  `)}
`

const Span3 = styled(Span)`
  ${fresponsive(css`
    top: 192px;
  `)}
`

const PositionedButton = styled(Button)`
  position: absolute;

  ${fresponsive(css`
    bottom: 48px;
    right: 360px;
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
`

const NeverSettle = styled.span`
  ${text.d4}
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
