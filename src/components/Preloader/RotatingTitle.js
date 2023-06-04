import React from 'react'
import styled, { css } from 'styled-components'
import { fresponsive } from 'utils/fullyResponsive'
import text from 'styles/text'
import colors from 'styles/colors'
import gsap from 'gsap'

export const rotate = (text, noSet) => {
  const tl = gsap.timeline({
    duration: 2,
    onComplete: () => {
      if (!noSet) {
        gsap.set(`.${text.split(' ').join('-')}`, {
          rotateX: 0
        })
      }
    }
  })

  tl.to(`.${text.split(' ').join('-')}`, {
    stagger: 0.1,
    rotateX: 90,
    duration: 0.4
  })

  return tl
}

export const hideBottom = (text) => {
  const tween = gsap.set(`.${text.split(' ').join('-')} > .bottom`, {
    display: 'none'
  })

  return tween
} 

const RotatingTitle = ({text, className}) => {

  const boxes = text.split('').map((letter, index) => {
    return (
      <Box className={text.split(' ').join('-')}>
        <Face className='front'>{letter}</Face>
        <Face className='bottom'>{letter}</Face>
      </Box>
    )
  })

  return (
    <Wrapper className={className}>
      {boxes}
    </Wrapper>
  )
}

export default RotatingTitle

const Wrapper = styled.div`
  display: flex;
  perspective: 5000px;
`

const Box = styled.div`
  position: relative;
  transform-style: preserve-3d;
  
  ${fresponsive(css`
    transform-origin: center center;
    height: 352px;
    /* width: 58px; */
    min-width: 20px;
  `)}
`

const Face = styled.span`
  ${text.h1}
  color: ${colors.black};
  background-color: ${colors.red};
  text-transform: uppercase;
  height: 100%;
  width: 100%;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  transform-origin: center center;
  backface-visibility: hidden;

  &.front {
    transform: translate(-50%, -50%) translateZ(176px);
  }

  &.bottom {
    transform: rotateX(-90deg) translate(-50%, 0%) translateZ(-130px);
  }
`