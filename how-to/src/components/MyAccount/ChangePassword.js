import React, { useState } from "react";

const ChangePassword = props => {
  const [newPassword, setNewPassword] = useState({
    password: "",
    confirmPassword: ""
  });

  const handleChange = e => {
    setNewPassword({
      ...newPassword,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <h4>Change Password</h4>
      <form>
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
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
