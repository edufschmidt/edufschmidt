/* eslint-disable react/default-props-match-prop-types */
import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { layout, size, margin } from 'styled-system'

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  box-shadow: none;
  background: none;
  box-sizing: content-box;
  padding: 8px;
  border-radius: 50%;
  outline: none;

  flex-shrink: 0;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  
  svg {
    width: 100%;
    height: auto;
    ${(props) =>
      props.color &&
      css`
        fill: ${props.theme.colors[props.color]};
      `}  
  }

  &:hover {
    background: ${(props) => props.theme.colors.neutralLighter};
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  }

  ${layout}
  ${margin}
  ${size}
`

const IconButton = ({ icon, ...props }) => <StyledButton {...props}>{icon}</StyledButton>

IconButton.propTypes = {
  icon: PropTypes.node,
  size: PropTypes.string,
  color: PropTypes.string,
}

IconButton.defaultProps = {
  icon: undefined,
  color: 'foreground1',
  size: '24px',
}

export default IconButton
