import React from 'react'
import styled, { css } from 'styled-components'
import { fresponsive } from 'utils/fullyResponsive'
import colors from 'styles/colors'

const Hero = () => {
  return (
    <Wrapper>
      <Title>
        <TitleSpan1>Creative Director</TitleSpan1>
        <TitleSpan2>Kiel Cummings</TitleSpan2>
      </Title>
    </Wrapper>
  )
}

export default Hero

const Wrapper = styled.section`
  position: relative;
  background-color: ${colors.tan};
  width: 100%;
  display: flex;
  flex-direction: column;

  ${fresponsive(css`
    height: 1261px;
    padding: 272px 317px 288px;
  `)}
`

const Title = styled.h1`
  display: flex;
  flex-direction: column;
`

const TitleSpan = styled.span`
  font-family: 'Humane';
  font-style: normal;
  font-weight: 700;
  line-height: 80%;
  text-transform: uppercase;
  color: ${colors.black};
`

const TitleSpan1 = styled(TitleSpan)`
  ${fresponsive(css`
    font-size: 378px;
  `)}
`

const TitleSpan2 = styled(TitleSpan)`
  ${fresponsive(css`
    font-size: 440px;
  `)}
`