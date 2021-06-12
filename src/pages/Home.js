import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Error from './ErrorDisplay';
import PlaceHolder from './PlaceHolder';
import { getStories, cleanData } from '../utilities';
import './pages.css'

const HomeContainer = styled.main`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  margin: 0 2em;
`;

const Home = () => {
  const [stories, setStories] = useState([]);
  const [error, setError] = useState(null);
  const getAllStories = useRef(() => {});

  useEffect(() => {
     getAllStories.current()
      .then(data => setStories(cleanData(data)))
      .catch(error => setError(error.message))
  }, []);


  getAllStories.current = async () => {
    let requestURL = 'http://hn.algolia.com/api/v1/search_by_date?query='
    let attributes = '&tags=(story)&hitsPerPage=10'
    const subjects = ['JavaScript', 'Vue.js', 'AngularJS', 'React', 'CSS']
    return await Promise.all(
      subjects.map(subject => getStories(requestURL + subject + attributes))
    )
  };

  return (
    <HomeContainer>
      {
        !stories.length && 
        !error && 
        <PlaceHolder/>
      }
      {
        !stories.length && 
        error && 
        <Error error={error}/>
      }


    </HomeContainer>
  )
}

export default Home
