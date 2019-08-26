import React from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";
// components
import Home from "./components/Home/Home";
import MyAccount from "./components/MyAccount/MyAccount";
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';
import Search from './components/Search/Search'
import Tutorials from "./components/Tutorials/Tutorials";
import GlobalStyle from './styled-components/GlobalStyle';
import ContentContainer from './styled-components/ContentContainer';
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <h1>How-To App</h1>
      <ContentContainer>
        Hello world!
      </ContentContainer>
    </div>
  );
}
export default App;