import React from 'react'
import styled, { css } from 'styled-components'
import {fresponsive} from 'utils/fullyResponsive'
import colors from 'styles/colors'
import text from 'styles/text'
import UniversalLink from 'components/UniversalLink'
import links from 'utils/links'

const Footer = () => {
  return (
    <Wrapper>
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
  background-color: ${colors.tan};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${fresponsive(css`
    height: 853px;
    padding: 179px 100px 192px;
  `)}
`

const Top = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`

const Title = styled.h6`
  ${text.h2}
  color: ${colors.black};
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
  color: ${colors.red};
  text-transform: uppercase;
  text-decoration: underline;
`

const Bottom = styled.div`
  display: flex;
  border-bottom: 2px solid ${colors.black};
  width: 100%;
`

const Email = styled(UniversalLink)`
  ${text.s1}
  color: ${colors.red};
  text-transform: uppercase;
  text-decoration: underline;

  ${fresponsive(css`
    margin-bottom: 48px;
  `)}
`