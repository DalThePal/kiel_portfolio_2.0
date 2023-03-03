import React from 'react'
import styled, { css } from 'styled-components'
import {fresponsive, fmobile} from 'utils/fullyResponsive'
import colors from 'styles/colors'
import UniversalLink from 'components/UniversalLink'

const Footer = () => {
  return (
    <Wrapper>
      <Link1 to="/">How We'll Work Together</Link1>
      <Ellipse><Bz>BZ</Bz></Ellipse>
      <Link2 to="/">Contact</Link2>
    </Wrapper>
  )
}

export default Footer

const Wrapper = styled.footer`
  background-color: ${colors.white};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  
  ${fresponsive(css`
    height: 200px;
    padding: 56px 40px;
  `)}

  ${fmobile(css`
    height: 247px;
    flex-direction: column;
    padding: 25px 0px 50px;
  `)}
`

const Ellipse = styled.div`
  position: absolute;
  background-color: ${colors.white};
  border: 2px solid ${colors.black};
  transform-origin: center;
  transform: rotate(30deg) translate(-50%, 50%);
  display: flex;
  align-items: center;
  justify-content: center;
  left: 50%;
  top: 50%;

  ${fresponsive(css`
    width: 108px;
    height: 39px;
    border-radius: 108px / 39px;
  `)}

  ${fmobile(css`
    position: relative;
    left: unset;
    top: unset;
    transform: rotate(30deg);
    order: 3;
  `)}
`

const Bz = styled.span` 
  transform: rotate(-30deg);
  font-family: 'Neue Montreal';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 110%;
  color: ${colors.black};
`

const Link1 = styled(UniversalLink)`
  ${fmobile(css`
    order: 1
  `)}
`

const Link2 = styled(UniversalLink)`
  ${fmobile(css`
    order: 2;
  `)}
`