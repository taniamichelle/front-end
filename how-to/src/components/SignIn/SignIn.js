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
<<<<<<< HEAD
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
=======
          
          <label>Email Address</label>
          <Field name='email' type='text' placeholder='Type email address' />
          {touched.email && errors.email && (
            <p>{errors.email}</p>
          )}
          
          <br />
          
          <label>Username</label>
          <Field name='username' type='text' placeholder='Type username' />
          {touched.username && errors.username && (
            <p>{errors.username}</p>
          )}
          
          <br />
          
          <label>Password</label>
          <Field name='password' type='password' placeholder='Type password' />
          {touched.password && errors.password && (
            <p>{errors.password}</p>
          )}
          
          <br />
          
          <Link to='/search'><button type='submit'>Let's Go!</button></Link>
>>>>>>> 681d1b7830381609bb78df1e29dba98c467117ab
        </FormWrapper>
      </form>
    </SignInDiv>
  );
};
export default connect(
  null,
  { login }
)(SignIn);
