import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { 
  ArticleWrapper, 
  ArticleImage,
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
  return (
    <ArticleWrapper>
     <ArticleImage match={match}>
      {match === 'javascript' && <JS/>}
      {match === 'css' && <CSS/>}
      {match === 'sass' && <Sass/>}
      {match === 'html' && <HTML/>}
      {match === 'angular' && <Angular/>}
      {match === 'react' && <ReactLogo/>}
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
