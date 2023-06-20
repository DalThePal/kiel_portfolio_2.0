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
          original {
            width
            height
          }
        }
      }
      flower: file(relativePath: {eq: "flower.png"}) {
        childImageSharp {
          gatsbyImageData
          original {
            width
            height
          }
        }
      }
      gifGod: file(relativePath: {eq: "gifGod.png"}) {
        childImageSharp {
          gatsbyImageData
          original {
            width
            height
          }
        }
      }
      star: file(relativePath: {eq: "star.png"}) {
        childImageSharp {
          gatsbyImageData
          original {
            width
            height
          }
        }
      }
      funky: file(relativePath: {eq: "funky.png"}) {
        childImageSharp {
          gatsbyImageData
          original {
            width
            height
          }
        }
      }
      horns: file(relativePath: {eq: "horns.png"}) {
        childImageSharp {
          gatsbyImageData
          original {
            width
            height
          }
        }
      }
      smiley: file(relativePath: {eq: "smiley.png"}) {
        childImageSharp {
          gatsbyImageData
          original {
            width
            height
          }
        }
      }
      supdawg: file(relativePath: {eq: "supdawg.png"}) {
        childImageSharp {
          gatsbyImageData
          original {
            width
            height
          }
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

  }, [])

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
    [updateImageOn, wrapper, updateImagePosition]
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

  const imagesArray = Object.keys(images).map((key) => images[key])

  const imageElements = [...imagesArray, ...imagesArray, ...imagesArray, ...imagesArray].map((item, index) => {

    return <Image 
      image={item.childImageSharp.gatsbyImageData} 
      width={item.childImageSharp.original.width / 2}
      height={item.childImageSharp.original.height / 2}
      className={`graphic graphic-${index}`}
    />
  })

  return imageElements
}

const Image = styled(GatsbyImage)`
  pointer-events: none;
  position: absolute !important;
  height: ${props => props.height}px;
  width: ${props => props.width}px;
  opacity: 0;
  top: 0;
  left: 0;
  transform-origin: center center;
  transform: translate(-100%, -50%);
`
