import React from "react";

// components
import AccountInfo from "./AccountInfo";
import ChangePassword from "./ChangePassword";

const MyAccount = props => {
  return (
    <div>
      <h1>My Account</h1>
      <AccountInfo />
      <ChangePassword />
    </div>
  );
};

export default MyAccount;
