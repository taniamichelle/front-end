import {
  REGISTER_USER_START,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE
} from "../actions/registerUser";

const initialState = {
  isRegistering: false,
  error: ""
};

const registerUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER_START:
      return {
        ...state,
        isRegistering: true,
        error: ""
      };

    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        isRegistering: false
      };

    case REGISTER_USER_FAILURE:
      return {
        ...state,
        isRegistering: false,
        error:
          "Something went wrong with the registration process. Please try again."
      };
    default:
      return state;
  }
};

export default registerUserReducer;
