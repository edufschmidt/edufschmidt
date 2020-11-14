import React from 'react'
import styled from 'styled-components'
import { grid, space, color } from 'styled-system'

import Link from '_components/link'
import Text from '_components/text'
import Box from '_components/box'

const Container = styled(Box)`
  display: flex;
  justify-content: center;

  height: 36px;

  align-items: center;
  * + * {
    margin-left: 12px;
  }
  ${space}
  ${grid}
`

const StyledLink = styled(Link)`
  font-family: Lato;
  font-size: 14px;
  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
  ${color}
`

StyledLink.defaultProps = {
  color: 'neutralDarker',
}

const Footer = (props) => (
  <Container {...props}>
    <Text color="foreground3">© 2020 - Eduardo Schmidt</Text>
  </Container>
)

Footer.defaultProps = {
  padding: 2,
}

export default Footer
