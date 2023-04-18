import React from 'react'
import styled, { css } from 'styled-components'
import { fresponsive } from 'utils/fullyResponsive'
import colors from 'styles/colors'
import text from 'styles/text'

const Links = () => {
  return (
    <Wrapper>
      <Title>View More Projects</Title>
    </Wrapper>
  )
}

export default Links

const Wrapper = styled.section`
  background-color: ${colors.black};
  position: relative;

  ${fresponsive(css`
    height: 1865px;
  `)}
`

const Title = styled.h6`
  ${text.h5}
  position: absolute;
  color: ${colors.red};
  left: 50%;
  transform: translateX(-50%);
  text-transform: uppercase;

  ${fresponsive(css`
    top: 141px;
  `)}
`