import React, { useState, useEffect } from 'react'
import { 
  ArticleWrapper, 
  ArticleImage,
  Options,
  SaveOption,
  BookmarkEmpty,
  BookmarkFilled,
  ReadOption,
  CircleEmpty,
  CircleChecked,
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
  const [saved, setSaved] = useState(false);
  const [read, setRead] = useState(false);
  // const [opened, setOpened] = useState(false);
  const match = props.info._highlightResult.title.matchedWords[0] 
  const headline = props.info.title
  const createdDate = new Date(props.info.created_at).toLocaleDateString()
  
  // useEffect(() => {
  //   checkStatus()
  // }, [])

  // const checkStatus = ({props}) => {
  //   if (saved.includes(id)) {
  //     setStatus(status.push('saved'))
  //   }
  // }
  const handleSave = () => setSaved(!saved)

  // const handleRead = () => {}

  // const handleOpened = () => {}
  // create a function that returns boolean
  // based on if this story is in saved or read state
  // conditionally render bookmark and checkmark accordingly
  return (
    <ArticleWrapper>
      <Options>
        <SaveOption onClick={handleSave}>
          {
            saved ? 
            <BookmarkFilled className='bookmark'/> :
            <BookmarkEmpty className='bookmark-empty'/>
          }
        </SaveOption>
        <ReadOption>
          {
            read ? 
            <CircleChecked className='circle'/> :
            <CircleEmpty className='checked'/>
          }
        </ReadOption>
      </Options>
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
