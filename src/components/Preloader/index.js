import React, { useRef } from "react"

import gsap from "gsap"
import { ScrollSmoother } from "gsap/ScrollSmoother"
import styled from "styled-components"
import {
  registerLoaderCallback,
  unregisterLoaderCallback,
} from "utils/Loader/LoaderUtils"
import colors from "styles/colors"
import useAnimation from "utils/useAnimation"
import RotatingTitle, { hideBottom, rotate } from "./RotatingTitle"

export default function Preloader() {
  const wrapperRef = useRef(null)
  const loadComplete = useRef(false)

  useAnimation(() => {
    ScrollSmoother.get()?.scrollTop(0)
    ScrollSmoother.get()?.paused(true)

    const onComplete = () => {
      loadComplete.current = true
    }

    const animateOut = () => {
      const outTl = gsap.timeline({
        onStart: () => {
          ScrollSmoother.get()?.scrollTop(0)
        },
        onComplete: () => {
          ScrollSmoother.get()?.paused(false)
          gsap.set(wrapperRef.current, {
            display: "none",
          })
        },
      })

      outTl.add(hideBottom("HELLO TROUBLE"), 0)
      outTl.add(rotate("HELLO TROUBLE", true), 0)
      outTl.add(rotate("COME ON IN", true), 0.25)
      outTl.to(wrapperRef.current, {
        y: '-100%',
        ease: "power4.inOut"
      }, 5)
    }

    const tl = gsap.timeline({
      onComplete: () => {
        if (!loadComplete.current) {
          rotate("HELLO TROUBLE")
          const interval = setInterval(() => {
            if (!loadComplete.current) {
              rotate("HELLO TROUBLE")
            } else {
              clearInterval(interval)
              animateOut()
            }
          }, 3000)
        } else {
          animateOut()
        }
      }
    })

    tl.add(rotate("HELLO TROUBLE"))

    registerLoaderCallback({
      callback: onComplete,
      duration: 1,
    })

    return () => {
      unregisterLoaderCallback(onComplete)
    }
  }, [])

  return (
    <Wrapper ref={wrapperRef}>
      <TextWrap>
        <RotatingTitle
          text="HELLO TROUBLE"
        />
      </TextWrap>
      <TextWrap>
        <NoFront
          text="COME ON IN"
        />
      </TextWrap>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: fixed;
  inset: 0;
  background-color: ${colors.red};
  z-index: 100;
  pointer-events: none;
  display: grid;
  grid-template-rows: 1fr auto auto auto;
`

const TextWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const NoFront = styled(RotatingTitle)`
  z-index: 0;
  .front {
    opacity: 0;
  }
`