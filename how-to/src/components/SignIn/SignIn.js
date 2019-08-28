import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import FormWrapper from "../../styled-components/FormWrapper";

// actions
import { login } from "../../actions/loginAction";

const SignInDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const WelcomeDiv = styled.div`
  margin-right: 20px;

  p {
    text-align: left;
  }
`;

const SignIn = props => {
  const { login, history } = props;

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    login(user, history);
  };

  return (
    <SignInDiv>
      <WelcomeDiv>
        <h2>Welcome Back</h2>
        <p>We learned a lot while you were gone!</p>
        <p>We're excited to share it with you!</p>
      </WelcomeDiv>
      <form onSubmit={handleSubmit}>
        <FormWrapper>
          <h2>Sign In</h2>
          <label>Email</label>
          <input
            name="email"
            type="text"
            value={user.email}
            onChange={handleChange}
            placeholder="email..."
          />
          <br />
          <label>Password</label>
          <input
            name="password"
            type="password"
            value={user.password}
            onChange={handleChange}
            placeholder="password..."
          />
          <br />
          {/* <Link to="/search"> */}
          <button type="submit">Let's Go!</button>
          {/* </Link> */}
        </FormWrapper>
      </form>
    </SignInDiv>
  );
};
export default connect(
  null,
  { login }
)(SignIn);
