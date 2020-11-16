import React, { useEffect, useState } from 'react'
import { Router, useLocation } from '@reach/router'
import Article from './article'
import List from './list'

// eslint-disable-next-line react/prop-types
const Portfolio = ({ header, content }) => {
  const location = useLocation()
  const [pageHeader, setPageHeader] = useState('')
  const [projects, setProjects] = useState([])

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Eduardo Schmidt | Projects'
  }, [location])

  useEffect(() => {
    header.load().then((h) => {
      setPageHeader(() => h)
    })
    content.map((el) =>
      el.load().then((c) => {
        setProjects((ps) => [...ps, c])
      })
    )
  }, [content])
  return (
    <Router>
      <List path="/" header={pageHeader} articles={projects} />
      {projects.map((el) => (
        <Article key={el.metadata.slug} path={el.metadata.slug} markdown={el.markdown} />
      ))}
    </Router>
  )
}

export default Portfolio
