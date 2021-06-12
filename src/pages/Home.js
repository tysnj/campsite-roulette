import React, { useState, useEffect, useRef } from 'react';
import Error from './ErrorDisplay';
import { getStories, cleanData } from '../utilities';

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
    // requestURL + subject + attributes
    let requestURL = 'http://hn.algolia.com/api/v1/search_by_date?query='
    let attributes = '&tags=(story)&hitsPerPage=10'
    const subjects = ['JavaScript', 'Vue.js', 'AngularJS', 'React', 'CSS']
    return await Promise.all(
      subjects.map(subject => getStories(requestURL + subject + attributes))
    )
  };

  return (
    <>
     Home
     {error && <Error error={error}/>}
    </>
  )
}

export default Home
