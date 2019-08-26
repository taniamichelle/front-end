import React from "react";
import "./App.css";

import styled, { createGlobalStyle } from "styled-components";

import { Route, Link, Switch } from "react-router-dom";

// components
import Home from "./components/Home/Home";
import MyAccount from "./components/MyAccount/MyAccount";
import Tutorials from "./components/Tutorials";
import MyTutorials from "./components/MyTutorials/MyTutorials";

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
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/myaccount" component={MyAccount} />
        <GlobalStyle />
        <Content>Content Div</Content>
      </Switch>
    </div>
  );
}

export default App;
