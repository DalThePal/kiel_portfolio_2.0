import React from 'react'
import styled, { css } from 'styled-components'
import { fresponsive } from 'utils/fullyResponsive'
import colors from 'styles/colors'
import text from 'styles/text'
import { GatsbyImage } from 'gatsby-plugin-image'

const VideoSection = ({ title1, text1, video, title2, text2, image1, image2, image3, image4 }) => {
  return (
    <Wrapper>
      <Content>
        <Title>{title1}</Title>
        <Text>{text1}</Text>
      </Content>
      <Video muted autoPlay loop controls={false} playsInline>
        <source src={video} type="video/webm"/>
      </Video>
      <Content2>
        <Title>{title2}</Title>
        <Text>{text2}</Text>
      </Content2>
      <Image1 image={image1.childImageSharp.gatsbyImageData}/>
      <Image2 image={image2.childImageSharp.gatsbyImageData}/>
      <Image3 image={image3.childImageSharp.gatsbyImageData}/>
      <Image4 image={image4.childImageSharp.gatsbyImageData}/>
    </Wrapper>
  )
}

export default VideoSection

const Wrapper = styled.section`
  position: relative;
  z-index: 2;
  background-color: ${colors.tan};

  ${fresponsive(css`
    height: 3953px;
  `)}
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;

  ${fresponsive(css`
    gap: 24px;
    top: 217px;
    left: 318px;
  `)}
`

const Title = styled.h2`
  color: ${colors.black};
  ${text.h4}

  ${fresponsive(css`
    width: 650px;
  `)}
`

const Text = styled.p`
  color: ${colors.black};
  ${text.bodyM}

  ${fresponsive(css`
    width: 633px;
  `)}
`

const Video = styled.video`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  ${fresponsive(css`
    top: 842px;
    width: 1285px;
    height: 722px;
  `)}
`

const Content2 = styled(Content)`
  ${fresponsive(css`
    top: 1858px;
    left: 535px;
  `)}
`

const Image1 = styled(GatsbyImage)`
  position: absolute !important;

  ${fresponsive(css`
    width: 552px;
    height: 525px;
    top: 2433px;
    right: 99px;
  `)}
`

const Image2 = styled(GatsbyImage)`
  position: absolute !important;

  ${fresponsive(css`
    width: 631px;
    height: 472px;
    left: 319px;
    top: 2730px;
  `)}
`

const Image3 = styled(GatsbyImage)`
  position: absolute !important;

  ${fresponsive(css`
    width: 627px;
    height: 785px;
    top: 3371px;
    right: 323px;
  `)}
`

const Image4 = styled(GatsbyImage)`
  position: absolute !important;

  ${fresponsive(css`
    width: 629px;
    height: 640px;
    left: 100px;
    top: 3773px;
  `)}
`