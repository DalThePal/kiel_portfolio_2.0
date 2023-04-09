import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { fresponsive } from 'utils/fullyResponsive'
import colors from 'styles/colors'
import text from 'styles/text'
import gsap from 'gsap'
import { desktopDesignSize } from 'styles/media'
import { pxToVw, vwToPx, getMedia } from 'utils/functions'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

const Work = () => {

  const [wrapperEl, setWrapperEl] = useState(null)
  const [innerEl, setInnerEl] = useState(null)
  const [backgroundEl, setBackgroundEl] = useState(null)
  const [titleEl, setTitleEl] = useState(null)

  const Images = useStaticQuery(graphql`
    query {
      antiSocial: file(relativePath: {eq: "anti-social-case-study.jpg"}) {
        childImageSharp {
          gatsbyImageData
        }
      }
      dallenHoyal: file(relativePath: {eq: "dallen-hoyal-case-study.jpg"}) {
        childImageSharp {
          gatsbyImageData
        }
      }
      idk: file(relativePath: {eq: "idk-case-study.jpg"}) {
        childImageSharp {
          gatsbyImageData
        }
      }
      lemond: file(relativePath: {eq: "lemond-case-study.jpg"}) {
        childImageSharp {
          gatsbyImageData
        }
      }
      source7: file(relativePath: {eq: "source-7-case-study.jpg"}) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `)

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

      tl.to('.case-study-card', {
        y: vwToPx(pxToVw(-4300, desktopDesignSize))
      }, 0)

      return () => {
        tl.kill()
      }
    }
  }, [wrapperEl, innerEl])

  useEffect(() => {
    if (wrapperEl && backgroundEl && titleEl) {

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

      tl.set(titleEl, {
        color: colors.tan,
        mixBlendMode: 'unset'
      }, 1)

      return () => {
        tl.kill()
      }
    }
  }, [wrapperEl, backgroundEl, titleEl])

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
        <Title ref={ref => setTitleEl(ref)}>WORK</Title>
        <Image1 className="case-study-card" image={Images.antiSocial.childImageSharp.gatsbyImageData}/>
        <Image2 className="case-study-card" image={Images.idk.childImageSharp.gatsbyImageData}/>
        <Image3 className="case-study-card" image={Images.dallenHoyal.childImageSharp.gatsbyImageData}/>
        <Image4 className="case-study-card" image={Images.lemond.childImageSharp.gatsbyImageData}/>
        <Image5 className="case-study-card" image={Images.source7.childImageSharp.gatsbyImageData}/>
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
  z-index: 1;
  
  ${fresponsive(css`
    transform: translateY(300px);
  `)}
`

const Title = styled.h2`
  position: absolute;
  z-index: 2;
  ${text.h1}
  color: ${colors.tan};
  mix-blend-mode: difference;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -40%);
  
  ${fresponsive(css`
    font-size: 870px;
  `)}
`

const Image = styled(GatsbyImage)`
  position: absolute !important;
  
  ${fresponsive(css`
    width: 336.23px;
    height: 543.04px;
  `)}
`

const Image1 = styled(Image)`
  z-index: 3;

  ${fresponsive(css`
    top: 1500px;
    left: 260px;
  `)}
`

const Image2 = styled(Image)`
  z-index: 3;

  ${fresponsive(css`
    left: 1250px;
    top: 945px;
  `)}
`

const Image3 = styled(Image)`
  z-index: 1;

  ${fresponsive(css`
    left: 1200px;
    top: 2059px;
  `)}
`

const Image4 = styled(Image)`
  z-index: 3;

  ${fresponsive(css`
    top: 2700px;
    left: 200px;
  `)}
`

const Image5 = styled(Image)`
  z-index: 1;

  ${fresponsive(css`
    top: 3400px;
    left: 900px;
  `)}
`