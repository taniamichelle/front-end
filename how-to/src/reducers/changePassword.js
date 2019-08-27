import {
  CHANGE_PASSWORD_START,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAILURE
} from "../actions/changePasswordAction";

const initialState = {
  password: "",
  isChangingPassword: false,
  message: ""
};

const changePasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PASSWORD_START:
      return {
        ...state,
        password: action.payload
      };

    default:
      return state;
  }
};

export default changePasswordReducer;
