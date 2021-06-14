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

  const handleRead = () => setReadStatus(!readStatus)

  return (
    <ArticleWrapper>
      <SaveOption onClick={handleSave}>
        {
          savedStatus ? 
          <BookmarkFilled className='bookmark'/> :
          <BookmarkEmpty className='bookmark-empty'/>
        }
      </SaveOption>
      <ReadOption onClick={handleRead}>
        {
          readStatus ? 
          <CheckFilled className='circle'/> :
          <CheckEmpty className='checked'/>
        }
      </ReadOption>
      <ArticleImage href={props.info.url} target='_blank'>
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
      <ArticleCreated href={props.info.url} target='_blank'>
        <em>Posted on <strong>{createdDate}</strong></em>
      </ArticleCreated>
      <ArticleHeadline href={props.info.url} target='_blank'>
        {headline}
      </ArticleHeadline>
    </ArticleWrapper>
  )
}

export default Article
