import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    background-color: #feffe5;
    width: 100%;
    font-family: 'Helvetica', sans-serif;
  }

  h1 {
    font-size: 36px;
  }

  h2 {
    font-size: 30px;
  }

  h3 {
    font-size: 24px;
    font-weight: normal;
  }

  h4 {
    font-size: 20px;
    font-weight: normal;
  }

  p {
    font-size: 18px;
  }
`;

export default GlobalStyle;