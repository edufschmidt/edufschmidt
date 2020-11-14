import React, { useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Markdown from '_components/markdown'
import Box from '_components/box'
import { useLocation } from '@reach/router'

const Container = styled(Box)`
  flex-direction: column;
  padding-top: 72px;
`

const Article = ({ markdown, ...props }) => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return (
    <Container>
      <Markdown {...props}>{markdown}</Markdown>
    </Container>
  )
}

Article.propTypes = {
  markdown: PropTypes.string,
}

Article.defaultProps = {
  markdown: '',
}

export default Article
