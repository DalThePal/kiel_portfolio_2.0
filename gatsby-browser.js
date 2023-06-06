import React from 'react'
import Layout from 'components/Layout'
import Providers from 'components/Providers'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import "the-new-css-reset/css/reset.css"
import 'styles/reset.css'
import 'styles/fonts/typography.css'

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

export const wrapRootElement = ({ element }) => {
  return (
    <Providers>
      {element}
    </Providers>
  )
}