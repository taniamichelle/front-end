import React, { useState } from "react";
import { Route, Link } from "react-router-dom";

// Styles
import GlobalStyle from "./styled-components/GlobalStyle";
import ContentContainer from "./styled-components/ContentContainer";

// Components
import Nav from "./components/Nav/Nav";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import SignUpSuccess from "./components/SignUp/SignUpSuccess";
import Search from "./components/Search/Search";
import MyAccount from "./components/MyAccount/MyAccount";
import Uploads from "./components/Tutorials/Uploads";
import Tutorials from "./components/Tutorials/Tutorials";

export default function App() {
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <Link to="/signin">
        <img className="logo" src={require("./images/logo.png")} />
      </Link>
      <ContentContainer>
        <Route exact path="/" component={SignIn} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signupsuccess" component={SignUpSuccess} />
        <Route path="/search" component={Search} />
        <Route path="/myaccount" component={MyAccount} />
        <Route path="/upload" component={Uploads} />
        <Route path="/tutorial" component={Tutorials} />
      </ContentContainer>
    </div>
  );
}
