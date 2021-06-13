import styled from 'styled-components';
import { Container } from '../../globalStyles';
import { BsFillBookmarkFill, BsBookmark } from 'react-icons/bs';
import { FaRegCheckCircle, FaRegCircle } from 'react-icons/fa';
import { IoLogoReact, IoLogoVue} from 'react-icons/io5';
import { 
  IoLogoJavascript,
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoSass,
  IoLogoAngular
} from 'react-icons/io';

const icon = `
  width: 100%;
  height: 100%;
`

const options = `
  position: relative;
  z-index: 5;
  color: #101522;
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
  color: #101522;

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

export const Options = styled(Container)`
  position: absolute;
  z-index: 3;
  top: 2px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-self: center;
  padding-left: 4px;
  padding-right: 4px;
  margin-left: 0;
  margin-right: 0;
`;

export const SaveOption = styled.span`
 ${options}
`;

export const ReadOption = styled.span`
 ${options}
`;

export const BookmarkEmpty = styled(BsBookmark)`
 ${icon}
`

export const BookmarkFilled = styled(BsFillBookmarkFill)`
 ${icon}
`

export const CircleEmpty = styled(FaRegCircle)`
 ${icon}
`

export const CircleChecked = styled(FaRegCheckCircle)`
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
  color: #101522;
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