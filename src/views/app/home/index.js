import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Box from '_components/box'
import Text from '_components/text'
import Avatar from '_components/avatar'
import Icon from '_components/icon'

import { icons, photos } from '_assets'
import { useLocation } from '@reach/router'
import Markdown from '_components/markdown'

const Container = styled(Box)`
  flex-direction: column;
  align-items: center;

  // Laptops and above
  @media (min-width: 1280px) {
    padding-top: 120px;
  }
`

const StyledMarkdown = styled(Markdown)`
  * {
    text-align: center;
    line-height: 32px;
    margin-bottom: 16px;
  }
`

const SocialContainer = styled(Box)`
  :hover {
    transform: scale(1.2);
  }
`

// eslint-disable-next-line react/prop-types
const Social = ({ url, icon, color, ...props }) => (
  <SocialContainer {...props}>
    <a href={url}>
      <Icon icon={icon} size={'24px'} fill={color} />
    </a>
  </SocialContainer>
)

const Home = ({ content }) => {
  const location = useLocation()
  const [profile, setProfile] = useState({ social: {} })

  useEffect(() => {
    content.load().then((c) => {
      setProfile(c.metadata)
    })
  }, [content])

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Eduardo Schmidt | Home'
  }, [location])

  return (
    <Container>
      <Avatar src={photos.Profile} name="Eduardo Schmidt" size="128px" mb={4} />
      <Text textStyle="title" mb={3}>
        {profile.title}
      </Text>
      <StyledMarkdown mb={3}>{profile.subtitle}</StyledMarkdown>
      <Box>
        {profile.social.email && (
          <Social url={profile.social.email} icon={<icons.Email />} m={2} color="foreground1" />
        )}
        {profile.social.github && (
          <Social url={profile.social.github} icon={<icons.GitHub />} m={2} color="foreground1" />
        )}
        {profile.social.linkedin && (
          <Social
            url={profile.social.linkedin}
            icon={<icons.LinkedIn />}
            m={2}
            color="foreground1"
          />
        )}
        {profile.social.stackoverflow && (
          <Social
            url={profile.social.stackoverflow}
            icon={<icons.StackOverflow />}
            m={2}
            color="foreground1"
          />
        )}
        {profile.social.scholar && (
          <Social url={profile.social.scholar} icon={<icons.Scholar />} m={2} color="foreground1" />
        )}
      </Box>
    </Container>
  )
}

Home.propTypes = {
  content: PropTypes.shape({
    metadata: PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      social: PropTypes.shape({
        github: PropTypes.string,
        linkedin: PropTypes.string,
        stackoverflow: PropTypes.string,
        scholar: PropTypes.string,
      }),
    }),
  }),
}

Home.defaultProps = {
  content: {
    metadata: {
      title: 'Welcome!',
      subtitle: '',
      social: {
        github: '',
        linkedin: '',
        stackoverflow: '',
        scholar: '',
      },
    },
  },
}

export default Home
