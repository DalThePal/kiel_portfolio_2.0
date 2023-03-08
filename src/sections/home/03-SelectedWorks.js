import React from 'react'
import styled, {css} from 'styled-components'
import Project from 'components/Project'
import { fmobile } from 'utils/fullyResponsive'

const SelectedWorks = ({ caseStudies }) => {

  const cases = caseStudies.map((item, index) => {
    return (
      <Project
        number={index + 1}
        title={item.title}
        tags={item.tags}
        slug={item.slug}
        image={item.featuredImage}
      />
    )
  })

  return (
    <Wrapper>
      {cases}
    </Wrapper>
  )
}

export default SelectedWorks

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;

  ${fmobile(css`
    flex-direction: column;
    flex-wrap: unset;
  `)}
`
