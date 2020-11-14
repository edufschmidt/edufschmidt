import React from 'react'

import { icons } from '_assets'

import Box from '_components/box'
import Link from '_components/link'
import Separator from '_components/separator'
import IconButton from '_components/icon-button'

import { useThemeToggle } from '_utils/theme-toggle'

import { Container, Brand, Nav, NavItems } from './styled'

const Header = (props) => {
  const { toggleTheme } = useThemeToggle()

  const handleThemeButtonClick = () => {
    toggleTheme()
  }

  return (
    <Container {...props}>
      <Box gridArea="brand">
        <Link to="/">
          <Brand />
        </Link>
      </Box>
      <NavItems gridArea="nav" className="nav-mobile" />
      <NavItems gridArea="nav" className="nav-default">
        <Nav to="/">Home</Nav>
        <Nav to="/about">About</Nav>
        <Nav to="/projects">Projects</Nav>
        <Nav to="/resume">Resume</Nav>
        <Box alignItems="center">
          <Separator vertical bg="border" height="30px" />
          <IconButton
            icon={<icons.Theme color={'foreground1'} />}
            mx={1}
            size="24px"
            onClick={handleThemeButtonClick}
          />
        </Box>
      </NavItems>
    </Container>
  )
}

Header.defaultProps = {
  padding: 3,
}

export default Header
