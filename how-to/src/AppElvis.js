import React from "react";
import "./App.css";
import styled, { createGlobalStyle } from "styled-components";
import { Route, Link } from "react-router-dom";

// components
import Home from "./components/Home/Home";
import MyAccount from "./components/MyAccount/MyAccount";
import SignUp from "./components/SignUp/SignUp";
import Tutorials from "./components/Tutorials/Tutorials";
import MyTutorials from "./components/MyTutorials/MyTutorials";

// styles
import GlobalStyle from "./styled-components/GlobalStyle";
import ContentContainer from "./styled-components/ContentContainer";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <GlobalStyle />
      <ContentContainer>
        {/* <SignUp /> */}
        <Route path="/myaccount" component={MyAccount} />
      </ContentContainer>
    </div>
  );
}

export default App;
