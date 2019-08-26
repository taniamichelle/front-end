import React from "react";
import "./App.css";
import styled, { createGlobalStyle } from 'styled-components';
import Tutorials from './components/Tutorials';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #feffe5;
  }
`;

const Content = styled.div`
  border: 15px solid #000e33;
  border-radius: 30px;
  padding: 50px;
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <h1>How-To App</h1>
      <Content>
        Content Div
      </Content>
    </div>
  );
}

export default App;
