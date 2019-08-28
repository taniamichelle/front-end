import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: #feffe5;
    width: 100%;
    font-family: 'Helvetica', sans-serif;
  }

  .logo {
    width: 120px;
    position: absolute;
    top: 20px;
    left: 50px;
    z-index: 9999;
  }
`;

export default GlobalStyle;