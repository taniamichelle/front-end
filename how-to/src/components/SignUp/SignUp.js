import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

const FormWrapper = styled.div`
  border: 2px solid gray;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SignUp = () => {
  return (
    <div>
      <h1>It's time to start teaching each other!</h1>
        <Form>
          <FormWrapper>
            <h2>Sign Up</h2>
            <label>First Name</label>
            <Field name='firstname' type='text' placeholder='Type first name' />
            <br />
            <label>Last Name</label>
            <Field name='lastname' type='text' placeholder='Type last name' />
            <br />
            <label>Email Address</label>
            <Field name='email' type='text' placeholder='Type email address' />
            <br />
            <label>Username</label>
            <Field name='username' type='text' placeholder='Type username' />
            <br />
            <label>Password</label>
            <Field name='password' type='text' placeholder='Type password' />
            <br />
            <button>Let's Go!</button>
          </FormWrapper>
        </Form>
    </div>
  )
}

const FormikSignUp = withFormik({
  mapPropsToValues({}) {
    return {

    }
  }
})(SignUp);

export default FormikSignUp;