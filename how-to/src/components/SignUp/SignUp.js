import React from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import FormWrapper from '../../styled-components/FormWrapper';

const SignUp = ({ touched, errors, values, status }) => {
  return (
    <div>
      <h1>It's time to start teaching each other!</h1>
        <Form>
          <FormWrapper>
            <h2>Sign Up</h2>
            <label>First Name</label>
            <Field name='firstname' type='text' placeholder='Type first name' />
            {touched.firstname && errors.firstname && (
              <p>{errors.firstname}</p>
            )}
            <br />
            <label>Last Name</label>
            <Field name='lastname' type='text' placeholder='Type last name' />
            {touched.lastname && errors.lastname && (
              <p>{errors.lastname}</p>
            )}
            <br />
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

const FormikSignUp = withFormik({
  mapPropsToValues({ firstname, lastname, email, username, password }) {
    return {
      firstname: firstname || '',
      lastname: lastname || '',
      email: email || '',
      username: username || '',
      password: password || '',
    }
  },

  validationSchema: Yup.object().shape({
    firstname: Yup.string().required('First name required'),
    lastname: Yup.string().required('Last name required'),
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
})(SignUp);

export default FormikSignUp;