import React from 'react'
import styled, { css, keyframes } from 'styled-components'
import { fresponsive } from 'utils/fullyResponsive'
import text from 'styles/text'
import colors from 'styles/colors'
import { ReactComponent as ArrowSVG } from 'images/arrow.svg'

const Button = ({ className, children }) => {
  return (
    <Wrapper className={className}>
      <Inner>
        <Span>{children}</Span>
        <Span>{children}</Span>
        <Span>{children}</Span>
        <Span>{children}</Span>
        <Span>{children}</Span>
        <Span>{children}</Span>
      </Inner>
      <Gradient/>
      <Circle>
        <Arrow/>
      </Circle>
    </Wrapper>
  )
}

export default Button

const marqueeEffect = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
`

const Wrapper = styled.button`
  position: relative;
  background-color: ${colors.white};
  cursor: pointer;
  overflow: hidden;
  border: 1px solid ${colors.black};

  ${fresponsive(css`
    width: 240px;
    height: 54px;
    border-radius: 54px;
  `)}
`

const Inner = styled.div`
  top: 0;
  left: 0;
  position: absolute;
  display: flex;
  align-items: center;
  height: 100%;
  animation: ${marqueeEffect} 10s linear infinite;

  ${fresponsive(css`
    gap: 15px;
    padding-right: 15px;
  `)}
`

const Span = styled.span`
  ${text.button}
  white-space: nowrap;
`

const Circle = styled.div`
  position: absolute;
  border-radius: 50%;
  background-color: ${colors.black};
  top: 0;
  right: -1px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${fresponsive(css`
    height: 54px;
    width: 54px;
  `)}
`

const Arrow = styled(ArrowSVG)`
  height: auto;

  ${fresponsive(css`
    width: 20px;
  `)}
`

const Gradient = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  background-image: linear-gradient(to right, transparent 0%, ${colors.white} 100%);
`
