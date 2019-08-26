import React from "react";
import { Route, Link } from "react-router-dom";

// components
import AccountInfo from "./AccountInfo";
import ChangePassword from "./ChangePassword";
import MyTutorials from "../MyTutorials/MyTutorials";

const MyAccount = props => {
  console.log(props);
  return (
    <div>
      <h1>My Account</h1>
      <div>
        <Link to={`${props.match.path}/changepassword`}>Change Password </Link>
      </div>
      <div>
        <Link to={`${props.match.path}/mytutorials`}>My Tutorials</Link>
      </div>
      <AccountInfo />
      <Route path="/myaccount/changepassword" component={ChangePassword} />
      <Route path="/myaccount/mytutorials" component={MyTutorials} />
    </div>
  );
};

export default MyAccount;
