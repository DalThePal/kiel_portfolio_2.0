import React from "react"
import styled, { css } from "styled-components"
import { fresponsive, fmobile } from "utils/fullyResponsive"
import colors from 'styles/colors'

const Header = () => (
  <Wrapper>
    <Ellipse>
      <Bz>BZ</Bz>
    </Ellipse>
  </Wrapper>
)

export default Header

const Wrapper = styled.header`
  position: absolute;
  z-index: 9;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  ${fresponsive(css`
    height: 103px;
  `)}
`

const Ellipse = styled.div`
  background-color: ${colors.white};
  border: 2px solid ${colors.black};
  transform: rotate(30deg);
  display: flex;
  align-items: center;
  justify-content: center;

  ${fresponsive(css`
    width: 108px;
    height: 39px;
    border-radius: 108px / 39px;
  `)}

  ${fmobile(css`
    width: 73.64px;
    height: 26.59px;
    border-radius: 73.64px / 26.59px;
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

  ${fmobile(css`
    font-size: 10px;
  `)}
`
