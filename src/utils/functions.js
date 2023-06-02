import {
  desktopBreakpoint as desktop,
  tabletBreakpoint as tablet,
  mobileBreakpoint as mobile,
} from "styles/media"

export const isBrowser = () => typeof window !== "undefined"

export const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export const pxToVw = (px, breakpoint) => {
  if (isBrowser()) {
    const vw = px / (breakpoint / 100)
    return vw
  }
}

export const getMedia = (fw, d, t, m) => {
  if (typeof window !== "undefined") {
    if (window.innerWidth > desktop) {
      return fw
    }
    if (window.innerWidth > tablet) {
      return d
    }
    if (window.innerWidth > mobile) {
      return t
    }
    if (window.innerWidth <= mobile) {
      return m
    }
  }

  return d
}

export const vwToPx = (vw) => {
  if (isBrowser()) {
    const px = vw * (window.innerWidth / 100)
    return px
  }
  return 0
}

export const sleep = (ms) =>
  new Promise(resolve => {
    setTimeout(resolve, ms)
  })

export function pathnameMatches(pathA, pathB) {
  return pathA === pathB || pathA === `${pathB}/` || pathB === `${pathA}/`
}