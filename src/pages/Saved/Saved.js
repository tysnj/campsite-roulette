import React, { useState, useEffect, useRef } from 'react'
import { getSpecificStories, cleanData } from '../../utilities';

function Saved(props) {
  const [savedStories, setSavedStories] = useState([]);
  const [error, setError] = useState(null);
  const getSavedStories = useRef(() => {});

  useEffect(() => {
    getSavedStories.current()
     .then(data => setSavedStories(cleanData(data)))
     .catch(error => setError(error.message))
  }, []);

  const handleClick = (e) => {
    props.setSavedStories(...props.saved, e.target.id)
  }

  getSavedStories.current = async () => {
    let requestURL = 'http://hn.algolia.com/api/v1/search_by_date?numericFilters=created_at_i='
    return await Promise.all(
      props.saved.map(id => getSpecificStories(requestURL + id))
    )
  };
  return (
    <>
      Saved
    </>
  )
}

export default Saved
