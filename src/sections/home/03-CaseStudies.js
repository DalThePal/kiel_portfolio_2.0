import React from 'react'
import styled, { css } from 'styled-components'
import { fresponsive } from 'utils/fullyResponsive'
import colors from 'styles/colors'
import text from 'styles/text'
import { navigate } from 'gatsby'

const CaseStudies = () => {
  return (
    <Wrapper>
      <CaseStudy1 onClick={() => navigate('/case-studies/antisocial-agency')}>
        <Title>AntiSocial Agency</Title>
        <Content>
          <Label><span>Year: </span><span>2023</span></Label>
          <Label><span>My&nbsp;Role: </span><span>Creative&nbsp;Direction, UX, UI</span></Label>
        </Content>
      </CaseStudy1>
      <CaseStudy2 onClick={() => navigate('/case-studies/adobe-consonant')}>
        <Title>Adobe Consonant</Title>
        <Content>
          <Label><span>Year: </span><span>2023</span></Label>
          <Label><span>My&nbsp;Role: </span><span>Creative&nbsp;Direction, Branding</span></Label>
        </Content>
      </CaseStudy2>
      <CaseStudy3 onClick={() => navigate('/case-studies/jasper-ai')}>
        <Title>Jasper AI</Title>
        <Content>
          <Label><span>Year: </span><span>2023</span></Label>
          <Label><span>My&nbsp;Role: </span><span>Creative&nbsp;Direction, UX, UI</span></Label>
        </Content>
      </CaseStudy3>
      <CaseStudy4 onClick={() => navigate('/case-studies/dallen-hoyal')}>
        <Title>Dallen Hoyal</Title>
        <Content>
          <Label><span>Year: </span><span>2023</span></Label>
          <Label><span>My&nbsp;Role: </span><span>Creative&nbsp;Direction, UX, UI</span></Label>
        </Content>
      </CaseStudy4>
      <CaseStudy5 onClick={() => navigate('/case-studies/lemond-cycles')}>
        <Title>Lemond Cycles</Title>
        <Content>
          <Label><span>Year: </span><span>2020</span></Label>
          <Label><span>My&nbsp;Role: </span><span>Creative&nbsp;Direction, Branding</span></Label>
        </Content>
      </CaseStudy5>
      <CaseStudy6 onClick={() => navigate('/case-studies/source-7')}>
        <Title>Source 7</Title>
        <Content>
          <Label><span>Year: </span><span>2020</span></Label>
          <Label><span>My&nbsp;Role: </span><span>Creative&nbsp;Direction, Branding, UX, UI</span></Label>
        </Content>
      </CaseStudy6>
    </Wrapper>
  )
}

export default CaseStudies

const Wrapper = styled.section`
  position: relative;
  z-index: 2;
  background-color: ${colors.black};
  width: 100%;

  ${fresponsive(css`
    height: 2030px;
  `)}
`

const CaseStudy = styled.div`
  display: flex;
  align-items: center;
  position: absolute;

  ${fresponsive(css`
    gap: 22px;
  `)}
`

const Title = styled.span`
  ${text.h3}
  color: ${colors.tan};
  text-transform: uppercase;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${fresponsive(css`
    gap: 6px;
    width: 256px;
  `)}
`

const Label = styled.span`
  ${text.s2}
  color: ${colors.tan};
  font-weight: 400;
  text-transform: uppercase;
  display: flex;
  flex-wrap: wrap;

  span:last-of-type {
    font-weight: 700;
  }

  ${fresponsive(css`
    gap: 6px;
  `)}
`

const CaseStudy1 = styled(CaseStudy)`
  ${fresponsive(css`
    left: 133px;
    top: 0;
  `)}
`

const CaseStudy2 = styled(CaseStudy)`
  ${fresponsive(css`
    right: 133px;
    top: 257px;
  `)}
`

const CaseStudy3 = styled(CaseStudy)`
  ${fresponsive(css`
    right: 698px;
    top: 515px;
  `)}
`

const CaseStudy4 = styled(CaseStudy)`
  ${fresponsive(css`
    left: 133px;
    top: 772px;
  `)}
`

const CaseStudy5 = styled(CaseStudy)`
  ${fresponsive(css`
    right: 486px;
    top: 1029px;
  `)}
`

const CaseStudy6 = styled(CaseStudy)`
  ${fresponsive(css`
    right: 278px;
    top: 1287px;
  `)}
`