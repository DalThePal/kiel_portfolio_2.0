import React, { useState, useEffect, useRef, useContext } from 'react'
import styled, { css } from 'styled-components'
import { fresponsive, fmobile } from 'utils/fullyResponsive'
import colors from 'styles/colors'
import text from 'styles/text'
import gsap from 'gsap'
import { desktopDesignSize } from 'styles/media'
import { pxToVw, vwToPx } from 'utils/functions'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import Background, { changeColor } from 'components/Background'
import { LogoContext } from 'components/Providers'

const Work = () => {
  const setLogoColor = useContext(LogoContext).setColor
  const [wrapperEl, setWrapperEl] = useState(null)
  const [innerEl, setInnerEl] = useState(null)
  const titleRef = useRef()

  const images = useStaticQuery(graphql`
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
          start: "top top",
          end: "bottom bottom",
          pin: innerEl,
          scrub: true, 
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
    if (wrapperEl) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperEl,
          start: "top 50%",
          end: `top top`,
          scrub: true, 
          onLeave: () => {
            setLogoColor(colors.tan)
          },
          onEnterBack: () => {
            setLogoColor(colors.black)
          }
        }
      })

      tl.add(changeColor('work-background', colors.tan, colors.black), 0)

      tl.fromTo(titleRef.current, {
        mixBlendMode: 'difference'
      }, {
        mixBlendMode: 'unset',
        duration: 0
      })

      return () => {
        tl.kill()
      }
    }
  }, [wrapperEl, setLogoColor])

  return (
    <Wrapper ref={ref => setWrapperEl(ref)}>
      <Inner ref={ref => setInnerEl(ref)}>
        <Background id={"work-background"}/>
        <Title ref={titleRef}>WORK</Title>
        <Image1 className="case-study-card" image={images.antiSocial.childImageSharp.gatsbyImageData}/>
        <Image2 className="case-study-card" image={images.idk.childImageSharp.gatsbyImageData}/>
        <Image3 className="case-study-card" image={images.dallenHoyal.childImageSharp.gatsbyImageData}/>
        <Image4 className="case-study-card" image={images.lemond.childImageSharp.gatsbyImageData}/>
        <Image5 className="case-study-card" image={images.source7.childImageSharp.gatsbyImageData}/>
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

const Inner = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  z-index: 1;
  transform: translate(0);
`

const Title = styled.h2`
  position: absolute;
  z-index: 2;
  ${text.h1}
  color: ${colors.tan};
  mix-blend-mode: difference;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -40%);

  ${fresponsive(css`
    font-size: 870px;
  `)}

  ${fmobile(css`
    font-size: 180px;
  `)}
`

const Image = styled(GatsbyImage)`
  position: absolute !important;
  
  ${fresponsive(css`
    width: 336.23px;
    height: 543.04px;
  `)}

  ${fmobile(css`
    width: 104.27px;
    height: 168.4px;
  `)}
`

const Image1 = styled(Image)`
  z-index: 3;

  ${fresponsive(css`
    top: 1500px;
    left: 260px;
  `)}

  ${fmobile(css`
    left: 0;
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