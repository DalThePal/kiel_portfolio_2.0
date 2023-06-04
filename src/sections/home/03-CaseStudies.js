import React from 'react'
import styled, { css } from 'styled-components'
import { fresponsive } from 'utils/fullyResponsive'
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
  width: 100%;

  ${fresponsive(css`
    height: 2030px;
  `)}
`
