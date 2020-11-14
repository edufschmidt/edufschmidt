import styled from 'styled-components'
import { grid, space, color, layout, flexbox, border, shadow, borderStyle } from 'styled-system'

const Box = styled.div`
  box-sizing: border-box;
  ${grid}
  ${space}
  ${color}
  ${layout}
  ${flexbox}
  ${border}
  ${borderStyle}
  ${shadow}
`

Box.defaultProps = {
  height: 'auto',
  display: 'flex',
}

export default Box
