import React from 'react'
import styled, { keyframes } from 'styled-components'
import { grid, space, color, shadow, border } from 'styled-system'

import Link from '_components/link'
import Box from '_components/box'

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
height: 72px;
display: flex;
position: fixed;
box-sizing: border-box;
align-items: center;
background: ${(props) => props.theme.colors.background1};
justify-content: space-between;
top: 0; right: 0; left: 0;
z-index: 99;

.nav-default {
  display: none;
}

// Laptops and above
@media (min-width: 1280px) {
    height: 72px;
    
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 20px;
    
    display: grid;
    
    grid-template-columns: 1fr auto 1fr auto 1fr;
    grid-template-areas: '. brand . nav .';

    align-items:center;

    .nav-mobile {
        display: none;
    }

    .nav-default {
        display: flex;
    }
}
  ${border}
  ${shadow}
  ${color}
  ${space}
  ${grid}

  z-index: 99;
`

export const MobileMenu = styled(Box)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: grid;
  grid-template: 72px 1fr auto / 1fr;

  padding: 0 0;

  background-color: ${(props) => props.theme.colors.background1};

  #close-btn {
    padding: 0;
    position: absolute;
    top: 16px;
    right: 16px;
  }

  a {
    text-align: center;
    margin-top: 16px;
    margin-bottom: 16px;
    margin-left: auto;
    margin-right: auto;
  }
`

export const NavItems = styled(Box)`
  align-items: center;
  > * + * {
    margin-left: 16px;
  }
`

export const Nav = styled(Link).attrs((props) => ({
  getProps: ({ isCurrent }) => ({
    style: { borderColor: isCurrent && props.theme.colors.accent1 },
  }),
}))`
  padding: 8px 4px;
  border-bottom: 2px solid transparent;
  color: ${(props) => props.theme.colors.foreground1};
  font-weight: 600 !important;
  font-size: 16px !important;
  @media (min-width: 1280px) {
    font-size: 16px !important;
  }
`

const Blink = keyframes`  
  0% {opacity: 0};
  50% {opacity: 1};
  100% {opacity: 0};
`

const BrandContainer = styled(Box)`
  position: relative;
  height: auto;

  display: flex;
  align-items: center;

  .mark {
    font-size: 20px;
    margin-right: 5px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.foreground1};
  }

  > .name {
    font-size: 20px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.foreground1};
  }

  .cursor {
    display: inline-block;
    width: 10px;
    height: 1rem;
    margin-left: 5px;
    border-radius: 1px;
    background: ${(props) => props.theme.colors.accent1};
    animation: 1.5s ease 0s infinite normal none running ${Blink};
  }
`

export const Brand = () => (
  <BrandContainer>
    <span className="mark">{'>'}</span>
    <span className="name">edufschmidt</span>
    <span className="cursor" />
  </BrandContainer>
)
