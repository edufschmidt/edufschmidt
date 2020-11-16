import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { ModalProvider, BaseModalBackground } from 'styled-react-modal'
import { Router } from '@reach/router'

import App from '_views/app'
import { ThemeToggleProvider } from '_utils/theme-toggle'

import * as serviceWorker from './serviceWorker'
import { GlobalStyles } from './styles'

const ModalBackground = styled(BaseModalBackground)`
  z-index: 999;
`

ReactDOM.render(
  <ThemeToggleProvider>
    <GlobalStyles />
    <ModalProvider backgroundComponent={ModalBackground}>
      <Router>
        <App path="/*" />
      </Router>
    </ModalProvider>
  </ThemeToggleProvider>,
  document.getElementById('root')
)

serviceWorker.unregister()
