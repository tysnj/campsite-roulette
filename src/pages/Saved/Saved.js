import React from 'react'
import { getSaved, cleanData } from '../../utilities';

function Saved(props) {
  useEffect(() => {
    getSavedStories.current()
     .then(data => setStories(cleanData(data)))
     .catch(error => setError(error.message))
  }, []);

  const handleClick = (e) => {
    props.setSaved(...props.saved, e.target.id)
  }
  
  getSavedStories.current = async () => {
    let requestURL = 'http://hn.algolia.com/api/v1/search_by_date?numericFilters=created_at_i='
    return await Promise.all(
      props.saved.map(subject => getSaved(requestURL + subject + attributes))
    )
  };
  return (
    <>
      Saved
    </>
  )
}

export default Saved
