import React from 'react'
import styled, {css, keyframes} from 'styled-components'
import colors from 'styles/colors'
import text from 'styles/text'
import { fresponsive } from 'utils/fullyResponsive'
import { ReactComponent as ArrowSVG } from 'images/arrow-large.svg'

const Marquee = () => {
  return (
    <Wrapper>
      <Inner>
        <Text>selected works</Text>
        <Arrow/>
        <Text>selected works</Text>
        <Arrow/>
        <Text>selected works</Text>
        <Arrow/>
        <Text>selected works</Text>
        <Arrow/>
        <Text>selected works</Text>
        <Arrow/>
        <Text>selected works</Text>
        <Arrow/>
      </Inner>
    </Wrapper>
  )
}

export default Marquee

const marqueeEffect = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
`

const Wrapper = styled.section`
  position: relative;
  overflow: hidden;
  width: 100%;
  background-color: ${colors.white};

  ${fresponsive(css`
    height: 287px;
  `)}
`

const Inner = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  height: 100%;
  top: 0;
  left: 0;
  animation: ${marqueeEffect} 10s linear infinite;

  ${fresponsive(css`
    gap: 25px;
    padding-right: 25px;
  `)}
`

const Text = styled.span`
  ${text.n1}
  line-height: 100%;
  color: ${colors.black};
  position: relative;
  white-space: nowrap;

  ${fresponsive(css`
    top: -10px;
  `)}
`

const Arrow = styled(ArrowSVG)`
  height: auto;

  ${fresponsive(css`
    width: 45px;
  `)}
`
