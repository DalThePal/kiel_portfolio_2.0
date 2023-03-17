import React, { useState, useEffect } from "react"
import styled, { css } from "styled-components"
import { fresponsive } from "utils/fullyResponsive"
import LogoFull from 'images/logoFull.png'
import Icon from 'images/menu.svg'
import gsap from 'gsap'
import colors from 'styles/colors'
import MenuLink from "./MenuLink"

const Header = () => {

  const [open, setOpen] = useState(false)
  const [menuEl, setMenuEl] = useState(null)
  const [timeline, setTimeline] = useState(null)

  useEffect(() => {
    if (menuEl) {
      const tl = gsap.timeline({
        paused: true
      })

      tl.to(menuEl, {
        height: window.innerHeight
      })

      setTimeline(tl)
    }
  }, [menuEl])

  useEffect(() => {
    if (timeline) {
      if (open) {
        timeline.play()
      } else {
        timeline.reverse()
      }
    }
  }, [open, timeline])

  return (
    <Wrapper>
      <Image src={LogoFull} alt="kiel cummings"/>
      <MenuIcon src={Icon} alt="menu" onClick={() => setOpen(val => !val)}/>
      <Menu ref={ref => setMenuEl(ref)}>
        <MenuInner>
          <Links>
            <MenuLink>AntiSocial Agency</MenuLink>
            <MenuLink>Adobe Consonant</MenuLink>
            <MenuLink>Starbucks INclusive Design</MenuLink>
            <MenuLink>Dallen Hoyal</MenuLink>
            <MenuLink>Lemond Cycles</MenuLink>
            <MenuLink>Source 7</MenuLink>
          </Links>
        </MenuInner>
      </Menu>
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  width: 100%;

  ${fresponsive(css`
    height: 140px;
    gap: 7px;
  `)}
`

const Image = styled.img`
  position: relative;
  z-index: 2;

  ${fresponsive(css`
    width: 208px;
    height: 47px;
  `)}
`

const MenuIcon = styled.img`
  position: absolute;
  z-index: 2;
  cursor: pointer;

  ${fresponsive(css`
    height: 40px;
    width: 40px;
    top: 49px;
    right: 101px;
  `)}
`

const Menu = styled.div`
  position: absolute;
  overflow: hidden;
  z-index: 1;
  width: 100vw;
  height: 0vh;
  top: 0;
  left: 0;
  background-color: ${colors.purple};
`

const MenuInner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`

const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  width: 100%;
  
  ${fresponsive(css`
    top: 220px;
  `)}
`