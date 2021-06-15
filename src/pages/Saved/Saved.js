import React, { useState, useEffect, useRef } from 'react'
import { getSpecificStories, cleanFilteredData } from '../../utilities';
import Error from '../ErrorDisplay';
import PlaceHolder from '../PlaceHolder';
import { Article } from '../../components'
import '../pages.css'
import { SavedContainer, InfoWrap } from './Saved.elements'

const Saved = (props) => {
  const [savedStories, setSavedStories] = useState([]);
  const [error, setError] = useState(null);
  const getSavedStories = useRef(() => {});

  useEffect(() => {
    if (props.saved.length) {
      getSavedStories.current()
       .then(data => setSavedStories(cleanFilteredData(data)))
       .catch(error => setError(`Something's gone wrong. Please try again`))
    }
  }, []);

  getSavedStories.current = async () => {
    let requestURL = 'http://hn.algolia.com/api/v1/search_by_date?query='
    let attributes = '&numericFilters=created_at_i='
    return await Promise.all(
      props.saved.map(story => getSpecificStories(requestURL + story.tag + attributes + story.id))
    )
  };

  const updateSaved = (id, tag, status) => {
    if (props.saved.findIndex(story => story.id === id) === -1) {
      props.setSavedStories([...props.saved, {id: id, tag: tag}])
    } else if (props.saved.findIndex(story => story.id === id) !== -1 && !status) {
      props.setSavedStories([...props.saved])
    } else {
      props.setSavedStories(props.saved.filter(story => story.id !== id))
    }
  }

  const updateRead = (id) => {
    if (!props.read.includes(id)) {
      props.setReadStories([...props.read, id])
    } else {
      props.setReadStories(props.read.filter(story => story !== id))
    }  }  

  const updateOpened = (id) => {
    if (!props.opened.includes(id)) {
      props.setOpenedStories([...props.opened, id])
    } else {
      props.setOpenedStories(props.opened.filter(story => story !== id))
    }  
  }

  const getStoryState = (id) => {
    let status = []
    if (props.saved === undefined) {
      return
    }
    if (props.saved.findIndex(story => story.id === id) !== -1) {
      status.push('saved');
    }
     if (props.read.findIndex(story => story.id === id) !== -1) {
       status.push('read');
     }
     if (props.opened.findIndex(story => story.id === id) !== -1) {
       status.push('opened');
     }
    return status;
  }
  
  return (
    <SavedContainer>
      {!props.saved.length && !error && <h1>No saved stories!</h1>}
      {!!props.saved.length && !savedStories.length && !error && <PlaceHolder/>}
      {!props.saved.length && !savedStories.length && error && <Error error={error}/>}
      {!!props.saved.length && !error && savedStories.length &&
        <InfoWrap>
          {savedStories.map((story, i) => 
            <Article
              info={story}
              key={i}
              id={story.created_at_i}
              status={getStoryState(story.created_at_i)}
              saveStory={updateSaved}
              readStory={updateRead}
              openStory={updateOpened}
            />
          )}
        </InfoWrap>
      }
    </SavedContainer>
  )
}

export default Saved
