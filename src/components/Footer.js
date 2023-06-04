import React, { useEffect, useRef } from 'react'
import styled, { css } from 'styled-components'
import {fresponsive} from 'utils/fullyResponsive'
import colors from 'styles/colors'
import text from 'styles/text'
import UniversalLink from 'components/UniversalLink'
import links from 'utils/links'
import { changeColor } from 'components/Background'
import gsap from 'gsap'
import Background from 'components/Background'

const Footer = () => {

  const wrapperRef = useRef()

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: 'top bottom',
        end: "bottom bottom",
        scrub: true,
      }
    })

    tl.add(changeColor('footer-background', colors.black, colors.tan), 0)
  }, [])

  return (
    <Wrapper ref={wrapperRef}>
      <StyledBackground id="footer-background"/>
      <Top>
        <Title>Connect with me</Title>
        <SocialsWrapper>
          <SocialsLabel>Social Connect</SocialsLabel>
          <Socials>
            <SocialLink to={links.instagram}>Instagram</SocialLink>
            <SocialLink to={links.linkedin}>Linkedin</SocialLink>
            <SocialLink to={links.dribbble}>Dribbble</SocialLink>
          </Socials>
        </SocialsWrapper>
      </Top>
      <Bottom>
        <Email to={links.email}>Send me an email</Email>
      </Bottom>
    </Wrapper>
  )
}

export default Footer

const Wrapper = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${fresponsive(css`
    height: 853px;
    padding: 179px 100px 192px;
  `)}
`

const StyledBackground = styled(Background)`
  top: unset;
  bottom: 0;
`

const Top = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  position: relative;
  z-index: 2;
  mix-blend-mode: difference;
`

const Title = styled.h6`
  ${text.h2}
  color: ${colors.tan};
  text-transform: uppercase;
`

const SocialsLabel = styled.span`
  ${text.h5}
  color: ${colors.black};
  text-transform: uppercase;
  
  ${fresponsive(css`
    margin-bottom: 16px;
  `)}
`

const Socials = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  ${fresponsive(css`
    gap: 16px;
  `)}
`

const SocialsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const SocialLink = styled(UniversalLink)`
  ${text.s2}
  color: ${colors.blue};
  text-transform: uppercase;
  text-decoration: underline;
`

const Bottom = styled.div`
  display: flex;
  border-bottom: 2px solid ${colors.tan};
  width: 100%;
  position: relative;
  z-index: 2;
  mix-blend-mode: difference;
`

const Email = styled(UniversalLink)`
  ${text.s1}
  color: ${colors.blue};
  text-transform: uppercase;
  text-decoration: underline;

  ${fresponsive(css`
    margin-bottom: 48px;
  `)}
`