import styled from 'styled-components';
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
  border: 1px solid #fff;
  border-radius: 0px;
  box-shadow:  5px 5px 10px #5E6E8C,
              -5px -5px 10px #96B7E5;
  transform: scale(.9);
  width: 250px;
  height: 300px;
  background-color: #111623;
  /* opacity: 10%; */
`;

export const ArticleImage = styled.div`
  width: 100%;
  height:40%;
  background: #fff;
  border: 2px solid #111623;
  align-items: center;
  justify-content: center;
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
  color: ##dd6699;
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