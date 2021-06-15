import styled from 'styled-components';
import { Container } from '../../globalStyles';

export const FooterContainer = styled.footer`
  background-color: #111623;
  padding: 1rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: #fff;
  position: static;
  bottom: 0;
`;

export const ExternalLinkContainer = styled(Container)`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const ExternalLinkWrapper = styled.a`
  display: flex;
  text-decoration: none;
  color: #fff;
  
  &:visited {
    text-decoration: none;
  }
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;