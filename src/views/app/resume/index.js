import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useLocation } from '@reach/router'

import Markdown from '_components/markdown'
import Box from '_components/box'

const Container = styled(Box)`
  flex-direction: column;
  padding-top: 72px;
  padding-bottom: 120px;
`

// eslint-disable-next-line react/prop-types
const Resume = ({ content }) => {
  const location = useLocation()
  const [markdown, setMarkdown] = useState({ markdown: '', metadata: {} })

  useEffect(() => {
    content.load().then((c) => {
      setMarkdown(c)
    })
  }, [content])

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Eduardo Schmidt | CV'
  }, [location])

  return (
    <Container>
      <Markdown>{markdown.markdown}</Markdown>
    </Container>
  )
}

export default Resume
