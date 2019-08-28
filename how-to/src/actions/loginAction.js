import axios from "axios";

// action types
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = (user, history) => dispatch => {
  // hard coded user
  // const theUser = {
  //   email: "eve.holt@reqres.in",
  //   password: "cityslicka"
  // };
  console.log("IN DISPATCH");
  dispatch({ type: LOGIN_START });

  axios
    .post(`https://reqres.in/api/login`, user)
    .then(res => {
      console.log("THE RESPONSE:", res.data.token);
      localStorage.setItem("token", res.data.token);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      history.push("/search");
    })
    .catch(err =>
      dispatch({
        type: LOGIN_FAILURE,
        payload: "Username or password was invalid. Please try again"
      })
    );
};
