import React from 'react'
import ReactDOM from 'react-dom'

import App from '_views/app'
import { ThemeToggleProvider } from '_utils/theme-toggle'

import * as serviceWorker from './serviceWorker'
import { GlobalStyles } from './styles'

ReactDOM.render(
  <ThemeToggleProvider>
    <GlobalStyles />
    <App path="/*" />
  </ThemeToggleProvider>,
  document.getElementById('root')
)

serviceWorker.unregister()
