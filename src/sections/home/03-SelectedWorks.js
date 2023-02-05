import React from 'react'
import styled from 'styled-components'
import WorkCard from 'components/WorkCard'

const SelectedWorks = ({ caseStudies }) => {

  const cases = caseStudies.map((item, index) => {
    return (
      <WorkCard
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
