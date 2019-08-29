import { axiosWithAuth } from "../utils/axiosWithAuth";

export const FETCH_USER_DATA_START = "FETCH_USER_DATA_START";
export const FETCH_USER_DATA_SUCCESS = "FETCH_USER_DATA_SUCCESS";
export const FETCH_USER_DATA_FAILURE = "FETCH_USER_DATA_FAILURE";

export const fetchUserData = () => dispatch => {
  dispatch({ type: FETCH_USER_DATA_START });

  axiosWithAuth()
    .get("https://how-to-bw.herokuapp.com/api/users/currentuser")
    .then(res => {
      console.log("response in fetch action", res);
      dispatch({ type: FETCH_USER_DATA_SUCCESS, payload: res.data });
    })
    .catch(err => console.log(err.response));
};
