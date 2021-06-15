import React, { useState, useEffect, useRef } from 'react'
import { getSpecificStories, cleanFilteredData } from '../../utilities';
import Error from '../ErrorDisplay';
import PlaceHolder from '../PlaceHolder';
import { Article } from '../../components'
import '../pages.css'
import { ReadContainer, InfoWrap } from './Read.elements'

const Read = (props) => {
  const [readPageStories, setReadPageStories] = useState([]);
  const [error, setError] = useState(null);
  const getReadStories = useRef(() => {});

  useEffect(() => {
    if (props.read.length) {
      getReadStories.current()
       .then(data => setReadPageStories(cleanFilteredData(data)))
       .catch(error => setError(`Something's gone wrong. Please try again`))
    }
  }, []);

  getReadStories.current = async () => {
    let requestURL = 'http://hn.algolia.com/api/v1/search_by_date?query='
    let attributes = '&numericFilters=created_at_i='
    return await Promise.all(
      props.read.map(story => getSpecificStories(requestURL + story.tag + attributes + story.id))
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

  const updateRead = (id, tag, status) => {
    if (props.read.findIndex(story => story.id === id) === -1) {
      props.setReadStories([...props.read, {id: id, tag: tag}])
    } else if (props.read.findIndex(story => story.id === id) !== -1 && !status) {
      props.setReadStories([...props.read])
    } else {
      props.setReadStories(props.read.filter(story => story.id !== id))
    }
  } 

  const updateOpened = (id, tag, status) => {
    if (props.opened.findIndex(story => story.id === id) === -1) {
      props.setOpenedStories([...props.opened, {id: id, tag: tag}])
    } else if (props.opened.findIndex(story => story.id === id) !== -1 && !status) {
      props.setOpenedStories([...props.opened])
    } else {
      props.setOpenedStories(props.opened.filter(story => story.id !== id))
    }
  }

  const getStoryState = (id) => {
    let status = []
    if (props.read === undefined) {
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
    <ReadContainer>
      {!props.read.length && !error && <h1>No read stories!</h1>}
      {!!props.read.length && !readPageStories.length && !error && <PlaceHolder/>}
      {!props.read.length && !readPageStories.length && error && <Error error={error}/>}
      {!!props.read.length && !error && readPageStories.length &&
        <InfoWrap>
          {readPageStories.map((story, i) => 
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
    </ReadContainer>
  )
}

export default Read
