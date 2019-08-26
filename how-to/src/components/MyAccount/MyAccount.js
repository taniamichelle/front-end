import React, { useState } from "react";
import { Route, Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

// components
import AccountInfo from "./AccountInfo";
import ChangePassword from "./ChangePassword";
import MyTutorials from "../MyTutorials/MyTutorials";

// styles
import GlobalStyle from "../../styled-components/GlobalStyle";
import ContentContainer from "../../styled-components/ContentContainer";

const MyAccount = props => {
  console.log(props);
  const [person, setPerson] = useState({
    name: "Elvis Knapman",
    email: "elvisknapman@gmail.com"
  });
  return (
    <div>
      <h1>My Account</h1>
      <div>
        <Link to={`${props.match.path}/changepassword`}>Change Password </Link>
      </div>
      <div>
        <Link to={`${props.match.path}/mytutorials`}>My Tutorials</Link>
      </div>
      <AccountInfo person={person} />
      <Route path="/myaccount/changepassword" component={ChangePassword} />
      <Route path="/myaccount/mytutorials" component={MyTutorials} />
    </div>
  );
};

export default MyAccount;
