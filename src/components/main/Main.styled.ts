import styled from "styled-components";
// interface Colors{
//   bgColor:string,
//   textColor: string
// }
export const AppMain = styled.main`
  width: 100%;
  height: 450px;
  max-width: 400px;
  justify-items: center;
  margin: 0 auto;
  position: relative;
  flex: 1;

  /* background-color: red; */
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 530px) {
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 992px) {
    flex-direction: row;
    max-width: 800px;
    bottom: 40px !important;
  }

  @media screen and (min-width: 1200px) {
    position: relative;
    bottom: 30px;
  }
`;

export const MainContentDisplay = styled.div`
  /* background-color: blue; */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 992px) {
    padding-inline: 20px;
  }
`;

export const MainHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  p {
    border: 1px solid rgba(110, 43, 32, 0.4);
    padding: 8px;
    font-size: 1rem;
    min-width: 80px;
    text-align: center;
    border-radius: 5px;
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.text};
    font-weight: bold;
    cursor: pointer;
    transition: 0.4s ease;

    &.active {
      background-color: darkred;
      color: white;
    }

    /* &:hover {
    background-color: ${({ theme }) => theme.colors.text};
    color: white;
  } */
  }

  @media screen and (min-width: 530px) {
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 992px) {
    p {
      font-size: 1.1rem;
      min-width: 100px;
    }
  }

  @media screen and (min-width: 1200px) {
  }
`;

export const ColorsButton = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;

  p {
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.text};
    font-weight: 600;
  }
  input {
    min-width: 150px;
    height: 40px;
    outline: none;
    border-radius: 10px;
    margin-top: 10px;
    border: none;
  }

  @media screen and (min-width: 992px) {
    input {
      min-width: 160px;
    }
  }
`;

export const BackgroundColorDisplay = styled.div`
  input {
    /*  */
  }
`;

export const TextColorDisplay = styled.div`
  input {
    /*  */
  }
`;

export const TextDisPlay = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  p {
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.text};
    margin-top: 20px;
    font-weight: 600;
  }
  input {
    padding: 12px;
    width: 100%;
    font-size: 1.2rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.text};
    border-radius: 5px;
    outline: none;
    border: none;
    border: 1px solid rgba(110, 43, 32, 0.4);
  }

  input::placeholder {
    color: rgba(110, 43, 32, 0.4);
  }
`;

export const FontDisplay = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;

  p {
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.text};
    font-weight: 600;
  }
  select {
    padding: 8px;
    max-width: 140px;
    margin-top: 10px;
    font-size: 1.2rem;
    border-radius: 5px;
    border: 1px solid rgba(110, 43, 32, 0.4);
  }

  @media screen and (min-width: 992px) {
    flex-direction: row;
  }
`;

export const FontTypeDisplay = styled.div`
  select {
    max-width: 150px;
  }
  @media screen and (min-width: 992px) {
    select {
      max-width: 160px;
    }
  }
`;

export const FontSizeDisplay = styled.div`
  select {
    min-width: 150px;
  }

  @media screen and (min-width: 992px) {
    select {
      min-width: 160px;
    }
  }
`;

export const IconsDisplay = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  margin-top: 20px;
  button {
    width: 100%;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    background-color: #9d2f24;
    color: ${({ theme }) => theme.fonts.text};
    color: white;
    font-weight: bold;
    font-size: 1rem;
    transition: 0.4s ease;

    &:hover {
      background-color: darkred;
    }
  }
`;

export const ImgDisplay = styled.div`
  background-color: white;
  padding: 5px;
  border: 1px solid rgba(110, 43, 32, 0.4);
  border-radius: 5px;
  transition: 0.4s ease;
  cursor: pointer;
  &:hover {
    background-color: rgba(110, 43, 32, 0.4);
  }
  img {
    height: 30px;
  }
