import React from 'react'
import styled, { css } from 'styled-components'
import { fresponsive } from 'utils/fullyResponsive'
import colors from 'styles/colors'
import CaseStudyLinks from 'components/CaseStudyLinks'

const CaseStudies = () => {
  return (
    <Wrapper>
      <CaseStudyLinks/>
    </Wrapper>
  )
}

export default CaseStudies

const Wrapper = styled.section`
  position: relative;
  z-index: 2;
  background-color: ${colors.black};
  width: 100%;

  ${fresponsive(css`
    height: 2030px;
  `)}
`
