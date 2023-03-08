import React from 'react'
import styled, { css } from 'styled-components'
import { fresponsive } from 'utils/fullyResponsive'
import { GatsbyImage } from 'gatsby-plugin-image'
import colors from 'styles/colors'
import text from 'styles/text'

const Hero = ({
  title,
  tags,
  image,
  text,
  indentedText,
  color
}) => {

  const roles = tags.map((item, index) => {
    return <Role key={index}>{item}</Role>
  })

  return (
    <Wrapper backgroundColor={color}>
      <Background image={image.gatsbyImageData} alt={image.description}/>
      <Overlay/>
      <Title>{title}</Title>
      <Text>{text}</Text>
      <IndentedText>{indentedText}</IndentedText>
      <RolesWrapper>
        <Label>Roles</Label>
        <Roles>{roles}</Roles>
      </RolesWrapper>
    </Wrapper>
  )
}

export default Hero

const Wrapper = styled.section`
  position: relative;
  background-color: ${props => props.backgroundColor}; // TODO: change to contentful color

  ${fresponsive(css`
    height: 1600px;
  `)}
`

const Background = styled(GatsbyImage)`
  position: absolute !important;
  z-index: 1;
  width: 100%;
  top: 0;
  left: 0;

  ${fresponsive(css`
    height: 800px;
  `)}
`

const Overlay = styled.div`
  position: absolute;
  background: rgba(26, 26, 26, 0.8);
  z-index: 2;
  width: 100%;
  top: 0;
  left: 0;

  ${fresponsive(css`
    height: 800px;
  `)}
`

const Title = styled.span`
  ${text.h6}
  color: ${colors.white};
  position: absolute;
  z-index: 3;

  ${fresponsive(css`
    top: 526px;
    left: 360px;
  `)}
`

const Text = styled.p`
  position: absolute;
  z-index: 3;
  color: ${colors.white};
  ${text.h3};

  ${fresponsive(css`
    top: 584px;
    left: 120px;
    width: 1080px;
  `)}
`

const IndentedText = styled(Text)`
  ${fresponsive(css`
    top: 848px;
    left: 361px;
    width: 959px;
  `)}
`

const RolesWrapper = styled.div`
  position: absolute;
  border-top: 1px solid ${colors.white};
  display: flex;
  align-items: flex-start;

  ${fresponsive(css`
    top: 1319px;
    left: 360px;
    width: 960px;
    padding-top: 25px;
    gap: 164px;
  `)}
`

const Label = styled.span`
  ${text.d5}
  color: ${colors.white};
`

const Roles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const Role = styled.span`
  ${text.h6}
  color: ${colors.white};
`