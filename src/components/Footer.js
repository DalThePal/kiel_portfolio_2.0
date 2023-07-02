import React, { useEffect, useRef, useContext } from 'react'
import styled, { css } from 'styled-components'
import {fresponsive, fmobile} from 'utils/fullyResponsive'
import colors from 'styles/colors'
import text from 'styles/text'
import UniversalLink from 'components/UniversalLink'
import links from 'utils/links'
import { changeColor } from 'components/Background'
import gsap from 'gsap'
import Background from 'components/Background'
import { LogoContext } from 'components/Providers'
import {useMedia} from 'utils/useMedia'

const Footer = () => {
  const setLogoColor = useContext(LogoContext).setColor
  const wrapperRef = useRef()
  const mobile = useMedia(false, false, false, true)

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: 'top bottom',
        end: "bottom bottom",
        scrub: true,
        onLeave: () => {
          setLogoColor(colors.black)
        },
        onEnterBack: () => {
          setLogoColor(colors.tan)
        }
      }
    })

    tl.add(changeColor('footer-background', colors.black, colors.tan), 0)
  }, [setLogoColor])

  return (
    <Wrapper ref={wrapperRef}>
      <StyledBackground id="footer-background"/>
      <Top>
        <Title>Connect with me</Title>
        {!mobile && <SocialsWrapper>
          <SocialsLabel>Social Connect</SocialsLabel>
          <Socials>
            <SocialLink to={links.instagram}>Instagram</SocialLink>
            <SocialLink to={links.linkedin}>Linkedin</SocialLink>
            <SocialLink to={links.dribbble}>Dribbble</SocialLink>
          </Socials>
        </SocialsWrapper>}
        {mobile && <Email to={links.email}>Send me an email</Email>}
      </Top>
      <Bottom>
        {!mobile && <Email to={links.email}>Send me an email</Email>}

        {mobile && <SocialsWrapper>
          <SocialsLabel>Social Connect</SocialsLabel>
          <Socials>
            <SocialLink to={links.instagram}>Instagram</SocialLink>
            <SocialLink to={links.linkedin}>Linkedin</SocialLink>
            <SocialLink to={links.dribbble}>Dribbble</SocialLink>
          </Socials>
        </SocialsWrapper>}
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

  ${fmobile(css`
    height: 907px;
    padding: 159px 24px 114px;
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

  ${fmobile(css`
    flex-direction: column;
    align-items: center;
  `)}
`

const Title = styled.h6`
  ${text.h2}
  color: ${colors.tan};
  text-transform: uppercase;

  ${fmobile(css`
    font-size: 180px;
    text-align: center;
    margin-bottom: 40px;
  `)}
`

const SocialsLabel = styled.span`
  ${text.h5}
  color: ${colors.tan};
  text-transform: uppercase;
  
  ${fresponsive(css`
    margin-bottom: 16px;
  `)}

  ${fmobile(css`
    width: 107px;
    margin-bottom: 0;
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

  ${fmobile(css`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;
  `)}
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

  ${fmobile(css`
    font-size: 24px;
    margin-bottom: 0;
  `)}
`