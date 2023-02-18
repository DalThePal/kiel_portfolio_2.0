import React, { useRef } from 'react'
import gsap from 'gsap'
import styled, { css } from 'styled-components'
import colors from 'styles/colors'
import text from 'styles/text'
import { fresponsive } from 'utils/fullyResponsive'
import { GatsbyImage } from 'gatsby-plugin-image'

const Project = ({ number, tags, title, image}) => {

  const blackRef = useRef()
  const whiteRef = useRef()

  const tagEls = tags.map(item => <span key={item}>{item}</span>)
  const titles = title.split(' ')

  const mouseEnter = () => {
    gsap.to(blackRef.current, {
      width: '100%'
    })

    gsap.to(whiteRef.current, {
      width: '0%'
    })
  }

  const mouseLeave = () => {
    gsap.to(blackRef.current, {
      width: '0%'
    })

    gsap.to(whiteRef.current, {
      width: '100%'
    })
  }

  return (
    <Wrapper onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
      <Black ref={blackRef}>
        <Content>
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
        </Content>
      </Black>
      <White ref={whiteRef}>
        <Content>
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
        </Content>
      </White>
    </Wrapper>
  )
}

export default Project

const Wrapper = styled.div`
  position: relative;
  background-color: ${colors.white};
  border-width: 0px;
  border-top-width: 1px;
  border-style: solid;
  border-color: ${colors.black};
  box-sizing: border-box;
  overflow: hidden;

  &:nth-of-type(even) {
    border-left-width: 0.5px;
  }

  &:nth-of-type(odd) {
    border-right-width: 0.5px;
  }

  ${fresponsive(css`
    height: 800px;
    width: 720px;
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

const Content = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  box-sizing: border-box;

  ${fresponsive(css`
    padding: 100px 120px;
    width: 720px;
  `)}
`

const Black = styled.div`
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 0%;
  background: ${colors.black};

  ${Title}, ${Tags}, ${Num} {
    color: ${colors.white};
  }
`

const White = styled(Black)`
  background-color: ${colors.white};
  left: unset;
  right: 0;
  width: 100%;

  ${Title}, ${Tags}, ${Num} {
    color: ${colors.black};
  }

  ${Content} {
    left: unset;
    right: 0;
  }
`

const Top = styled.div`
  display: flex;
  align-items: flex-start;

  ${fresponsive(css`
    gap: 103px;
  `)}
`

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${fresponsive(css`
    gap: 20px;
  `)}
`

const Image = styled(GatsbyImage)`
  width: 100%;

  ${fresponsive(css`
    height: 358px;
  `)}
`
