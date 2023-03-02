import { css } from 'styled-components'
import fullyResponsive from "utils/fullyResponsive"

const text = {
  h1: fullyResponsive(css`
    font-family: 'Neue Montreal';
    font-style: normal;
    font-weight: 700;
    font-size: 240px;
    line-height: 90%;
    letter-spacing: -0.04em;
  `),
  h2: fullyResponsive(css`
    font-family: 'Neue Montreal';
    font-style: normal;
    font-weight: 400;
    font-size: 160px;
    line-height: 110%;
    letter-spacing: -0.03em;
  `),
  h3: fullyResponsive(css`
    font-family: 'Neue Montreal';
    font-style: normal;
    font-weight: 400;
    font-size: 120px;
    line-height: 110%;
    letter-spacing: -0.04em;
  `),
  h4: fullyResponsive(css`
    font-family: 'Neue Montreal';
    font-style: normal;
    font-weight: 400;
    font-size: 60px;
    line-height: 100%;
    letter-spacing: -0.04em;
  `),
  h5: fullyResponsive(css`
    font-family: 'Neue Montreal';
    font-style: normal;
    font-weight: 400;
    font-size: 45px;
    line-height: 110%;
  `),
  h6: fullyResponsive(css`
    font-family: 'Neue Montreal';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 110%;
  `),
  h7: fullyResponsive(css`
    font-family: 'Neue Montreal';
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 125%;
    letter-spacing: -0.01em;
  `),
  body1: fullyResponsive(css`
    font-family: 'Neue Montreal';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 125%;
  `),
  link: fullyResponsive(css`
    font-family: 'Neue Montreal';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 110%;
    letter-spacing: -0.02em;
    text-decoration: underline;
  `),
  button: fullyResponsive(css`
    font-family: 'Neue Montreal';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 110%;
    text-decoration: underline;
  `),
  n1: fullyResponsive(css`
    font-family: 'Tusker Grotesk';
    font-style: normal;
    font-weight: 700;
    font-size: 170px;
    line-height: 110%;
    text-transform: uppercase;
  `),
  n2: fullyResponsive(css`
    font-family: 'Tusker Grotesk';
    font-style: normal;
    font-weight: 700;
    font-size: 96px;
    line-height: 90%;
    letter-spacing: 0.03em;
  `),
  n3: fullyResponsive(css`
    font-family: 'Tusker Grotesk';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 110%;
  `),
  n4: fullyResponsive(css`
    font-family: 'Tusker Grotesk';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 110%;
    letter-spacing: 0.01em;
  `),
  d1: fullyResponsive(css`
    font-family: 'Ogg TRIAL';
    font-style: italic;
    font-weight: 400;
    font-size: 160px;
    line-height: 110%;
    letter-spacing: -0.04em;
  `),
  d2: fullyResponsive(css`
    font-family: 'Ogg TRIAL';
    font-style: italic;
    font-weight: 400;
    font-size: 120px;
    line-height: 110%;
    letter-spacing: -0.04em;
  `),
  d3: fullyResponsive(css`
    font-family: 'Ogg TRIAL';
    font-style: italic;
    font-weight: 400;
    font-size: 60px;
    line-height: 100%;
    letter-spacing: -0.05em;
  `),
  d4: fullyResponsive(css`
    font-family: 'Ogg TRIAL';
    font-style: italic;
    font-weight: 400;
    font-size: 45px;
    line-height: 100%;
    letter-spacing: -0.05em;
  `),
  d5: fullyResponsive(css`
    font-family: 'Ogg TRIAL';
    font-style: italic;
    font-weight: 400;
    font-size: 30px;
    line-height: 100%;
    letter-spacing: -0.03em;
  `),
}

export default text
