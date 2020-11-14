import React from 'react'
import styled from 'styled-components'

import Text from '_components/text'
import Separator from '_components/separator'
import Box from '_components/box'
import List from '_components/list'

const ReactMarkdownWithHtml = require('react-markdown/with-html')

const Container = styled(Box)`
  flex-direction: column;
  * {
    display: flex;
  }
`

const StyledHeading = styled(Text).attrs(() => ({
  textStyle: 'title',
}))`
  font-size: ${(props) => 46 - 8 * props.level}px;
  margin-bottom: ${(props) => (props.level === 1 ? 24 : 16)}px;
  margin-top: ${(props) => (props.level === 1 ? 24 : 16)}px;
  letter-spacing: 2px;
`

const StyledParagraph = styled(Text).attrs({
  textStyle: 'body',
})`
  display: inline;
`

const StyledStrong = styled(StyledParagraph)`
  font-weight: bold;
`

const StyledSeparator = styled(Separator).attrs({
  bg: 'border1',
})`
  font-weight: bold;
`

const StyledImage = styled.img`
  max-width: 100%;
  margin: 48px auto;
  margin-bottom: 64px;
`

// eslint-disable-next-line react/prop-types
const StyledListItem = ({ children, ...props }) => (
  <li>
    <StyledParagraph my={1} {...props}>
      {'•  '}
      {children}
    </StyledParagraph>
  </li>
)

const StyledList = styled(List)`
  margin: 0px 24px;
  flex-direction: column;
`

const config = {
  renderers: {
    root: Container,
    paragraph: StyledParagraph,
    strong: StyledStrong,
    heading: StyledHeading,
    thematicBreak: StyledSeparator,
    image: StyledImage,
    listItem: StyledListItem,
    list: StyledList,
  },
}

const Markdown = ({ ...props }) => (
  <ReactMarkdownWithHtml renderers={config.renderers} allowDangerousHtml {...props} />
)

export default Markdown
