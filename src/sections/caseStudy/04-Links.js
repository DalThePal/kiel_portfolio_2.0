import React from 'react'
import styled, { css } from 'styled-components'
import { fresponsive } from 'utils/fullyResponsive'
import colors from 'styles/colors'
import text from 'styles/text'
import CaseStudyLinks from 'components/CaseStudyLinks'

const Links = ({ hide }) => {
  return (
    <Wrapper>
      <Title>View More Projects</Title>
      <CaseStudyLinks hide={hide}/>
    </Wrapper>
  )
}

export default Links

const Wrapper = styled.section`
  background-color: ${colors.black};
  display: flex;
  flex-direction: column;
  align-items: center;

  ${fresponsive(css`
    height: 1865px;
    gap: 129px;
    padding-top: 141px;
  `)}
`

const Title = styled.h6`
  ${text.h5}
  color: ${colors.red};
  text-transform: uppercase;
`