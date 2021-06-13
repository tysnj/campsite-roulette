import React from 'react'
import { BsFillBookmarkFill, BsBookmark } from 'react-icons/bs';
import { FaRegCheckCircle, FaRegCircle } from 'react-icons/fa';

import { 
  ArticleWrapper, 
  ArticleImage,
  Options,
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

function Article(props) {

  const match = props.info._highlightResult.title.matchedWords[0] 
  const headline = props.info.title
  const createdDate = new Date(props.info.created_at).toLocaleDateString()
  
  // create a function that returns boolean
  // based on if this story is in saved or read state
  // conditionally render bookmark and checkmark accordingly
  return (
    <ArticleWrapper>
      <ArticleImage match={match}>
        <Options>
          <BsBookmark/>
          <FaRegCircle/>
        </Options>
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
      <ArticleCreated>
        <em>Posted on <strong>{createdDate}</strong></em>
      </ArticleCreated>
      <ArticleHeadline>
        {headline}
      </ArticleHeadline>
    </ArticleWrapper>
  )
}

export default Article
