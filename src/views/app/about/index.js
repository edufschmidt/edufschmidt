import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Markdown from '_components/markdown'
import Box from '_components/box'
import { useLocation } from '@reach/router'

const Container = styled(Box)`
  flex-direction: column;
  padding-top: 72px;
  padding-bottom: 120px;
`

// eslint-disable-next-line react/prop-types
const About = ({ content }) => {
  const location = useLocation()
  const [markdown, setMarkdown] = useState({ markdown: '', metadata: {} })

  useEffect(() => {
    content.load().then((c) => {
      setMarkdown(c)
    })
  }, [content])

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Eduardo Schmidt | About'
  }, [location])

  return (
    <Container>
      <Markdown>{markdown.markdown}</Markdown>
    </Container>
  )
}

export default About
