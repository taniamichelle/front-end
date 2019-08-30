import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

import { connect } from "react-redux";

// components
import AccountInfo from "./AccountInfo";
import ChangePassword from "./ChangePassword";
import MyTutorials from "../MyTutorials/MyTutorials";

// actions
import { fetchUserData } from "../../actions/fetchUserData";

// styles
import GlobalStyle from "../../styled-components/GlobalStyle";
import ContentContainer from "../../styled-components/ContentContainer";

const MyAccount = ({
  match,
  fetchUserData,
  firstName,
  lastName,
  email,
  username
}) => {
  // create person object with prop values
  const person = {
    firstName,
    lastName,
    email,
    username
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  if (!firstName) {
    return (
      <div>
        <p>Loading User Profile...</p>
      </div>
    );
  }

  console.log("PERSON", person);

  return (
    <div>
      <h1>My Account</h1>
      <div>
        <Link to="/myaccount/editprofile">Edit Account Information</Link>
      </div>
      <div>
        <Link to={`${match.path}/mytutorials`}>My Tutorials</Link>
      </div>
      <AccountInfo person={person} />
      {/* <Route
        path="/myaccount/changepassword"
        render={props => (
          <ChangePassword {...props} changePassword={changePassword} />
        )}
      />
      <Route path="/myaccount/mytutorials" component={MyTutorials} /> */}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    firstName: state.fetchUserDataReducer.firstName,
    lastName: state.fetchUserDataReducer.lastName,
    email: state.fetchUserDataReducer.email,
    username: state.fetchUserDataReducer.username
  };
};

export default connect(
  mapStateToProps,
  { fetchUserData }
)(MyAccount);
