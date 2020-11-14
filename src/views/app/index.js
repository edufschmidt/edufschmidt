import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { useThemeToggle } from '_utils/theme-toggle'
import * as yaml from 'js-yaml'

import Header from '_containers/header'
import Footer from '_containers/footer'
import NotFound from '_views/not-found'

import { Router } from '@reach/router'

import Home from './home'
import About from './about'
import Portfolio from './portfolio'
import Resume from './resume'

import { themes } from '../../styles'

const Dashboard = styled.div`
  display: grid;
  position: relative;

  height: 100%;
  min-height: 100vh;
  background: ${(props) => props.theme.colors.background1};

  grid-template: 72px 1fr 40px / auto;
  grid-template-areas:
    'header'
    'body'
    'footer';

  // Laptops and above
  @media (min-width: 1280px) {
    grid-template: 72px 1fr 36px / auto;
    grid-gap: 2px;
    grid-template-areas:
      'header'
      'body'
      'footer';
  }
`

const Content = styled(Router).attrs({ primary: false })`
  grid-area: body;

  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;

  padding-top: 44px;
  padding-bottom: 32px;

  max-width: 680px;
  width: 100%;
`

const loadContent = () => {
  const r = require.context('_content', true, /\.md$/)
  return r.keys().map((k) => ({
    filename: k,
    path: r(k),
    load: async () =>
      fetch(r(k))
        .then((res) =>
          res.text().then((md) => ({
            metadata: yaml.safeLoadAll(md.split('---')[1])[0],
            markdown: md.replace(/ *---[^)]*--- */g, ''),
          }))
        )
        // eslint-disable-next-line no-console
        .catch((err) => console.error(err)),
  }))
}
const content = loadContent()
const home = content.find((el) => el.filename.includes('home'))
const about = content.find((el) => el.filename.includes('about'))
const resume = content.find((el) => el.filename.includes('resume'))
const projectsHeader = content.find((el) => el.filename.includes('projects'))
const projects = content.filter((el) => el.filename.includes('/projects/'))

const App = () => {
  const { theme } = useThemeToggle()
  return (
    <ThemeProvider theme={themes[theme]}>
      <Dashboard>
        <Header />
        <Content>
          <Home path="/" content={home} />
          <About path="/about" content={about} />
          <Portfolio path="/projects/*" header={projectsHeader} content={projects} />
          <Resume path="/resume" content={resume} />
          <NotFound default />
        </Content>
        <Footer gridArea="footer" />
      </Dashboard>
    </ThemeProvider>
  )
}

export default App
