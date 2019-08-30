import React from "react";
import { Route, Switch } from "react-router-dom";

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
<<<<<<< HEAD
import Upload from "./components/Upload/Upload";
=======
import Upload from './components/Upload/Upload';
import UploadForm from "./components/Upload/UploadForm";
>>>>>>> 3e11eccba1deb5b1133e7eb870c0e3217f18da0d
import Tutorials from "./components/Tutorials/Tutorials";
import TutorialRouter from './components/Tutorials/TutorialRouter';
import EditProfile from "./components/MyAccount/EditProfile";
import MyTutorials from './components/MyTutorials/MyTutorials';
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export default function App() {
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <ContentContainer>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signupsuccess" component={SignUpSuccess} />
          <PrivateRoute path="/search" component={Search} />
          <PrivateRoute
            exact
            path="/myaccount/editprofile"
            component={EditProfile}
          />
          <PrivateRoute path="/myaccount" component={MyAccount} />
          <PrivateRoute path="/tutorials" component={Tutorials} />
<<<<<<< HEAD
=======
          <PrivateRoute path='/tutorial' component={TutorialRouter} />
>>>>>>> 3e11eccba1deb5b1133e7eb870c0e3217f18da0d
          <PrivateRoute path="/upload" component={Upload} />
        </Switch>
      </ContentContainer>
    </div>
  );
}

