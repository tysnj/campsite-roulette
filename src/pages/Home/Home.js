import React, { useState, useEffect, useRef } from 'react';
import Error from '../ErrorDisplay';
import PlaceHolder from '../PlaceHolder';
import { Article } from '../../components'
import { getStories, cleanData } from '../../utilities';
import '../pages.css'
import { HomeContainer, InfoWrap } from './Home.elements'

const Home = (props) => {
  const [currentStories, setCurrentStories] = useState([]);
  const [error, setError] = useState(null);
  const getAllStories = useRef(() => {});

  useEffect(() => {
     getAllStories.current()
      .then(data => setStories(cleanData(data)))
      .catch(error => setError(error.message))
  }, []);

  const handleClick = (e) => {
    props.setSaved(...props.saved, e.target.id)
  }

  getAllStories.current = async () => {
    let requestURL = 'http://hn.algolia.com/api/v1/search_by_date?query='
    let attributes = '&tags=story'
    const subjects = ['JavaScript', 'Vue', 'Angular', 'React', 'CSS', 'HTML', 'Sass']
    return await Promise.all(
      subjects.map(subject => getStories(requestURL + subject + attributes))
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
