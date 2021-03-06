import styled from 'styled-components'

import { buttonStyle, shadow, layout, typography, border, space } from 'styled-system'

const Button = styled.button`
  height: 48px;
  border-radius: 24px;
  
  font-family: 'Lato';
  font-weight: bold;
  letter-spacing: 0.08em;
  border: none;

  &:hover {
    filter: brightness(90%);
    transition: all 0.7s ease;
  }
  ${buttonStyle}
  ${typography}
  ${shadow}
  ${layout}
  ${space}
  ${border}
`

Button.defaultProps = {
  variant: 'primary',
  boxShadow: 'light',
  height: '48px',
}

export default Button
