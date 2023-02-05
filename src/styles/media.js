export const mobileBreakpoint = 500
export const mobileDesignSize = 375

export const tabletBreakpoint = 1024
export const tabletDesignSize = 1024

export const desktopBreakpoint = 1660
export const desktopDesignSize = 1660

const media = {
  mobile: `@media screen and (max-width: ${mobileBreakpoint}px)`,
  tablet: `@media screen and (min-width: ${mobileBreakpoint + 1}px) and (max-width: ${tabletBreakpoint}px)`,
  desktop: `@media screen and (min-width: ${tabletBreakpoint + 1}px) and (max-width: ${desktopBreakpoint}px)`,
  fullWidth: `@media screen and (min-width: ${desktopBreakpoint + 1}px)`,
}

export default media
