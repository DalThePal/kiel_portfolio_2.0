import React from 'react'
import Layout from 'components/Layout'
import "styles/fonts/typography.css"
import "the-new-css-reset/css/reset.css"

export const wrapPageElement = ({ element }) => {
  return (
    <Layout>
      {element}
    </Layout>
  )
}