`;

export const MainContentPreview = styled.div`
  /* background-color: red; */
  margin-top: 30px;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  /* background-color: red; */
  width: 100%;
  /* padding-inline:20px; */
  align-items: center;
  justify-content: center;
  gap: 10px;

  button {
    padding: 10px;
    font-size: 1.3rem;
    width: 100%;
    border: none;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.button};
    color: white;
    cursor: pointer;
    position: relative;
    top: 5px;
    cursor: pointer;
    transition: 0.4s ease;
    &:hover {
      background-color: ${({ theme }) => theme.colors.text};
    }
  }
  @media screen and (min-width: 992px) {
    margin-top: 0;
    padding-inline: 20px;
    padding-bottom: 0px;
  }
`;

export const ClassicCard = styled.div`
  /* display: none; */
  border-radius: 8px;
  height: 320px;
  width: 100%;
  position: relative;
  bottom: 5px;
  /* background-color: darkred; */
  background-color: var(--bg-color);
  max-width: 400px;

  .img {
    width: 100%;
    height: 100%;
    border: 8px solid var(--text-color);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;

    h2 {
        font-family: var(--font-family, sans-serif);
      color: var(--text-color);
      letter-spacing: 1px;
      font-weight: bold;
       font-size: var(--font-size);

      word-wrap: break-word;
      overflow-wrap: break-word;
      white-space: normal;
      width: 90%; /* limite de largura para quebrar linha */
      max-width: 100%;
    }

    img {
      height: 40px;
      align-self: flex-start;
      position: absolute;
      top: 10px;
      left: 0;
    }

    .snow {
      position: absolute;
      inset: 0;
      pointer-events: none;
      padding: 30px;
    }

    .snow span {
      position: absolute;
      width: 3px;
      height: 3px;
      background: white;
      border-radius: 50%;
    }
  }
  @media screen and (min-width: 992px) {
    max-width: 360px;
  }
`;

export const MinimalCard = styled.div`
  /* display: none; */
  border-radius: 8px;
  height: 320px;
  max-width: 400px;
  width: 100%;
  position: relative;
  bottom: 5px;

  background-color: var(--bg-color);
  .img {
    width: 100%;
    height: 100%;
    /* border: 8px solid #cfaf6a; */
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    h2 {
      font-family: var(--font-family, sans-serif);

      color: var(--text-color);
      letter-spacing: 1px;
      font-weight: bold;
       font-size: var(--font-size);
      word-wrap: break-word;
      overflow-wrap: break-word;
      white-space: normal;
      text-align: center;

      width: 90%; /* limite de largura para quebras */
      max-width: 100%; /* nunca ultrapasse a div pai */
    }

    img {
      height: 40px;
      align-self: flex-start;
      justify-items: center;
      position: absolute;
      top: 10px;
      left: 0;
    }

    .snow {
      position: absolute;
      inset: 0;
      pointer-events: none;
      padding: 30px;
    }

    .snow span {
      position: absolute;
      width: 3px;
      height: 3px;
      background: white;
      border-radius: 50%;
      top: random;
      left: random;
    }
  }
  @media screen and (min-width: 992px) {
    max-width: 360px;
  }
`;

export const FunnyCard = styled.div`
  /* display: none; */

  border-radius: 8px;
  height: 320px;
  width: 100%;
  max-width: 400px;
  position: relative;
  bottom: 5px;

  /* background: #aeefff; */
    background-color: var(--bg-color);
  .img {
    width: 100%;
    height: 100%;
    border: 5px dashed var(--text-color);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    h2 {
              font-family: var(--font-family, sans-serif);

      color: var(--text-color);
      letter-spacing: 1px;
      font-weight: bold;
      font-size: var(--font-size);

      word-wrap: break-word;
      overflow-wrap: break-word;
      white-space: normal;
      text-align: center;

      width: 90%; /* limite de largura para quebras */
      max-width: 100%; /* nunca ultrapasse a div pai */
    }

    img {
      height: 70px;
      align-self: flex-start;
      justify-items: center;
      position: absolute;
      top: 30px;
    
    }

    .snow {
      position: absolute;
      inset: 0;
      pointer-events: none;
      padding: 30px;
    }

    .snow span {
      position: absolute;
      width: 3px;
      height: 3px;
      background: white;
      border-radius: 50%;
      top: random;
      left: random;
    }
  }

  @media screen and (min-width: 992px) {
    max-width: 360px;
  }
`;
