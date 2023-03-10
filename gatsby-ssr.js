import React from 'react'
import Layout from 'components/Layout'
import "the-new-css-reset/css/reset.css"
import 'styles/reset.css'
import 'styles/fonts/typography.css'

export const wrapPageElement = ({ element }) => {
  return (
    <Layout>
      {element}
    </Layout>
  )
}
