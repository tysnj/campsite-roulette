import styled from 'styled-components';
// import { GiNewspaper } from 'react-icons/gi';
// import { Link } from 'react-router-dom';
// import { Container } from '../../globalStyles';

export const HomeContainer = styled.main`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  margin: 0 2em;
`;

export const InfoWrap = styled.div`
  padding: 20px 20px 60px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1px 5px;
  justify-content: center;
  align-content: center;

  @media screen and (max-width: 1500px) {
    padding: 20px 20px 60px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1px 5px;
    justify-content: center;
    align-content: center;
  }

  @media screen and (max-width: 800px) {
    padding: 20px 20px 60px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1px 5px;
    justify-content: center;
    align-content: center;
    }
`;