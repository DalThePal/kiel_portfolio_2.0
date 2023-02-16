import React from 'react'
import styled, { css } from 'styled-components'
import { fresponsive } from 'utils/fullyResponsive'

import colors from 'styles/colors'
import text from 'styles/text'

import Button from 'components/button'
import UniversalLink from 'components/link'

const DATA = [
  "Creative Direction",
  "Art Direction",
  "Web Design",
  "Product Design",
  "Photography",
  "3D Design"
]

const Services = () => {

  const items = DATA.map((item, index) => (
    <Item key={item}>
      <Num>0{index + 1}</Num>
      {item}
    </Item>
  ))

  return (
    <Wrapper>
      <FullService>Full Service</FullService>
      <Title>
        <Span>Services</Span>
        <Span2>offered-</Span2>
      </Title>
      <Content>
        <Text>
          I am an individual digital designer specializing in creating visually 
          appealing and user-friendly websites, mobile apps, and other interactive 
          digital products tailored to meet the specific needs and goals of my clients.
        </Text>
        <List>{items}</List>
        <Row>
          <StyledButton>Let's work together</StyledButton>
          <UniversalLink to="/">How We'll Work Together</UniversalLink>
        </Row>
      </Content>
    </Wrapper>
  )
}

export default Services

const Wrapper = styled.section`
  position: relative;
  background-color: ${colors.white};

  ${fresponsive(css`
    height: 943px;
  `)}
`

const Title = styled.h2`
  position: absolute;

  ${fresponsive(css`
    left: 120px;
    top: 250px;
    width: 670px;
    height: 290px;
  `)}
`

const Span = styled.span`
  ${text.h2}
  position: absolute;
  top: 0;
  left: 0;
  color: ${colors.black};
`

const Span2 = styled.span`
  ${text.d1}
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px ${colors.black};
  position: absolute;
  bottom: 0;
  right: 0;
`

const Content = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;

  ${fresponsive(css`
    width: 770px;
    left: 360px;
    gap: 50px;
  `)}
`

const Text = styled.p`
  ${text.h7}
  color: ${colors.black};
`

const List = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  ${fresponsive(css`
    gap: 0px 50px;
    height: 104px;
  `)}
`

const Item = styled.li`
  ${text.body1}
  border-top: 1px solid ${colors.black};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  ${fresponsive(css`
    height: 28px;
    width: 360px;
  `)}
`

const Num = styled.span`
  position: absolute;
  ${text.n4}
  color: ${colors.black};
  left: 0;
  top: 50%;
  transform: translateY(-50%);
`

const Row = styled.div`
  display: flex;
  align-items: center;
  
  ${fresponsive(css`
    gap: 50px;
  `)}
`

const StyledButton = styled(Button)`
  ${fresponsive(css`
    width: 360px;
  `)}
`

const FullService = styled.span`
  ${text.body1}
  position: absolute;
  color: ${colors.black};
  
  ${fresponsive(css`
    top: 233px;
    left: 240px;
  `)}
`
