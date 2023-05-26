import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { fresponsive } from 'utils/fullyResponsive'
import text from 'styles/text'
import colors from 'styles/colors'
import gsap from 'gsap'

const RotatingTitle = ({text}) => {

  const [timeline, setTimeline] = useState(null)

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: {
        paused: true,
        ease: 'none'
      }
    })

    tl.to(`.${text.split(' ').join('-')}`, {
      stagger: 0.2,
      rotateX: -90
    })

    setTimeline(tl)

    return () => {
      tl.kill()
    }
  }, [text, setTimeline])

  const mouseEnter = () => {
    if (timeline) {
      timeline.play()
    }
  }

  const mouseLeave = () => {
    if (timeline) {
      timeline.reverse()
    }
  }

  const boxes = text.split('').map((letter, index) => {
    return (
      <Box className={text.split(' ').join('-')}>
        <Face className='front'>{letter}</Face>
        <Face className='bottom'>{letter}</Face>
      </Box>
    )
  })

  return (
    <Wrapper onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
      {boxes}
    </Wrapper>
  )
}

export default RotatingTitle

const Wrapper = styled.div`
  display: flex;
  perspective: 1000px;
`

const Box = styled.div`
  position: relative;
  transform-style: preserve-3d;
  transform-origin: center center center;

  ${fresponsive(css`
    height: 193px;
    width: 58px;
  `)}
`

const Face = styled.span`
  ${text.h3}
  color: ${colors.tan};
  text-transform: uppercase;
  height: 100%;
  width: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  transform-origin: center center center;

  &.front {
    transform: translate(-50%, -50%) translateZ(20px);
  }

  &.bottom {
    transform: rotateX(-90deg) translate(-50%, -50%) translateZ(20px);
  }
`