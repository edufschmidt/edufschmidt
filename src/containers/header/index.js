import React, { useState, useEffect } from 'react'
import Modal from 'styled-react-modal'
import { useLocation } from '@reach/router'

import { icons } from '_assets'
import Box from '_components/box'
import Link from '_components/link'
import Separator from '_components/separator'
import IconButton from '_components/icon-button'

import { useThemeToggle } from '_utils/theme-toggle'

import { Container, Brand, Nav, NavItems, MobileMenu } from './styled'

const Header = (props) => {
  const location = useLocation()
  const { toggleTheme } = useThemeToggle()
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

  const onHamburgerButtonClick = () => {
    setMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleThemeButtonClick = () => {
    toggleTheme()
  }

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location])

  return (
    <Container {...props}>
      <Box gridArea="brand">
        <Link to="/">
          <Brand />
        </Link>
      </Box>
      <NavItems gridArea="nav" className="nav-mobile">
        <IconButton
          color="foreground1"
          icon={<icons.Hamburger />}
          size="28px"
          onClick={onHamburgerButtonClick}
        />
      </NavItems>
      <NavItems gridArea="nav" className="nav-default">
        <Nav to="/">Home</Nav>
        <Nav to="/about">About</Nav>
        <Nav to="/projects">Projects</Nav>
        <Nav to="/cv">CV</Nav>
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
      <Modal
        isOpen={isMobileMenuOpen}
        onBackgroundClick={() => setMobileMenuOpen(false)}
        onEscapeKeydown={() => setMobileMenuOpen(false)}
      >
        <MobileMenu>
          <Box alignItems="center">
            <IconButton
              icon={<icons.Times />}
              size="40px"
              id="close-btn"
              height="max-content"
              onClick={() => setMobileMenuOpen(false)}
            />
          </Box>
          <Box flexDirection="column" mt={3}>
            <Nav to="/">Home</Nav>
            <Nav to="/about">About</Nav>
            <Nav to="/projects">Projects</Nav>
            <Nav to="/cv">CV</Nav>
          </Box>
        </MobileMenu>
      </Modal>
    </Container>
  )
}

Header.defaultProps = {
  padding: 3,
}

export default Header
