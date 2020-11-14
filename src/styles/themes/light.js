const colors = {
  background1: '#fff',
  background2: '#fff',

  foreground1: '#000',
  foreground2: '#666',
  foreground3: '#999',

  accent1: 'rgb(0, 199, 139)',
  accent2: 'rgb(0, 199, 139)',

  border1: '#dcdcdc',
  border2: '#dcdcdc',
}

const textStyles = {
  title: {
    fontSize: 36,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    lineHeight: '40px',
    color: colors.foreground1,
  },
  subtitle: {
    fontSize: 24,
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    lineHeight: '38px',
    color: colors.foreground2,
  },
  body: {
    fontSize: 16,
    fontFamily: 'sans-serif',
    fontWeight: '400',
    lineHeight: '24px',
    color: colors.foreground2,
  },
}

const shadows = {
  light: '1px 2px 4px 0 rgba(0, 0, 0, 0.05)',
  medium: '0px 2px 8px rgba(0, 0, 0, 0.1);',
  heavy: '1px 2px 4px 0 rgba(0, 0, 0, 0.2)',
  primary: '0 4px 9px rgba(0, 161, 255, 0.33)',
}

const borders = {
  thin: `1px solid ${colors.border}`,
  medium: `2px solid ${colors.border}`,
  thick: `3px solid ${colors.border}`,
}

const breakpoints = ['200px', '52em', '64em']

const mediaQueries = {
  small: `@media screen and (min-width: ${breakpoints[0]})`,
  medium: `@media screen and (min-width: ${breakpoints[1]})`,
  large: `@media screen and (min-width: ${breakpoints[2]})`,
}

export default {
  colors,
  shadows,
  borders,
  textStyles,
  fontSizes: [10, 12, 14, 16, 20, 24, 32, 48, 64, 72],
  sizes: [0.5, 1, 2, 4, 8, 16, 32, 48, 64, 72, 96, 128],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  buttons: {
    primary: { background: colors.primary, color: colors.white },
    secondary: { background: colors.secondary, color: colors.white },
    neutral: { background: colors.neutralLighter, color: colors.neutralDarker },
    warning: { background: colors.warning, color: colors.white },
    danger: { background: colors.danger, color: colors.white },
  },
  colorStyles: {},
  breakpoints,
  mediaQueries,
}
