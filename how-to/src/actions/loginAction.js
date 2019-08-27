import axios from "axios";

// action types
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = id => dispatch => {
  dispatch({ type: LOGIN_START });

  axios
    .get(`http://someurl.com/${id}`)
    .then(res => {
      localStorage.getItem("token");
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    })
    .catch(err =>
      dispatch({
        type: LOGIN_FAILURE,
        payload: "Username or password was invalid. Please try again"
      })
    );
};
