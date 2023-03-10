import { css } from 'styled-components'
import { fresponsive } from 'utils/fullyResponsive'

const text = {
  h1: fresponsive(css`
    font-family: 'Humane';
    font-style: normal;
    font-weight: 700;
    font-size: 440px;
    line-height: 80%;
  `),
  h2: fresponsive(css`
    font-family: 'Humane';
    font-style: normal;
    font-weight: 700;
    font-size: 300px;
    line-height: 80%;
  `),
  h3: fresponsive(css`
    font-family: 'Humane';
    font-style: normal;
    font-weight: 700;
    font-size: 215px;
    line-height: 80%;
  `),
  h4: fresponsive(css`
    font-family: 'Humane';
    font-style: normal;
    font-weight: 700;
    font-size: 150px;
    line-height: 80%;
  `),
  h5: fresponsive(css`
    font-family: 'Humane';
    font-style: normal;
    font-weight: 700;
    font-size: 64px;
    line-height: 80%;
  `),
  s1: fresponsive(css`
    font-family: 'Space Mono';
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 100%;
    letter-spacing: -0.05em;
    text-transform: uppercase;
  `),
  s2: fresponsive(css`
    font-family: 'Space Mono';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 100%;
    letter-spacing: -0.05em;
    text-transform: uppercase;
  `)
}

export default text