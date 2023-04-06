import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { fresponsive } from 'utils/fullyResponsive'
import colors from 'styles/colors'
import text from 'styles/text'
import gsap from 'gsap'
import { desktopDesignSize } from 'styles/media'
import { pxToVw, vwToPx, getMedia } from 'utils/functions'

const Work = () => {

  const [wrapperEl, setWrapperEl] = useState(null)
  const [innerEl, setInnerEl] = useState(null)
  const [backgroundEl, setBackgroundEl] = useState(null)

  useEffect(() => {
    if (wrapperEl && innerEl) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperEl,
          start: () => {
            const offset = getMedia(
              vwToPx(pxToVw(300, desktopDesignSize)),
              vwToPx(pxToVw(300, desktopDesignSize)),
              vwToPx(pxToVw(300, desktopDesignSize)),
              vwToPx(pxToVw(300, desktopDesignSize)),
            )
            
            return `top top-=${offset}`
          },
          end: "bottom bottom",
          pin: innerEl,
          scrub: true
        }
      })

      return () => {
        tl.kill()
      }
    }
  }, [wrapperEl, innerEl])

  useEffect(() => {
    if (wrapperEl && backgroundEl) {

      const sections = backgroundEl.getElementsByClassName('bg-section')

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperEl,
          start: () => {
            const offset = getMedia(
              vwToPx(pxToVw(500, desktopDesignSize)),
              vwToPx(pxToVw(500, desktopDesignSize)),
              vwToPx(pxToVw(500, desktopDesignSize)),
              vwToPx(pxToVw(500, desktopDesignSize)),
            )

            return `top top+=${offset}`
          },
          end: () => {
            const offset = getMedia(
              vwToPx(pxToVw(500, desktopDesignSize)),
              vwToPx(pxToVw(500, desktopDesignSize)),
              vwToPx(pxToVw(500, desktopDesignSize)),
              vwToPx(pxToVw(500, desktopDesignSize)),
            )

            return `+=${offset}`
          },
          scrub: true,
        }
      })

      tl.to(backgroundEl, {
        y: () => getMedia(
          vwToPx(pxToVw(-400, desktopDesignSize)),
          vwToPx(pxToVw(-400, desktopDesignSize)),
          vwToPx(pxToVw(-400, desktopDesignSize)),
          vwToPx(pxToVw(-400, desktopDesignSize)),
        )
      }, 0)

      tl.to(sections, {
        height: (window.innerHeight * 1.6) / 8 + 5
      }, 0)

      return () => {
        tl.kill()
      }
    }
  }, [wrapperEl, backgroundEl])

  return (
    <Wrapper ref={ref => setWrapperEl(ref)}>
      <Inner ref={ref => setInnerEl(ref)}>
        <Background ref={ref => setBackgroundEl(ref)}>
          <BackgroundSection>
            <BlackBackground className="bg-section"/>
          </BackgroundSection>
          <BackgroundSection>
            <BlackBackground className="bg-section"/>
          </BackgroundSection>
          <BackgroundSection>
            <BlackBackground className="bg-section"/>
          </BackgroundSection>
          <BackgroundSection>
            <BlackBackground className="bg-section"/>
          </BackgroundSection>
          <BackgroundSection>
            <BlackBackground className="bg-section"/>
          </BackgroundSection>
          <BackgroundSection>
            <BlackBackground className="bg-section"/>
          </BackgroundSection>
          <BackgroundSection>
            <BlackBackground className="bg-section"/>
          </BackgroundSection>
          <BackgroundSection>
            <BlackBackground className="bg-section"/>
          </BackgroundSection>
        </Background>
        <Title>WORK</Title>
      </Inner>
    </Wrapper>
  )
}

export default Work

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  background-color: ${colors.black};
  
  ${fresponsive(css`
    height: 3000px;
  `)}
`

const Background = styled.div`
  background-color: ${colors.tan};
  width: 100%;
  height: 160vh;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  
  ${fresponsive(css`
    transform: translateY(-500px);
  `)}
`

const BackgroundSection = styled.div`
  position: relative;
  width: 100%;
  height: 20vh;
`

const BlackBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 0;
  background-color: ${colors.black};
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
  
  ${fresponsive(css`
    transform: translateY(300px);
  `)}
`

const Title = styled.h2`
  position: relative;
  z-index: 2;
  ${text.h1}
  color: ${colors.tan};
  mix-blend-mode: difference;

  ${fresponsive(css`
    font-size: 870px;
  `)}
`