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

  const handleClick = (e) => {
    props.setSaved(...props.saved, e.target.id)
  }

  getHomeStories.current = async () => {
    let requestURL = 'http://hn.algolia.com/api/v1/search_by_date?query='
    let attributes = '&tags=story'
    const subjects = ['JavaScript', 'Vue', 'Angular', 'React', 'CSS', 'HTML', 'Sass']
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
              onClick={(e) => handleClick(e)}
            />
          )}
        </InfoWrap>
      }
    </HomeContainer>
  )
}

export default Home
