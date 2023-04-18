import React, { useEffect, useCallback, useRef, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import gsap from "gsap"
import styled from "styled-components"
import { getRandomInt } from "utils/functions"

const IMAGE_SPACING = 150

export default function Graphics({ wrapper }) {
  const [updateImageOn, setUpdateImageOn] = useState(false)
  const graphicIndex = useRef(0)
  const mouseCoord = useRef({ x: 0, y: 0 })
  const mouseDir = useRef({ x: 1, y: 1 })

  const images = useStaticQuery(graphql`
    query GraphicsQuery {
      nineThree: file(relativePath: {eq: "1993.png"}) {
        childImageSharp {
          gatsbyImageData
        }
      }
      flower: file(relativePath: {eq: "flower.png"}) {
        childImageSharp {
          gatsbyImageData
        }
      }
      gifGod: file(relativePath: {eq: "gifGod.png"}) {
        childImageSharp {
          gatsbyImageData
        }
      }
      star: file(relativePath: {eq: "star.png"}) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `)

  const mouseEnter = useCallback(() => {
    // only allow images to show if mouse in section
    setUpdateImageOn(true)
  }, [setUpdateImageOn])

  const mouseLeave = useCallback(() => {
    setUpdateImageOn(false)
  }, [setUpdateImageOn])

  const updateImagePosition = useCallback(() => {
    const { x, y } = mouseCoord.current
    const length = 16

    const currentImage = `.graphic-${graphicIndex.current}`

    const rotation = getRandomInt(-30, 30)

    const tl = gsap.timeline({
      autoRemoveChildren: true,
    })

    tl.set(currentImage, {
      zIndex: "20-=1",
      rotate: rotation,
      overwrite: true,
      opacity: 0,
      x,
      y,
    }, 0)

    tl.fromTo(currentImage, {
      opacity: 0,
      scale: 0.5
    }, {
      duration: 0.6,
      scale: 1,
      opacity: 1,
      ease: "power2.out"
    }, 0.1)

    tl.fromTo(currentImage, {
      opacity: 1,
      scale: 1
    }, {
      duration: 0.6,
      scale: 0.5,
      opacity: 0,
      ease: "power2.in"
    }, 0.7)

  }, [images])

  const mouseMove = useCallback(
    (e) => {
      if (updateImageOn && wrapper) {
        const { clientX, clientY } = e
        const { x, y } = mouseCoord.current
        let update = false // only update if there is spacing for images

        // get mouse direction
        mouseDir.current.x = clientX > x ? 1 : -1
        mouseDir.current.y = clientY > y ? 1 : -1

        // get new mouse coordinates
        if (clientX > x + IMAGE_SPACING || clientX < x - IMAGE_SPACING) {
          mouseCoord.current.x = clientX
          update = true
        }
        if (clientY > y + IMAGE_SPACING || clientY < y - IMAGE_SPACING) {
          mouseCoord.current.y = clientY
          update = true
        }

        if (update) {
          const length = 16
          if (graphicIndex.current === length - 1) {
            graphicIndex.current = 0
          } else {
            graphicIndex.current += 1
          }
          updateImagePosition()
        }
      }
    },
    [updateImageOn, images, wrapper, updateImagePosition]
  )

  useEffect(() => {
    if (wrapper) {
      wrapper.addEventListener("mouseenter", mouseEnter)
      wrapper.addEventListener("mouseleave", mouseLeave)
      wrapper.addEventListener("mousemove", mouseMove)

      return () => {
        wrapper.removeEventListener("mouseenter", mouseEnter)
        wrapper.removeEventListener("mouseleave", mouseLeave)
        wrapper.removeEventListener("mousemove", mouseMove)
      }
    }
  }, [mouseEnter, mouseLeave, mouseMove, wrapper])

  return (
    <>
      {images.nineThree?.childImageSharp?.gatsbyImageData && <Image image={images.nineThree.childImageSharp.gatsbyImageData} className="graphic graphic-0" width={266} height={115}/>}
      {images.flower?.childImageSharp?.gatsbyImageData && <Image image={images.flower.childImageSharp.gatsbyImageData} className="graphic graphic-1" width={134} height={132}/>}
      {images.star?.childImageSharp?.gatsbyImageData && <Image image={images.star.childImageSharp.gatsbyImageData} className="graphic graphic-2" width={95} height={140}/>}
      {images.gifGod?.childImageSharp?.gatsbyImageData && <Image image={images.gifGod.childImageSharp.gatsbyImageData} className="graphic graphic-3" width={257} height={201}/>}
      {images.nineThree?.childImageSharp?.gatsbyImageData && <Image image={images.nineThree.childImageSharp.gatsbyImageData} className="graphic graphic-4" width={266} height={115}/>}
      {images.flower?.childImageSharp?.gatsbyImageData && <Image image={images.flower.childImageSharp.gatsbyImageData} className="graphic graphic-5" width={134} height={132}/>}
      {images.star?.childImageSharp?.gatsbyImageData && <Image image={images.star.childImageSharp.gatsbyImageData} className="graphic graphic-6" width={95} height={140}/>}
      {images.gifGod?.childImageSharp?.gatsbyImageData && <Image image={images.gifGod.childImageSharp.gatsbyImageData} className="graphic graphic-7" width={257} height={201}/>}
      {images.nineThree?.childImageSharp?.gatsbyImageData && <Image image={images.nineThree.childImageSharp.gatsbyImageData} className="graphic graphic-8" width={266} height={115}/>}
      {images.flower?.childImageSharp?.gatsbyImageData && <Image image={images.flower.childImageSharp.gatsbyImageData} className="graphic graphic-9" width={134} height={132}/>}
      {images.star?.childImageSharp?.gatsbyImageData && <Image image={images.star.childImageSharp.gatsbyImageData} className="graphic graphic-10" width={95} height={140}/>}
      {images.gifGod?.childImageSharp?.gatsbyImageData && <Image image={images.gifGod.childImageSharp.gatsbyImageData} className="graphic graphic-11" width={257} height={201}/>}
      {images.nineThree?.childImageSharp?.gatsbyImageData && <Image image={images.nineThree.childImageSharp.gatsbyImageData} className="graphic graphic-12" width={266} height={115}/>}
      {images.flower?.childImageSharp?.gatsbyImageData && <Image image={images.flower.childImageSharp.gatsbyImageData} className="graphic graphic-13" width={134} height={132}/>}
      {images.star?.childImageSharp?.gatsbyImageData && <Image image={images.star.childImageSharp.gatsbyImageData} className="graphic graphic-14" width={95} height={140}/>}
      {images.gifGod?.childImageSharp?.gatsbyImageData && <Image image={images.gifGod.childImageSharp.gatsbyImageData} className="graphic graphic-15" width={257} height={201}/>}
    </>
  )
}

const Image = styled(GatsbyImage)`
  pointer-events: none;
  position: absolute !important;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  opacity: 0;
  top: 0;
  left: 0;
  transform-origin: center center;
`
