import React, { useState, useEffect, useRef } from 'react';
import Error from '../ErrorDisplay';
import PlaceHolder from '../PlaceHolder';
import { Article } from '../../components'
import { getCurrentStories, cleanHomeData } from '../../utilities';
import '../pages.css'
import { HomeContainer, InfoWrap } from './Home.elements'
import PropTypes from 'prop-types';

const Home = (props) => {
  const [currentStories, setCurrentStories] = useState([]);
  const [error, setError] = useState(null);
  const getHomeStories = useRef(() => {});

  useEffect(() => {
    getHomeStories.current()
      .then(data => { setCurrentStories(cleanHomeData(data))
      })
      .catch(error => console.log(error))
        // setError(`Something's gone wrong. Please try again`))
  }, []);

  getHomeStories.current = async () => {
    let requestURL = 'https://hn.algolia.com/api/v1/search_by_date?query='
    let attributes = '&tags=story'
    const subjects = ['JavaScript', 'Vue.js', 'AngularJS', 'React', 'CSS3', 'HTML5', 'Sass'] // maybe add dart/flutter later on
    return await Promise.all(
      subjects.map(subject => getCurrentStories(requestURL + subject + attributes))
    )
  };

  const updateSaved = (id, tag, status) => {
    if (props.saved.findIndex(story => story.id === id) === -1) {
      props.setSavedStories([...props.saved, {id: id, tag: tag}])
    } else if (props.saved.findIndex(story => story.id === id) !== -1 && !status) {
      props.setSavedStories([...props.saved])
    } else {
      props.setSavedStories(props.saved.filter(story => story.id !== id))
    }
  }

  const updateRead = (id, tag, status) => {
    if (props.read.findIndex(story => story.id === id) === -1) {
      props.setReadStories([...props.read, {id: id, tag: tag}])
    } else if (props.read.findIndex(story => story.id === id) !== -1 && !status) {
      props.setReadStories([...props.read])
    } else {
      props.setReadStories(props.read.filter(story => story.id !== id))
    }
  } 

  const updateOpened = (id, tag, status) => {
    if (props.opened.findIndex(story => story.id === id) === -1) {
      props.setOpenedStories([...props.opened, {id: id, tag: tag}])
    } else if (props.saved.findIndex(story => story.id === id) !== -1 && !status) {
      props.setOpenedStories([...props.opened])
    } else {
      props.setOpenedStories(props.opened.filter(story => story.id !== id))
    }
  }

  const getStoryState = (id) => {
    let status = []
    if (props.saved === undefined) {
      return
    }
    if (props.saved.findIndex(story => story.id === id) !== -1) {
      status.push('saved');
    }
     if (props.read.findIndex(story => story.id === id) !== -1) {
       status.push('read');
     }
     if (props.opened.findIndex(story => story.id === id) !== -1) {
       status.push('opened');
     }
    return status;
  }

  return (
    <HomeContainer>
      {!currentStories.length && !error && <PlaceHolder/>}
      {!currentStories.length && error && <Error error={error}/>}
      {!error && currentStories.length &&
        <InfoWrap>
          {currentStories.map((story, i) => 
            <Article
              cy={i}
              info={story}
              key={i}
              id={story.created_at_i}
              status={getStoryState(story.created_at_i)}
              saveStory={updateSaved}
              readStory={updateRead}
              openStory={updateOpened}
            />
          )}
        </InfoWrap>
      }
    </HomeContainer>
  )
}

Home.propTypes = {
  saved: PropTypes.arrayOf(PropTypes.shape({
    saved: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      tag: PropTypes.string
    })),
    setSavedStories: PropTypes.func,
    read: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      tag: PropTypes.string
    })),
    setReadStories: PropTypes.func,
    opened: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      tag: PropTypes.string
    })),
    setOpenedStories: PropTypes.func
  }))

}

export default Home
