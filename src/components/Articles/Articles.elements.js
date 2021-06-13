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

const logo = `
  width: 100%;
  height: 100%;
`

const options = `
  position: relative;
  z-index: 4;
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
 
export const ArticleWrapper = styled.a`
  position: static;
  z-index: 1;
  box-sizing: border-box;
  transform: scale(.9);
  width: 300px;
  height: 300px;
  text-decoration: none;
  color: #101522;

  &:visited {
    text-decoration: none;
    color: orange;
  }
  
  &:hover {
    border-radius: 4px;
    box-shadow:  5px 5px 10px #5E6E8C,
              -5px -5px 10px #96B7E5;
    overflow: hidden;
    background: #F7FAF9;
  }
`;

export const ArticleImage = styled(Container)`
  position: relative;
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
 ${logo}
`

export const BookmarkFilled = styled(BsFillBookmarkFill)`
 ${logo}
`

export const CircleEmpty = styled(FaRegCircle)`
 ${logo}
`

export const CircleChecked = styled(FaRegCheckCircle)`
 ${logo}
`

export const ArticleCreated = styled(Container)`
  height: 10%;
  width: 100%;
  padding: 1em 0.1em;
  position: absolute;
  z-index: 2;
`;

export const ArticleHeadline = styled(Container)`
  height:50%;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  padding: 1em 0.1em;
  font-size:  1.5em;
  font-weight: bolder;
  color: #101522;
  position: absolute;
  z-index: 2;
`;

export const JS = styled(IoLogoJavascript)`
  ${logo}
  color: #f0db4f;
`;

export const CSS = styled(IoLogoCss3)`
  ${logo}
  color: #254BDD;
`;

export const HTML = styled(IoLogoHtml5)`
  ${logo}
  color: #f16529;
`;

export const Sass = styled(IoLogoSass)`
  ${logo}
  color: #dd6699;
`;

export const ReactLogo = styled(IoLogoReact)`
  ${logo}
  color: #61dbfb;
`;

export const Angular = styled(IoLogoAngular)`
  ${logo}
  color: #b52e31;
`;

export const Vue = styled(IoLogoVue)`
  ${logo}
  color: #41b883;
`;