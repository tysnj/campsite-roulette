import React, { useState, useEffect } from 'react';

function Home() {
  const [stories, setStories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getStories()
      .then(data => setStories(sortStories(data.hits)))
      .catch(error => setError(error.message))
  }, []);

  const getStories = () => {
    return fetch('GET', 'http://hn.algolia.com/api/v1/search?query=JavaScript&tags=story')
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error(response)
        }
      })  
    };

  const sortStories = (stories) => {
    let story = stories[0]
    console.log(story)
    return story
  }

  return (
    <>
     Home 
    </>
  )
}

export default Home
