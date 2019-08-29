import React, { useState } from "react";
import { Form, Field, withFormik } from "formik";
import { connect } from "react-redux";
import * as Yup from "yup";
import styled from "styled-components";

import FormWrapper from "../../styled-components/FormWrapper";

// actions
import { submitEditedProfile } from "../../actions/editProfile";

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

const EditProfile = props => {
  const { history, login, touched, errors, values, status } = props;

  // const [user, setUser] = useState({
  //   firstName: props.firstName
  // });

  if (!props.firstName) {
    return (
      <div>
        <p>Loading..</p>
      </div>
    );
  }

  console.log("values above return", values);

  return (
    <SignInDiv>
      <Form>
        <FormWrapper>
          <h2>Edit Profile</h2>
          <br />
          <label>First Name</label>
          <Field name="firstName" type="text" />
          {touched.firstName && errors.firstName && <p>{errors.firstName}</p>}
          <br />
          <label>Last Name</label>
          <Field name="lastName" type="text" />
          {touched.lastName && errors.lastName && <p>{errors.lastName}</p>}
          <br />
          <label>Username</label>
          <Field name="username" type="text" />
          {touched.username && errors.username && <p>{errors.username}</p>}
          <br />
          <label>Email Address</label>
          <Field name="email" type="email" placeholder="Type email address" />
          {touched.email && errors.email && <p>{errors.email}</p>}
          <br />
          {/* <label>Password</label>
          <Field name="password" type="password" placeholder="Type password" />
          {touched.password && errors.password && <p>{errors.password}</p>}
          <br /> */}

          <button type="submit">Let's Go!</button>
        </FormWrapper>
      </Form>
    </SignInDiv>
  );
};

const mapStateToProps = state => {
  return {
    firstName: state.fetchUserDataReducer.firstName,
    lastName: state.fetchUserDataReducer.lastName,
    email: state.fetchUserDataReducer.email,
    username: state.fetchUserDataReducer.username,
    id: state.fetchUserDataReducer.id
  };
};

export default connect(
  mapStateToProps,
  { submitEditedProfile }
)(
  withFormik({
    mapPropsToValues(values, props) {
      console.log("IN PROPS TO VALUES", props);
      console.log("VALUES", values);
      return {
        username: values.username || "",
        firstName: values.firstName || "",
        lastName: values.lastName || "",
        email: values.email || ""
      };
    },

    validationSchema: Yup.object().shape({
      username: Yup.string().required("Please choose a username"),
      firstName: Yup.string().required("Please enter your first name"),
      lastName: Yup.string().required("Please enter your last name"),
      email: Yup.string().required("Please enter a valid email address")
    }),

    handleSubmit(values, { props, setStatus }) {
      // pass user object, user id, and history object
      props.submitEditedProfile(
        {
          username: values.username,
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email
        },
        props.id,
        props.history
      );
    }
  })(EditProfile)
);
