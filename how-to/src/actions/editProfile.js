import { axiosWithAuth } from "../utils/axiosWithAuth";

export const EDIT_PROFILE_START = "EDIT_PROFILE_START";
export const EDIT_PROFILE_SUCCESS = "EDIT_PROFILE_SUCCESS";
export const EDIT_PROFILE_FAILURE = "EDIT_PROFILE_FAILURE";

export const submitEditedProfile = (user, history) => dispatch => {
  console.log("IN SUBMIT EDITED PROFILE ACTION... USER:", user);
  dispatch({ type: EDIT_PROFILE_START });

  axiosWithAuth()
    .put(`https://how-to-bw.herokuapp.com/api/users/getUser/${user.id}`, user)
    .then(res => {
      console.log("PUT RESPONSE:", res);
      dispatch({ type: EDIT_PROFILE_SUCCESS });
      history.push('./myaccount');
    })
    .catch(err => {
      console.log(err.response);
      dispatch({ type: EDIT_PROFILE_FAILURE });
    });
};
