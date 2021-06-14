import React, { useState, useEffect, useRef } from 'react';
import Error from '../ErrorDisplay';
import PlaceHolder from '../PlaceHolder';
import { Article } from '../../components'
import { getCurrentStories, cleanHomeData } from '../../utilities';
import '../pages.css'
import { HomeContainer, InfoWrap } from './Home.elements'

const Home = (props) => {
  const [currentStories, setCurrentStories] = useState([]);
  const [error, setError] = useState(null);
  const getHomeStories = useRef(() => {});

  useEffect(() => {
     getHomeStories.current()
      .then(data => setCurrentStories(cleanHomeData(data)))
      .catch(error => setError(error.message))
  }, []);

  const updateSaved = (id, tag) => {
    console.log('imma take one')
    if (props.saved.findIndex(story => story.id === id) === -1) {
      props.setSavedStories([...props.saved, {id: id, tag: tag}])
    } else {
      props.setSavedStories(props.saved.filter(story => story.id !== id))
    }
  }

  const updateRead = (id) => {
    if (!props.read.includes(id)) {
      props.setReadStories([...props.read, id])
    } else {
      props.setReadStories(props.read.filter(story => story !== id))
    }  }  

  const updateOpened = (id) => {
    if (!props.opened.includes(id)) {
      props.setOpenedStories([...props.opened, id])
    } else {
      props.setOpenedStories(props.opened.filter(story => story !== id))
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
  

  getHomeStories.current = async () => {
    let requestURL = 'http://hn.algolia.com/api/v1/search_by_date?query='
    let attributes = '&tags=story'
    const subjects = ['JavaScript', 'Vue.js', 'AngularJS', 'React', 'CSS3', 'HTML5', 'Sass']
    return await Promise.all(
      subjects.map(subject => getCurrentStories(requestURL + subject + attributes))
    )
  };

  return (
    <HomeContainer>
      {!currentStories.length && !error && <PlaceHolder/>}
      {!currentStories.length && error && <Error error={error}/>}
      {!error && currentStories.length &&
        <InfoWrap>
          {currentStories.map((story, i) => 
            <Article
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

export default Home
