import React from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";

// components
import Nav from './components/Nav/Nav'
import Home from "./components/Home/Home";
import MyAccount from "./components/MyAccount/MyAccount";
import SignUp from './components/SignUp/SignUp';
import SignUpSuccess from './components/SignUp/SignUpSuccess';
import SignIn from './components/SignIn/SignIn';
import Search from './components/Search/Search'
import Tutorials from "./components/Tutorials/Tutorials";

import GlobalStyle from './styled-components/GlobalStyle';
import ContentContainer from './styled-components/ContentContainer';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <ContentContainer>
        {/* <SignUp /> */}
        {/* <SignUpSuccess /> */}
        {/* <SignIn /> */}
        {/* <Search /> */}
      {/* <Route exact path="/" component={Home} /> */}
      {/* <Route path="/myaccount" component={MyAccount} /> */}
        <Route path='/signin' component={SignIn} />
        <Route path='/signup' component={SignUp} />
      </ContentContainer>
    </div>
  );
}

export default App;
