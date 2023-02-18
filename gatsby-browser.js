import React from 'react'
import Layout from 'components/Layout'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import "styles/fonts/typography.css"
import "the-new-css-reset/css/reset.css"
import 'styles/reset.css'

gsap.registerPlugin(
  ScrollTrigger, 
  ScrollSmoother
)

export const wrapPageElement = ({ element }) => {
  return (
    <Layout>
      {element}
    </Layout>
  )
}
