import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useLocation } from '@reach/router'

import Text from '_components/text'
import Icon from '_components/icon'
import { illustrations } from '_assets/'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-column: span 12;
  padding-top: 96px;
`

const NotFound = () => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Eduardo Schmidt | Not Found'
  }, [location])

  return (
    <Container>
      <Icon icon={<illustrations.NotFound />} size="96px" fill="foreground2" />
      <Text mt={3} textStyle={'subtitle'}>
        404 Not found
      </Text>
    </Container>
  )
}

export default NotFound
