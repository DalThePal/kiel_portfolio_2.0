import React from 'react'
import styled, { css } from 'styled-components'
import colors from 'styles/colors'
import text from 'styles/text'
import { fresponsive } from 'utils/fullyResponsive'
import Runway from 'images/runway.jpg'
import { GatsbyImage } from 'gatsby-plugin-image'

const WorkCard = ({ number, tags, title, image}) => {

  const tagEls = tags.map(item => <span key={item}>{item}</span>)
  const titles = title.split(' ')

  return (
    <Wrapper>
      <Top>
        <Num>{String(number).padStart(2, '0')}</Num>
        <Tags>{tagEls}</Tags>
      </Top>
      <Bottom>
        <Title>
          <span>{titles[0]}</span>
          <span>{titles[1]}</span>
        </Title>
        {image && <Image image={image.gatsbyImageData} alt="runway"/>}
      </Bottom>
    </Wrapper>
  )
}

export default WorkCard

const Wrapper = styled.div`
  background-color: ${colors.white};
  width: 50%;
  border-width: 0px;
  border-top-width: 1px;
  border-style: solid;
  border-color: ${colors.black};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:nth-of-type(even) {
    border-left-width: 0.5px;
  }

  &:nth-of-type(odd) {
    border-right-width: 0.5px;
  }

  ${fresponsive(css`
    height: 800px;
    padding: 100px 120px;
  `)}
`

const Top = styled.div`
  display: flex;
  align-items: flex-start;

  ${fresponsive(css`
    gap: 103px;
  `)}
`

const Num = styled.span`
  ${text.n3}
  color: ${colors.black};
`

const Tags = styled.div`
  ${text.body1}
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${fresponsive(css`
    gap: 20px;
  `)}
`

const Title = styled.h4`
  color: ${colors.black};
  display: flex;
  align-items: center;

  ${fresponsive(css`
    gap: 10px;
  `)}

  span {
    &:nth-child(1) {
      ${text.h4}
    }
  
    &:nth-child(2) {
      ${text.d3}
    }
  }

`

const Image = styled(GatsbyImage)`
  width: 100%;

  ${fresponsive(css`
    height: 358px;
  `)}
`
