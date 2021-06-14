import styled from 'styled-components';


export const SavedContainer = styled.main`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  margin: 1em 1em;
`;

export const InfoWrap = styled.div`
  padding: 40px 10px 50px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px 40px;
  justify-content: center;
  align-content: center;

  @media screen and (max-width: 1500px) {
    padding: 20px 10px 60px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px 40px;
    justify-content: center;
    align-content: center;
  }

  @media screen and (max-width: 800px) {
    padding: 20px 10px 60px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px 40px;
    justify-content: center;
    align-content: center;
    }
`;