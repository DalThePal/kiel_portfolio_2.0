import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import text from 'styles/text'
import colors from 'styles/colors'

const UniversalLink = ({ to, external, children, className }) => {

  const props = external ? {
    href: to,
    target: "_blank",
    as: 'a'
  } : {
    to,
    as: Link
  }

  return (
    <Wrapper {...props} className={className}>
      {children} ↗
    </Wrapper>
  )
}

export default UniversalLink

const Wrapper = styled.a`
  ${text.button}
  color: ${colors.black};
  cursor: pointer;
`
