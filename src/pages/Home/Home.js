import React, { useState, useEffect, useRef } from 'react';
import Error from '../ErrorDisplay';
import PlaceHolder from '../PlaceHolder';
import { Article } from '../../components'
import { getCurrentStories, cleanData } from '../../utilities';
import '../pages.css'
import { HomeContainer, InfoWrap } from './Home.elements'

const Home = (props) => {
  const [currentStories, setCurrentStories] = useState([]);
  const [error, setError] = useState(null);
  const getHomeStories = useRef(() => {});

  useEffect(() => {
     getHomeStories.current()
      .then(data => setCurrentStories(cleanData(data)))
      .catch(error => setError(error.message))
  }, []);

  const updateSaved = (e) => {
    props.setSaved(...props.saved, e.target.id)
  }

  const updateRead = (e) => {
    props.setRead(...props.read, e.target.id)
  }  

  const updateOpened = (e) => {
    props.setOpened(...props.opened, e.target.id)
  }

  const getStoryState = (id) => {
    let status = []
    if (props.saved && props.saved.includes(id)) {
      status.push('saved');
    }
    if (props.read && props.read.includes(id)) {
      status.push('read');
    }
    if (props.opened && props.opened.includes(id)) {
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
