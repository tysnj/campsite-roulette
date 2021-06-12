import styled from 'styled-components';

export const FooterContainer = styled.div`
  background-color: #101522;
  padding: 1rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  bottom: 0;
`;

export const ExternalLinkContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const ExternalLinkWrapper = styled.div`
  display: flex;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

// TODO: 
//  Logo in Footer On Left
//  External Link on Right
//  Style/Add Link Title
//  Style/Add Link to HN
//  Add functionality to take to HN