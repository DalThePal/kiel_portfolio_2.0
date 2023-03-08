import React from 'react'
import styled, { css } from 'styled-components'
import { fresponsive } from 'utils/fullyResponsive'

const Button = ({ className, children, onClick }) => {
  return (
    <Wrapper className={className} onClick={onClick}>

    </Wrapper>
  )
}

export default Button

const Wrapper = styled.button`
  ${fresponsive(css`
   
  `)}
`