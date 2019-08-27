import React, { useState } from "react";

const ChangePassword = props => {
  const [newPassword, setNewPassword] = useState({
    password: "",
    confirmPassword: ""
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = e => {
    setNewPassword({
      ...newPassword,
      [e.target.name]: e.target.value
    });
  };

  const submitNewPassword = e => {
    e.preventDefault();
    // password can't be blank
    if (newPassword.password.trim() === "") {
      setErrorMessage("Password cannot be blank.");
      return;
    }

    //password fields must match
    if (newPassword.password !== newPassword.confirmPassword) {
      setErrorMessage("Passwords must match. Please try again.");
      return;
    }

    setErrorMessage("");
    console.log("passwords match");
    props.changePassword(newPassword.password);
  };

  return (
    <div>
      <h4>Change Password</h4>
      <form>
        <p>{errorMessage && errorMessage}</p>
        <div>
          <label>New Password</label>
          <div>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={newPassword.password}
            />
          </div>
        </div>
        <div>
          <label>Confirm New Password</label>
          <div>
            <input
              type="password"
              name="confirmPassword"
              onChange={handleChange}
              value={newPassword.confirmPassword}
            />
          </div>
          <div>
            <button onClick={submitNewPassword}>Change Password</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
