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
    const length = 12

    const currentImage = `.graphic-wrapper-${graphicIndex.current}`
    const currentImageChild = `.graphic-child-${graphicIndex.current}`

    const rotation = getRandomInt(-30, 30)

    const tl = gsap.timeline({
      autoRemoveChildren: true,
    })

    tl.set(".graphic", {
      zIndex: "-=1",
      opacity: 1
    }, 0)

    tl.set(currentImage, {
      zIndex: length,
      rotate: rotation,
      overwrite: true,
    }, 0)

    tl.set(currentImageChild, {
      opacity: 0,
      overwrite: true
    }, 0)

    tl.set(currentImage, {
      left: x,
      top: y,
    }, 0)

    tl.fromTo(currentImageChild, {
      opacity: 0,
      scale: 0.5
    }, {
      duration: 0.6,
      scale: 1,
      opacity: 1,
      ease: "power2.out"
    }, 0.1)

    tl.fromTo(currentImageChild, {
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
          const length = 12
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
  console.log(images)

  return (
    <>
      {images.nineThree?.childImageSharp?.gatsbyImageData && <ImageWrapper className="graphic graphic-wrapper-0" width={266} height={115}>
        <Image image={images.nineThree.childImageSharp.gatsbyImageData} className="graphic-child-0"/>
      </ImageWrapper>}
      {images.flower?.childImageSharp?.gatsbyImageData && <ImageWrapper className="graphic graphic-wrapper-1" width={134} height={132}>
        <Image image={images.flower.childImageSharp.gatsbyImageData} className="graphic-child-1"/>
      </ImageWrapper>}
      {images.star?.childImageSharp?.gatsbyImageData && <ImageWrapper className="graphic graphic-wrapper-2" width={95} height={140}>
        <Image image={images.star.childImageSharp.gatsbyImageData} className="graphic-child-2"/>
      </ImageWrapper>}
      {images.gifGod?.childImageSharp?.gatsbyImageData && <ImageWrapper className="graphic graphic-wrapper-3" width={257} height={201}>
        <Image image={images.gifGod.childImageSharp.gatsbyImageData} className="graphic-child-3"/>
      </ImageWrapper>}
      {images.nineThree?.childImageSharp?.gatsbyImageData && <ImageWrapper className="graphic graphic-wrapper-4" width={266} height={115}>
        <Image image={images.nineThree.childImageSharp.gatsbyImageData} className="graphic-child-4"/>
      </ImageWrapper>}
      {images.flower?.childImageSharp?.gatsbyImageData && <ImageWrapper className="graphic graphic-wrapper-5" width={134} height={132}>
        <Image image={images.flower.childImageSharp.gatsbyImageData} className="graphic-child-5"/>
      </ImageWrapper>}
      {images.star?.childImageSharp?.gatsbyImageData && <ImageWrapper className="graphic graphic-wrapper-6" width={95} height={140}>
        <Image image={images.star.childImageSharp.gatsbyImageData} className="graphic-child-6"/>
      </ImageWrapper>}
      {images.gifGod?.childImageSharp?.gatsbyImageData && <ImageWrapper className="graphic graphic-wrapper-7" width={257} height={201}>
        <Image image={images.gifGod.childImageSharp.gatsbyImageData} className="graphic-child-7"/>
      </ImageWrapper>}
      {images.nineThree?.childImageSharp?.gatsbyImageData && <ImageWrapper className="graphic graphic-wrapper-8" width={266} height={115}>
        <Image image={images.nineThree.childImageSharp.gatsbyImageData} className="graphic-child-8"/>
      </ImageWrapper>}
      {images.flower?.childImageSharp?.gatsbyImageData && <ImageWrapper className="graphic graphic-wrapper-9" width={134} height={132}>
        <Image image={images.flower.childImageSharp.gatsbyImageData} className="graphic-child-9"/>
      </ImageWrapper>}
      {images.star?.childImageSharp?.gatsbyImageData && <ImageWrapper className="graphic graphic-wrapper-10" width={95} height={140}>
        <Image image={images.star.childImageSharp.gatsbyImageData} className="graphic-child-10"/>
      </ImageWrapper>}
      {images.gifGod?.childImageSharp?.gatsbyImageData && <ImageWrapper className="graphic graphic-wrapper-11" width={257} height={201}>
        <Image image={images.gifGod.childImageSharp.gatsbyImageData} className="graphic-child-11"/>
      </ImageWrapper>}
      {images.nineThree?.childImageSharp?.gatsbyImageData && <ImageWrapper className="graphic graphic-wrapper-4" width={266} height={115}>
        <Image image={images.nineThree.childImageSharp.gatsbyImageData} className="graphic-child-4"/>
      </ImageWrapper>}
      {images.flower?.childImageSharp?.gatsbyImageData && <ImageWrapper className="graphic graphic-wrapper-5" width={134} height={132}>
        <Image image={images.flower.childImageSharp.gatsbyImageData} className="graphic-child-5"/>
      </ImageWrapper>}
      {images.star?.childImageSharp?.gatsbyImageData && <ImageWrapper className="graphic graphic-wrapper-6" width={95} height={140}>
        <Image image={images.star.childImageSharp.gatsbyImageData} className="graphic-child-6"/>
      </ImageWrapper>}
      {images.gifGod?.childImageSharp?.gatsbyImageData && <ImageWrapper className="graphic graphic-wrapper-7" width={257} height={201}>
        <Image image={images.gifGod.childImageSharp.gatsbyImageData} className="graphic-child-7"/>
      </ImageWrapper>}
    </>
  )
}

const ImageWrapper = styled.div`
  position: absolute;
  overflow: hidden;
  pointer-events: none;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  top: 0;
  left: 0;
  transform-origin: center center;
  transform: translate(-50%, -50%);
`

const Image = styled(GatsbyImage)`
  position: absolute !important;
  width: 100%;
  height: 100%;
  opacity: 0;
`
