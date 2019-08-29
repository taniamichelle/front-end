import axios from "axios";

// action types
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = (user, history) => dispatch => {
  console.log("IN DISPATCH");
  dispatch({ type: LOGIN_START });

  axios
    .post(`https://how-to-bw.herokuapp.com/api/auth/login`, user)
    .then(res => {
      console.log("THE RESPONSE:", res);
      // set token to local storage
      localStorage.setItem("token", res.data.token);
      dispatch({ type: LOGIN_SUCCESS });
      history.push("/myaccount");
    })
    .catch(err =>
      dispatch({
        type: LOGIN_FAILURE,
        payload: "Username or password was invalid. Please try again"
      })
    );
};
