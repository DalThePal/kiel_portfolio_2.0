import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { fresponsive } from 'utils/fullyResponsive'
import colors from 'styles/colors'
import text from 'styles/text'
import gsap from 'gsap'

const Work = () => {

  const [wrapperEl, setWrapperEl] = useState(null)
  const [innerEl, setInnerEl] = useState(null)

  useEffect(() => {
    if (wrapperEl && innerEl) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperEl,
          start: 'top top',
          end: "bottom bottom",
          pin: innerEl,
          scrub: true
        }
      })
    }
  }, [wrapperEl, innerEl])

  return (
    <Wrapper ref={ref => setWrapperEl(ref)}>
      <Inner ref={ref => setInnerEl(ref)}>
        <Title>WORK</Title>
      </Inner>
    </Wrapper>
  )
}

export default Work

const Wrapper = styled.section`
  position: relative;
  background-color: ${colors.black};
  height: 2000px;
  width: 100%;
`

const Inner = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Title = styled.h2`
  ${text.h1}
  color: ${colors.tan};

  ${fresponsive(css`
    font-size: 870px;
  `)}
`