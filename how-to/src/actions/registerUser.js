import axios from "axios";

export const REGISTER_USER_START = "REGISTER_USER_START";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAILURE = "REGISTER_USER_FAILURE";

export const registerUser = (user, history) => dispatch => {
  dispatch({ type: REGISTER_USER_START });

  axios
    .post("https://how-to-bw.herokuapp.com/api/auth/register", user)
    .then(res => {
      dispatch({ type: REGISTER_USER_SUCCESS });
      history.push("/signin");
    })
    .catch(err => {
      dispatch({ type: REGISTER_USER_FAILURE });
    });
};
