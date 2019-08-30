import { createGlobalStyle } from 'styled-components';

const documentWidth = document.documentElement.clientWidth;
const windowWidth = window.innerWidth;
const scrollBarWidth = windowWidth - documentWidth;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    padding-right: {scrollBarWidth}px;
    overflow-x: hidden;
    background-color: #feffe5;
    width: 100%;
    font-family: 'Helvetica', sans-serif;
  }

  body.modal-open {

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