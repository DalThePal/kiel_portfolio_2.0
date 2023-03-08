import React from 'react'
import { graphql } from 'gatsby'
import Seo from 'components/Seo'

const CaseStudy = ({ data }) => {
  
  const { contentfulCaseStudy } = data

  return (
    <>
      
    </>
  )
}

export default CaseStudy

export const Head = ({data}) => {
  return (
    <Seo
      title={data.contentfulCaseStudy.metaTitle}
      description={data.contentfulCaseStudy.metaDescription}
      pathname={`/case-studies/${data.contentfulCaseStudy.slug}`}
    />
  )
}
