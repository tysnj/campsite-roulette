import styled from 'styled-components';
//import { Container } from '../../globalStyles';
import { Container } from '../../globalStyles';

import { 
  IoLogoReact,
  IoLogoVue
} from 'react-icons/io5';
import { 
  IoLogoJavascript,
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoSass,
  IoLogoAngular,
 } from 'react-icons/io';

 const logo = `
  width: 100%;
  height: 100%;
   `
 
export const ArticleWrapper = styled.article`
  box-sizing: border-box;
  transform: scale(.9);
  width: 250px;
  height: 300px;
  
  &:hover {
    transform: scale(1.1);
    border-radius: 4px;
    box-shadow:  5px 5px 10px #5E6E8C,
              -5px -5px 10px #96B7E5;
  }
`;

export const ArticleImage = styled(Container)`
  width: 100%;
  height:40%;
  /* background: #fff; */
  border: 2px solid #fff;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  border: 1px solid #fff;
  border-radius: 6px;
  box-shadow:  5px 5px 10px #5E6E8C,
              -5px -5px 10px #96B7E5;
`;
export const ArticleCreated = styled(Container)`
  height: 10%;
  width: 100%;
  padding: 1em 0.1em;
`;

export const ArticleHeadline = styled(Container)`
  height:50%;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  padding: 1em 0.1em;
  font-size:  1.5em;
  font-weight: bolder;
  text-overflow: ellipsis;
  color: #101522;
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
  /* background-color: #222222 */
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