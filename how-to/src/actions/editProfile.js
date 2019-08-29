import { axiosWithAuth } from "../utils/axiosWithAuth";

export const EDIT_PROFILE_START = "EDIT_PROFILE_START";
export const EDIT_PROFILE_SUCCESS = "EDIT_PROFILE_SUCCESS";
export const EDIT_PROFILE_FAILURE = "EDIT_PROFILE_FAILURE";

export const submitEditedProfile = user => dispatch => {
  console.log("IN SUBMIT EDITED PROFILE ACTION");
  dispatch({ type: EDIT_PROFILE_START });

  // axiosWithAuth()
  //   .put("url here", user)
  //   .then(res => {
  //     console.log("PUT RESPONSE:", res);
  //     dispatch({ type: EDIT_PROFILE_SUCCESS });
  //   })
  //   .catch(err => {
  //     console.log(err.response);
  //     dispatch({ type: EDIT_PROFILE_FAILURE });
  //   });
};
