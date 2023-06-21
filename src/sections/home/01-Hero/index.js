import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { fresponsive, fmobile } from 'utils/fullyResponsive'
import colors from 'styles/colors'
import text from 'styles/text'
import Graphics from './Graphics'

const Hero = () => {

  const [wrapperEl, setWrapperEl] = useState(null)

  return (
    <Wrapper ref={ref => setWrapperEl(ref)}>
      <Inner>
        <SubTitle>Digital Storyteller. Creative Problem Solver. Experience Activist. Ui Composer. Trend Disrupter.</SubTitle>
        <Title><span>Kiel</span><span>Cummings</span></Title>
        <Row>
          <Text>
            <span>forging creative transformation through web &&nbsp;</span>
            <span>digital product design solutions.</span>
          </Text>
          <Text2>
            <span>SALT LAKE CITY&nbsp;</span>
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
  background-color: ${colors.tan};
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

  ${fmobile(css`
    width: 321px;
  `)}
`

const SubTitle = styled.span`
  ${text.h5}
  color: ${colors.black};
  text-transform: uppercase;
  order: 0;

  ${fresponsive(css`
    margin-bottom: 32px;
  `)}

  ${fmobile(css`
    order: 1;
    font-size: 28px;
    text-align: center;
    letter-spacing: 0.01em;
  `)}
`

const Title = styled.h1`
  display: flex;
  ${text.h1};
  color: ${colors.black};
  text-transform: uppercase;
  order: 1;

  ${fmobile(css`
    order: 0;
    align-items: center;
    flex-direction: column;

    span {
      line-height: 314px;
    }

    span:last-child {
      font-size: 126px;
      line-height: 100px;
    }
  `)}
`

const Row = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  order: 2;

  ${fmobile(css`
    flex-direction: column;
    align-items: center;
    gap: 24px;
  `)}
`

const Text = styled.p`
  ${text.s2}
  font-weight: 400;
  color: ${colors.black};
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${fmobile(css`
    font-size: 16px;
    display: block;
    text-align: center;

    span {
      display: inline;
    }
  `)}
`

const Text2 = styled(Text)`
  align-items: flex-end;

  ${fmobile(css`
    align-items: flex-start;
  `)}
`