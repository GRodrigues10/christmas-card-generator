import styled from "styled-components";

export const AppContainer = styled.div`
  /* background: ${({ theme }) => theme.colors.background}; */
  min-height: 100vh;
  width: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
justify-content: center;
align-items: center;




  @media screen and (min-width: 1200px) {
    padding: 50px;
  }
`;
