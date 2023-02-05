import { css } from "styled-components"

import media, {
  mobileDesignSize,
  tabletDesignSize,
  desktopDesignSize,
} from "styles/media"

const PRECISION = 3

const replacer = (match, breakpoint) => {
  return ((parseInt(match, 10) / breakpoint) * 100).toFixed(PRECISION)
}

/**
 * takes in css containing pixel values and generates scaling media queries using the breakpoints
 * @param cssIn
 * @returns
 */
export default function fullyResponsive(cssIn) {
  // if not a string, convert to string
  const cssAsString = typeof cssIn === "string" ? cssIn : cssIn.join("\n")
  const onlyPxValues = cssAsString
    .replaceAll("{", "{\n")
    .replaceAll("}", "\n}")
    .replaceAll(";", ";\n")
    .split("\n")
    .filter(x => x.match(/px|{|}/g))
    .join("\n")

  // generate media queries for each breakpoint
  const regex = /(?=[\S ]*;)(\d+)px/g
  const out = css`
    ${cssAsString}
    ${media.fullWidth} {
      ${onlyPxValues.replace(
        regex,
        (_, px) => `${replacer(px, desktopDesignSize)}vw`
      )}
    }
    ${media.desktop} {
      ${onlyPxValues.replace(
        regex,
        (_, px) => `${replacer(px, desktopDesignSize)}vw`
      )}
    }
    ${media.tablet} {
      ${onlyPxValues.replace(
        regex,
        (_, px) => `${replacer(px, tabletDesignSize)}vw`
      )}
    }
    ${media.mobile} {
      ${onlyPxValues.replace(
        regex,
        (_, px) => `${replacer(px, mobileDesignSize)}vw`
      )}
    }
  `
  return out
}

const fresponsive = fullyResponsive

const fdesktop = (cssIn) => fullyResponsive(cssIn, "desktop")
const ftablet = (cssIn) => fullyResponsive(cssIn, "tablet")
const fmobile = (cssIn) => fullyResponsive(cssIn, "mobile")

export { fresponsive, fdesktop, ftablet, fmobile }
