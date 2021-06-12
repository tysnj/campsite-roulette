import React, { useState, useEffect } from 'react';
import Error from './ErrorDisplay';

const Home = () => {
  const [stories, setStories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
     getAllStories()
      .then(data => setStories(...stories, sortStories(data)))
      .catch(error => setError(error.message))
  }, [stories]);


  const getAllStories = async () => {
    // requestURL + subject + attributes
    let requestURL = 'http://hn.algolia.com/api/v1/search_by_date?query='
    let attributes = '&tags=(story)'
    const subjects = ['JavaScript', 'Vue', 'Angular', 'React', 'HTML', 'CSS']
    return await Promise.all(
      subjects.map(subject => getStories(requestURL + subject + attributes))
    )
  };

  const getStories = async (url) => {
    return await fetch(url).then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error(response.message)
      }
    })
  }


  const sortStories = (stories) => {
    let story = stories
    console.log(story)
    return story
  }

  return (
    <>
     Home
     {error && <Error error={error}/>}
    </>
  )
}

export default Home
