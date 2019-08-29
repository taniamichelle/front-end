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
import UploadForm from "./components/Upload/UploadForm";
import Tutorials from "./components/Tutorials/Tutorials";
import EditProfile from "./components/MyAccount/EditProfile";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export default function App() {
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <ContentContainer>
        <Route exact path="/" component={SignIn} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signupsuccess" component={SignUpSuccess} />
        <PrivateRoute path="/search" component={Search} />
        <PrivateRoute path="/myaccount" component={MyAccount} />
        <PrivateRoute path="/tutorials" component={Tutorials} />
        <PrivateRoute path="/editprofile" component={EditProfile} />
        <PrivateRoute path="/upload" component={UploadForm} />
      </ContentContainer>
    </div>
  );
}

{
  /*
  PRIVATE ROUTE: 
  <ContentContainer>
  <Route exact path="/" component={SignIn} />
  <Route path="/signin" component={SignIn} />
  <Route path="/signup" component={SignUp} />
  <Route path="/signupsuccess" component={SignUpSuccess} />
  <PrivateRoute path="/protected" component={Search} />
  <PrivateRoute path="/protected" component={MyAccount} />
  <PrivateRoute path="/protected" component={Tutorials} />
  <PrivateRoute path="/protected" component={UploadForm} />
</ContentContainer> */
}
