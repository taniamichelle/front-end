import React from "react";
import "./App.css";

import styled, { createGlobalStyle } from "styled-components";

import { Route, Link } from "react-router-dom";

// components
import Home from "./components/Home/Home";
import MyAccount from "./components/MyAccount/MyAccount";
import Tutorials from "./components/Tutorials/Tutorials";

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
      <Content>Content Div</Content>
      <Route exact path="/" component={Home} />
      <Route path="/myaccount" component={MyAccount} />
    </div>
  );
}

export default App;
