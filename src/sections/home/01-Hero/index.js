import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { fresponsive } from 'utils/fullyResponsive'
import colors from 'styles/colors'
import text from 'styles/text'
import Graphics from './Graphics'

const Hero = () => {

  const [wrapperEl, setWrapperEl] = useState(null)

  return (
    <Wrapper ref={ref => setWrapperEl(ref)}>\
      <Inner>
        <SubTitle>Digital Storyteller. Creative Problem Solver. Experience Activist. Ui Composer. Trend Disrupter.</SubTitle>
        <Title>Kiel Cummings</Title>
        <Row>
          <Text>
            <span>forging creative transformation through web &</span>
            <span>digital product design solutions.</span>
          </Text>
          <Text2>
            <span>SALT LAKE CITY</span>
            <span>UTAH</span>
          </Text2>
        </Row>
      </Inner>
      <Graphics
        wrapper={wrapperEl}
      />
    </Wrapper>
  )
}

export default Hero

const Wrapper = styled.section`
  position: relative;
  z-index: 3;
  width: 100%;
  height: 100vh;
`

const Inner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  ${fresponsive(css`
    width: 1281px;
    height: 474px;
  `)}
`

const SubTitle = styled.span`
  ${text.h5}
  color: ${colors.black};
  text-transform: uppercase;

  ${fresponsive(css`
    margin-bottom: 32px;
  `)}
`

const Title = styled.h1`
  display: flex;
  flex-direction: column;
  ${text.h1};
  color: ${colors.black};
  text-transform: uppercase;
`

const Row = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
`

const Text = styled.p`
  ${text.s2}
  font-weight: 400;
  color: ${colors.black};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const Text2 = styled(Text)`
  align-items: flex-end;
`