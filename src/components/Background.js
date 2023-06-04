import React from 'react'
import styled from 'styled-components'
import gsap from 'gsap'
import colors from 'styles/colors'

export const changeColor = (id, prevColor, color) => {
  const tl = gsap.timeline()

  tl.set(`#${id}`, {
    backgroundColor: prevColor
  }, 0)

  tl.fromTo(`#${id} .background-section-inner`, {
    backgroundColor: prevColor
  }, {
    backgroundColor: color,
    duration: 0,
    immediateRender: false,
  }, 0)

  tl.fromTo(`#${id} .background-section-inner`, {
    height: 0
  }, {
    height: '100%',
    immediateRender: false,
  }, 0)

  return tl
}

export default function Background({id, className}) {
  return (
    <Wrapper id={id} className={className}>
      <Section>
        <SectionInner className="background-section-inner"/>
      </Section>
      <Section>
        <SectionInner className="background-section-inner"/>
      </Section>
      <Section>
        <SectionInner className="background-section-inner"/>
      </Section>
      <Section>
        <SectionInner className="background-section-inner"/>
      </Section>
      <Section>
        <SectionInner className="background-section-inner"/>
      </Section>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: ${colors.tan};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  transform: translate(0);
`

const Section = styled.div`
  position: relative;
  height: 20%;
  width: 100%;
`

const SectionInner = styled.div`
  background-color: ${colors.black};
  position: absolute;
  top: 0;
  left: 0;
  height: 0%;
  width: 100%;
`