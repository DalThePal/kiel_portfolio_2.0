import React from 'react'
import styled, { css } from 'styled-components'
import { fresponsive } from 'utils/fullyResponsive'
import colors from 'styles/colors'
import text from 'styles/text'

const Picture = ({ title, text }) => {
  return (
    <Wrapper>
      <Content>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </Content>
    </Wrapper>
  )
}

export default Picture

const Wrapper = styled.section`
  position: relative;
  background-color: ${colors.black};

  ${fresponsive(css`
    height: 4871px;
  `)}
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;

  ${fresponsive(css`
    gap: 24px;
    top: 526px;
    left: 754px;
  `)}
`

const Title = styled.h2`
  color: ${colors.tan};
  ${text.h4}

  ${fresponsive(css`
    width: 650px;
  `)}
`

const Text = styled.p`
  color: ${colors.tan};
  ${text.bodyM}

  ${fresponsive(css`
    width: 633px;
  `)}
`