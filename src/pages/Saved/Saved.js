import React, { useState, useEffect, useRef } from 'react'
import { getSpecificStories, cleanData } from '../../utilities';
import Error from '../ErrorDisplay';
import PlaceHolder from '../PlaceHolder';
import { Article } from '../../components'
import { SavedContainer, InfoWrap } from './Saved.elements'

const Saved = (props) => {
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
    <SavedContainer>
      {!savedStories.length && !error && <PlaceHolder/>}
      {!savedStories.length && error && <Error error={error}/>}
      {!error && savedStories.length &&
        <InfoWrap>
          {savedStories.map((story, i) => 
            <Article
              info={story}
              key={i}
              id={story.created_at_i}
              onClick={(e) => handleClick(e)}
            />
          )}
        </InfoWrap>
      }
    </SavedContainer>
  )
}

export default Saved
