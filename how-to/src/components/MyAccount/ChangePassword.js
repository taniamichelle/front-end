import React from "react";

const ChangePassword = props => {
  return (
    <div>
      <h4>Change Password</h4>
      <form>
        <div>
          <label>New Password</label>
          <div>
            <input type="password" />
          </div>
        </div>
        <div>
          <label>Confirm New Password</label>
          <div>
            <input type="password" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
