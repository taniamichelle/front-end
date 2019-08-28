import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

import axios from "axios";

import { connect } from "react-redux";

// components
import AccountInfo from "./AccountInfo";
import ChangePassword from "./ChangePassword";
import MyTutorials from "../MyTutorials/MyTutorials";

// actions
import { changePassword } from "../../actions/changePasswordAction";

// styles
import GlobalStyle from "../../styled-components/GlobalStyle";
import ContentContainer from "../../styled-components/ContentContainer";

const MyAccount = ({
  match,
  last_name,
  first_name,
  isChangingPassword,
  errorMessage,
  password,
  changePassword
}) => {
  const person = {
    first_name,
    last_name
  };
  return (
    <div>
      <p>{password && password}</p>
      <h1>My Account</h1>
      <div>
        <Link to={`${match.path}/changepassword`}>Change Password </Link>
      </div>
      <div>
        <Link to={`${match.path}/mytutorials`}>My Tutorials</Link>
      </div>
      <AccountInfo person={person} />
      <Route
        path="/myaccount/changepassword"
        render={props => (
          <ChangePassword {...props} changePassword={changePassword} />
        )}
      />
      <Route path="/myaccount/mytutorials" component={MyTutorials} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    first_name: state.loginReducer.first_name,
    last_name: state.loginReducer.last_name,
    isChangingPassword: state.changePasswordReducer.isChangingPassword,
    errorMessage: state.changePasswordReducer.errorMessage,
    password: state.changePasswordReducer.password
  };
};

export default connect(
  mapStateToProps,
  { changePassword }
)(MyAccount);
