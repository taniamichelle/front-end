import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

const FormWrapper = styled.div`
  border: 2px solid gray;
  background color: white;
`;

const SignUp = () => {
  return (
    <div>
      <h1>It's time to start teaching each other!</h1>
      <FormWrapper>
        <Form>
          <h2>Sign Up</h2>
          <label>First Name</label>
          <Field />
          <label>Last Name</label>
          <Field />
          <label>Email Address</label>
          <Field />
          <label>Password</label>
          <Field />
        </Form>
      </FormWrapper>
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