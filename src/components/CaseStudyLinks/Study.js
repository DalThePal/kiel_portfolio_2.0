import React, { useRef } from 'react'
import styled, { css } from 'styled-components'
import { fresponsive } from 'utils/fullyResponsive'
import { navigate } from 'gatsby'
import RotatingTitle from './RotatingTitle'
import text from 'styles/text'
import colors from 'styles/colors'
import { GatsbyImage } from 'gatsby-plugin-image'
import gsap from 'gsap'

export default function Study({ data, className }) {
  const imageClassName = `${data.title.split(" ").join('-')}-image`
  const wrapperRef = useRef()

  const mouseMove = (e) => {
    const rect = wrapperRef.current.getBoundingClientRect() 

    gsap.set(`.${imageClassName}`, {
      x: e.x,
      y: e.y - rect.top,
      xPercent: -50
    })
  }

  const mouseEnter = () => {
    gsap.set(`.${imageClassName}`, {
      rotate: Math.random() * (-20 - 20) + 20
    })
    gsap.to(`.${imageClassName}`, {
      opacity: 1,
      duration: 0.5,
    })

    wrapperRef.current.addEventListener('mousemove', mouseMove)
  }

  const mouseLeave = () => {
    gsap.to(`.${imageClassName}`, {
      opacity: 0,
      duration: 0.5
    })

    wrapperRef.current.removeEventListener('mousemove', mouseMove)
  }

  return (
    <Wrapper ref={wrapperRef} className={className} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
      <Image className={imageClassName} image={data.image.childImageSharp.gatsbyImageData}/>
      <Inner onClick={() => navigate(data.route)}>
        <Title>
          <RotatingTitle text={data.title}/>
        </Title>
        <Content>
          <Label><span>Year: </span><span>{data.year}</span></Label>
          <Label><span>My&nbsp;Role: </span><span>{data.role}</span></Label>
        </Content>
      </Inner>
    </Wrapper>
  )
}


const Wrapper = styled.div`
  position: relative;
  width: 100%;

  ${fresponsive(css`
    gap: 22px;
    height: 193px;
  `)}
`

export const Inner = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  z-index: 2;

  ${fresponsive(css`
    gap: 22px;
  `)}
`

const Title = styled.div`
  ${text.h3}
  color: ${colors.tan};
  text-transform: uppercase;
  cursor: pointer;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${fresponsive(css`
    gap: 6px;
    width: 256px;
  `)}
`

const Label = styled.span`
  ${text.s2}
  color: ${colors.tan};
  font-weight: 400;
  text-transform: uppercase;
  display: flex;
  flex-wrap: wrap;

  span:last-of-type {
    font-weight: 700;
  }

  ${fresponsive(css`
    gap: 6px;
  `)}
`

const Image = styled(GatsbyImage)`
  pointer-events: none;
  position: absolute !important;
  z-index: 1;
  top: 0;
  left: 0;
  opacity: 0;
  transform: translateY(-50%);

  ${fresponsive(css`
    width: 336px;
    height: 543px;
  `)}
`