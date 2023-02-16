import React from "react"
import styled, { css } from "styled-components"
import { fresponsive } from "utils/fullyResponsive"
import colors from 'styles/colors'
import text from 'styles/text'

const Header = () => (
  <Wrapper>
    <Ellipse>
      <BZ>BZ</BZ>
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
`

const BZ = styled.span` 
  transform: rotate(-30deg);
  font-family: 'Neue Montreal';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 110%;
  color: ${colors.black};
`
