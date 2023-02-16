import React from 'react'
import styled from 'styled-components'
import Project from 'components/Project'

const SelectedWorks = ({ caseStudies }) => {

  const cases = caseStudies.map((item, index) => {
    return (
      <Project
        number={index + 1}
        title={item.title}
        tags={item.tags}
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
`
