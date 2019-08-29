import React from "react";
import { Link } from "react-router-dom";
import { Form, Field, withFormik } from "formik";
import { connect } from "react-redux";
import * as Yup from "yup";
import axios from "axios";
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
  const { history, login, touched, errors, values, status } = props;
  return (
    <SignInDiv>
      <WelcomeDiv>
        <h2>Welcome Back</h2>
        <p>We learned a lot while you were gone!</p>
        <p>We're excited to share it with you!</p>
      </WelcomeDiv>
      <Form>
        <FormWrapper>
          <h2>Sign In</h2>
          {/* <label>Email Address</label>
          <Field name="email" type="text" placeholder="Type email address" />
          {touched.email && errors.email && <p>{errors.email}</p>} */}
          <br />
          <label>Username</label>
          <Field name="username" type="text" placeholder="Type username" />
          {touched.username && errors.username && <p>{errors.username}</p>}
          <br />
          <label>Password</label>
          <Field name="password" type="password" placeholder="Type password" />
          {touched.password && errors.password && <p>{errors.password}</p>}
          <br />

          <button type="submit">Let's Go!</button>
        </FormWrapper>
      </Form>
    </SignInDiv>
  );
};

export default connect(
  null,
  { login }
)(
  withFormik({
    mapPropsToValues({ username, password }) {
      return {
        username: username || "",
        password: password || ""
      };
    },

    validationSchema: Yup.object().shape({
      username: Yup.string().required("Please choose a username"),
      password: Yup.string().required("Please enter a password")
    }),

    handleSubmit(values, { props, setStatus }) {
      props.login(
        { username: values.username, password: values.password },
        props.history
      );
    }
  })(SignIn)
);
