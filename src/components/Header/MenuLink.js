import React, { useEffect, useRef, useState} from 'react'
import styled, { css } from 'styled-components'
import text from 'styles/text'
import colors from 'styles/colors'
import gsap from 'gsap'
import { fresponsive } from 'utils/fullyResponsive'
import { useMedia } from 'utils/useMedia'

const MenuLink = ({ href, children}) => {

  const wrapperRef = useRef(null)
  const innerRef = useRef(null);
  const [timeline, setTimeline] = useState()
  const height = useMedia('8.85vw', '8.85vw', '8.85vw', '8.85vw')

  useEffect(() => {
    if (innerRef.current && wrapperRef.current) {
      const tl = gsap.timeline({
        paused: true,
      });

      tl.to(wrapperRef.current, {
        height,
        duration: 0.25,
        ease: "power1.in"
      }, 0)
      tl.to(innerRef.current, {
        duration: 0.25,
        rotateX: 90,
        ease: "power1.in"
      }, 0);
    
      setTimeline(tl)

      return () => {
        tl.kill()
      }
    }
  }, [height]);

  return (
    <Wrapper ref={wrapperRef} onMouseEnter={() => timeline.play()} onMouseLeave={() => timeline.reverse()}>
      <Inner ref={innerRef}>
        <Child className="front">
          <Span1>{children}</Span1>
        </Child>
        <Child className="back">
    
        </Child>
        <Child className="top">
    
        </Child>
        <Child className="bottom">
          <Span2>{children}</Span2>
        </Child>
      </Inner>
    </Wrapper>
  )
}

export default MenuLink

const Wrapper = styled.div`
  cursor: pointer;
  position: relative;
  perspective: 800px;
  width: 65%;

  ${fresponsive(css`
    height: 120px;
  `)}
`

const Inner = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;

  ${fresponsive(css`
    transform-origin: 50% 50% -5px;
    .front {
      transform: translateZ(60px);
    }

    .back {
      transform: rotateX(180deg) translateZ(25px);
    }

    .top {
      transform: rotateX(90deg) translateZ(25px);
    }

    .bottom {
      transform: rotateX(-90deg) translateZ(30px) translateY(30px);
    }
  `)}

`;

const Child = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  backface-visibility: hidden;

  ${fresponsive(css`
    height: 120px;
  `)}
`;

const Span1 = styled.span`
  ${text.h4}
  color: ${colors.tan};
  text-transform: uppercase;
`

const Span2 = styled.span`
  ${text.h3};
  color: ${colors.black};
  text-transform: uppercase;
`