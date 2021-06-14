import styled from 'styled-components';
import { BsFillBookmarkFill, BsBookmark } from 'react-icons/bs';
// import { FaRegCheckCircle, FaRegCircle } from 'react-icons/fa';
import { IoLogoReact, IoLogoVue} from 'react-icons/io5';
import { 
  IoLogoJavascript,
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoSass,
  IoLogoAngular,
  IoIosCheckmarkCircleOutline,
  IoIosCheckmarkCircle
} from 'react-icons/io';

const icon = `
  width: 100%;
  height: 100%;
`

const options = `
  position: absolute;
  z-index: 5;
  color: #111623;
  width: 20px;
  height: 20px;
  display: flex;
  align-self: center;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: crosshair;
  }
`
const link = `
  text-decoration: none;
  color: #111623;

  &:visited {
    text-decoration: none;
    color: orange;
  }
`;

export const ArticleWrapper = styled.article`
  position: static;
  z-index: 1;
  box-sizing: border-box;
  transform: scale(.9);
  width: 300px;
  height: 300px;
  
  &:hover {
    border-radius: 4px;
    box-shadow:  5px 5px 10px #5E6E8C,
              -5px -5px 10px #96B7E5;
    overflow: hidden;
    background: #F7FAF9;
  }
`;

export const ArticleImage = styled.a`
  position: absolute;
  z-index: 2;
  width: 100%;
  height:40%;
  background: #fff;
  border: 2px solid #fff;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  border: 1px solid #fff;
  border-radius: 6px;
  box-shadow:  5px 5px 10px #5E6E8C,
              -5px -5px 10px #96B7E5;
  padding: 0;
  margin: 0;
  ${link}
`;

export const SaveOption = styled.span`
 ${options}
 top: 4px;
 left: 3px;
`;

export const ReadOption = styled.span`
 ${options}
 top: 4px;
 right: 3px;
`;

export const BookmarkEmpty = styled(BsBookmark)`
 ${icon}
`

export const BookmarkFilled = styled(BsFillBookmarkFill)`
 ${icon}
`

export const CheckEmpty = styled(IoIosCheckmarkCircleOutline)`
 ${icon}
`

export const CheckFilled = styled(IoIosCheckmarkCircle)`
 ${icon}
`

export const ArticleCreated = styled.a`
  height: 10%;
  width: 100%;
  padding: 1em 0.1em;
  position: absolute;
  z-index: 2;
  top: 40%;
  ${link}
`;

export const ArticleHeadline = styled.a`
  height:50%;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  padding: 1em 0.1em;
  font-size:  1.5em;
  font-weight: bolder;
  color: #111623;
  position: relative;
  z-index: 2;
  top: 60%;
  text-decoration: none;
`;

export const JS = styled(IoLogoJavascript)`
  ${icon}
  color: #f0db4f;
`;

export const CSS = styled(IoLogoCss3)`
  ${icon}
  color: #254BDD;
`;

export const HTML = styled(IoLogoHtml5)`
  ${icon}
  color: #f16529;
`;

export const Sass = styled(IoLogoSass)`
  ${icon}
  color: #dd6699;
`;

export const ReactLogo = styled(IoLogoReact)`
  ${icon}
  color: #61dbfb;
`;

export const Angular = styled(IoLogoAngular)`
  ${icon}
  color: #b52e31;
`;

export const Vue = styled(IoLogoVue)`
  ${icon}
  color: #41b883;
`;