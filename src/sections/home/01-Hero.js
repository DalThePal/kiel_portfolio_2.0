import React from 'react'
import styled, { css } from 'styled-components'
import { fresponsive } from 'utils/fullyResponsive'
import colors from 'styles/colors'
import text from 'styles/text'
import Graphic1Png from 'images/1993.png'
import Graphic2Png from 'images/flower.png'
import Graphic3Png from 'images/star.png'
import Graphic4Png from 'images/gifGod.png'

const Hero = () => {
  return (
    <Wrapper>
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
      <Graphic1 src={Graphic1Png} alt="1993"/>
      <Graphic2 src={Graphic2Png} alt="flower"/>
      <Graphic3 src={Graphic3Png} alt="star"/>
      <Graphic4 src={Graphic4Png} alt="gif god"/>
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
  align-items: center;

  ${fresponsive(css`
    height: 1080px;
    padding: 291px 319px 315px;
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

const Graphic = styled.img`
  position: absolute;
`

const Graphic1 = styled(Graphic)`
  transform: rotate(-17.65deg);

  ${fresponsive(css`
    width: 266px;
    height: 115px;
    left: 187px;
    top: 462px;
  `)}
`

const Graphic2 = styled(Graphic)`
  ${fresponsive(css`
    width: 134px;
    height: 132px;
    left: 844px;
    top: 411px;
  `)}
`

const Graphic3 = styled(Graphic)`
  transform: rotate(62.77deg);

  ${fresponsive(css`
    width: 95px;
    height: 140px;
    left: 1038px;
    top: 599px;
  `)}
`

const Graphic4 = styled(Graphic)`
  transform: rotate(15deg);

  ${fresponsive(css`
    width: 257px;
    height: 201px;
    left: 1493px;
    top: 475px;
  `)}
`