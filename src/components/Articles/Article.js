import React, { useState, useEffect } from 'react'
import { 
  ArticleWrapper, 
  ArticleImage,
  SaveOption,
  BookmarkEmpty,
  BookmarkFilled,
  ReadOption,
  CheckEmpty,
  CheckFilled,
  ArticleCreated,
  ArticleHeadline,
  JS,
  ReactLogo,
  Sass,
  Vue,
  Angular,
  HTML,
  CSS
} from './Articles.elements';
import PropTypes from 'prop-types';

const Article = (props) => {
  const [savedStatus, setSavedStatus] = useState(false);
  const [readStatus, setReadStatus] = useState(false);
  // const [opened, setOpened] = useState(false);
  const match = props.info._highlightResult.title.matchedWords[0] 
  const headline = props.info.title
  const createdDate = new Date(props.info.created_at).toLocaleDateString()
  
  useEffect(() => {
    if (props.status === undefined) {
      return
    } else if (props.status.includes('saved')) {
      handleSave()
    }
    if (props.status.includes('read')) {
      handleRead()
    }
  }, [])

  const handleSave = () => {
    setSavedStatus(!savedStatus)
    props.saveStory(props.id, match, savedStatus)
  }

  const handleRead = () => {
    setReadStatus(!readStatus)
    props.readStory(props.id, match, readStatus)
  }

  return (
    <ArticleWrapper data-cy={props.cy}>
      <SaveOption onClick={handleSave} data-cy='save-option'>
        {
          savedStatus ? 
          <BookmarkFilled className='bookmark'/> :
          <BookmarkEmpty className='bookmark-empty'/>
        }
      </SaveOption>
      <ReadOption onClick={handleRead} data-cy='read-option'>
        {
          readStatus ? 
          <CheckFilled className='circle'/> :
          <CheckEmpty className='checked'/>
        }
      </ReadOption>
      <ArticleImage href={props.info.url} target='_blank' data-cy='article-image'>
        {match === 'javascript' && <JS/>}
        {match === 'css' && <CSS/>}
        {match === 'css3' && <CSS/>}
        {match === 'sass' && <Sass/>}
        {match === 'html' && <HTML/>}
        {match === 'html5' && <HTML/>}
        {match === 'angularjs' && <Angular/>}
        {match === 'angular' && <Angular/>}
        {match === 'react' && <ReactLogo/>}
        {match === 'vue.js' && <Vue/>}
        {match === 'vue' && <Vue/>}
      </ArticleImage> 
      <ArticleCreated href={props.info.url} target='_blank' data-cy='article-date'>
        <em>Posted on <strong>{createdDate}</strong></em>
      </ArticleCreated>
      <ArticleHeadline href={props.info.url} target='_blank' data-cy='article-headline'>
        {headline}
      </ArticleHeadline>
    </ArticleWrapper>
  )
}

Article.propTypes = {
  cy: PropTypes.number,
  info: PropTypes.shape({
    created_at: PropTypes.string,
    title: PropTypes.string,
    url: PropTypes.string,
    created_at_i: PropTypes.number,
    objectID: PropTypes.string,
    _highlightResult: PropTypes.shape({
      title: PropTypes.shape({
        matchedWords: PropTypes.arrayOf(PropTypes.string)
      })
    })
  }),
  id: PropTypes.number,
  status: PropTypes.arrayOf(PropTypes.string),
  saveStory: PropTypes.func,
  readStory: PropTypes.func,
  openStory: PropTypes.func
}


export default Article
