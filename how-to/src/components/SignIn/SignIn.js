import React from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import FormWrapper from '../../styled-components/FormWrapper';

const SignIn = ({ touched, errors, values, status }) => {
  return (
    <div>
      <div>
        <h2>Welcome Back</h2>
        <p>We learned a lot while you were gone!</p>
        <p>We're excited to share it with you!</p>
      </div>
      <Form>
        <FormWrapper>
          <h2>Sign In</h2>
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
            <button type='submit'>Let's Go!</button>
        </FormWrapper>
      </Form>
    </div>
  )
}

const FormikSignIn = withFormik({
  mapPropsToValues({ email, username, password }) {
    return {
      email: email || '',
      username: username || '',
      password: password || '',
    }
  },

  validationSchema: Yup.object().shape({
    email: Yup.string().email().required('Not a valid email address'),
    username: Yup.string().required('Please choose a username'),
    password: Yup.string().required('Please enter a password'),
  }),

  handleSubmit(values, { setStatus }) {
    axios
      .post('https://reqres.in/api/users', values)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  }
})(SignIn);

export default FormikSignIn;