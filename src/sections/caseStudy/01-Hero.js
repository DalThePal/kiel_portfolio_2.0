import React from 'react'
import styled, { css } from 'styled-components'
import { fresponsive } from 'utils/fullyResponsive'
import colors from 'styles/colors'
import text from 'styles/text'
import { GatsbyImage } from 'gatsby-plugin-image'

const Hero = ({ image, title, project, role }) => {
  return (
    <Wrapper>
      {image.gatsbyImageData && <Background image={image.gatsbyImageData}/>}
      <Gradient/>
      <Content>
        <Title>{title}</Title>
        <Bottom>
          <Group>
            <Label>Project:</Label>
            <Text>{project}</Text>
          </Group>
          <Group>
            <Label>My Role:</Label>
            <Text2>{role}</Text2>
          </Group>
        </Bottom>
      </Content>
    </Wrapper>
  )
}

export default Hero

const Wrapper = styled.section`
  position: relative;
  width: 100%;

  ${fresponsive(css`
    height: 983px;
  `)}
`

const Background = styled(GatsbyImage)`
  position: absolute !important;
  z-index: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const Gradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, #000000 20.8%, rgba(0, 0, 0, 0) 56.54%, rgba(0, 0, 0, 0.8) 86.88%);
`

const Content = styled.div`
  position: absolute;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  left: 50%;
  transform: translateX(-50%);

  ${fresponsive(css`
    top: 450px;
    gap: 26px;
  `)}
`

const Title = styled.h1`
  ${text.h2}
  color: ${colors.tan};
  text-transform: uppercase;
  white-space: nowrap;
`

const Bottom = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  ${fresponsive(css`
    width: 1297px;
  `)}
`

const Group = styled.div`
  display: flex;
  align-items: flex-start;

  ${fresponsive(css`
    gap: 20px;
  `)}
`

const Label = styled.span`
  ${text.s2}
  color: ${colors.tan};

  ${fresponsive(css`
    width: 197px;
  `)}
`

const Text = styled.p`
  ${text.bodyL}
  color: ${colors.tan};

  ${fresponsive(css`
    width: 435px;
  `)}
`

const Text2 = styled(Text)`
  ${fresponsive(css`
    width: 208px;
  `)}
`