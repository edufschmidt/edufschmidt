import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import * as readingTime from 'reading-time'

import Box from '_components/box'
import Text from '_components/text'
import Link from '_components/link'
import Markdown from '_components/markdown'
import Separator from '_components/separator'

const Container = styled(Box)`
  display: grid;
  grid-gap: 48px;
  padding-top: 72px;
  padding-bottom: 100px;
`

const ArticleCard = styled(Box)`
  height: 96px;
  align-items: center;

  .title {
    font-size: 24px;
  }
  .synopsis {
    line-height: 24px;
  }
  .date {
    font-size: 12px;
    opacity: 0.8;
  }
`
const ArticleList = ({ header, articles }) => (
  <Container>
    <Markdown>{header.markdown}</Markdown>
    {articles.map((el) => (
      <>
        <ArticleCard key={el.metadata.title}>
          <Box flexDirection="column">
            <Link to={el.metadata.slug}>
              <Text mb={1} className="title" textStyle="title">
                {el.metadata.title}
              </Text>
              <Text mb={2} className="synopsis" textStyle="body">
                {el.metadata.synopsis}
              </Text>
            </Link>
            <Text className="date" textStyle="body">
              {el.metadata.date} · {readingTime(el.markdown).text}
            </Text>
          </Box>
        </ArticleCard>
        <Separator bg="border1" />
      </>
    ))}
  </Container>
)

ArticleList.propTypes = {
  header: PropTypes.string,
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      metadata: PropTypes.shape({
        title: PropTypes.string,
        synopsis: PropTypes.string,
        date: PropTypes.string,
        slug: PropTypes.string,
      }),
      markdown: PropTypes.string,
    })
  ),
}

ArticleList.defaultProps = {
  articles: [],
  header: '',
}

export default ArticleList
