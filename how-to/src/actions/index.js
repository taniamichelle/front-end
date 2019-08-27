// action types
export const CHANGE_PASSWORD_START = "CHANGE_PASSWORD_START";
export const CHANGE_PASSWORD_SUCCESS = "CHANGE_PASSWORD_SUCCESS";
export const CHANGE_PASSWORD_FAILURE = "CHANGE_PASSWORD-FAILURE";

export const changePassword = password => {
  return {
    type: CHANGE_PASSWORD_START,
    payload: password
  };
};
