import styled from "styled-components";
export const AppHeader = styled.header`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 0px;
  padding: 30px;
  position: relative;
  bottom: 30px;

  img {
    display: none;
  }
  h1 {
    color: ${({ theme }) => theme.colors.title};
    font-family: ${({ theme }) => theme.fonts.title};
    font-size: 1.8rem;
  
    max-width: 550px;
    text-align: center;
    font-weight: bold;
  }

  @media screen and (min-width: 530px) {
    h1 {
      font-size: 2rem;
    }
  }
  @media screen and (min-width: 768px) {
    justify-content: space-between;

    h1 {
      font-size: 2.3rem;
    }

    img {
      display: flex;
      height: 70px;
    }
  }

  @media screen and (min-width: 992px) {
    h1 {
      font-size: 2.5rem;
    }

    img {
      height: 80px;
    }
  }

  @media screen and (min-width: 1200px) {
    padding: 50px;
    h1 {
      font-size: 3rem;
    }
    img {
      height: 100px;
    }
  }
`;
