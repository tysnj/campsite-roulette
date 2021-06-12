import React, { useState, useEffect } from 'react';
import Error from './ErrorDisplay';

const Home = () => {
  const [stories, setStories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getStories()
      .then(data => setStories(...stories, sortStories(data.hits)))
      .catch(error => setError(error.message))
  }, [stories]);

  const getStories = async () => {
    const subjects = ['JavaScript', 'Vue', 'Angular', 'React', 'HTML', 'CSS']
    return subjects.map(subject => {
      return fetch(`http://hn.algolia.com/api/v1/search_by_date?query=${subject}&tags=(story)`)
        .then(response => {
          if (response.ok) {
            return response.json()
          } else {
            throw new Error(response)
          }
        })  
    })
    };

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
