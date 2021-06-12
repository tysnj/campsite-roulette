import React from 'react'
import styled from 'styled-components';
import { 
  ArticleWrapper, 
  ArticleImage,
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
  return (
    <ArticleWrapper >
     <ArticleImage match={match}>
      {match === 'javascript' && <JS/>}
      {match === 'css' && <CSS/>}
      {match === 'sass' && <Sass/>}
      {match === 'html' && <HTML/>}
      {match === 'angular' && <Angular/>}
      {match === 'react' && <ReactLogo/>}
      {match === 'vue' && <Vue/>}
     </ArticleImage> 
    </ArticleWrapper>
  )
}

export default Article
