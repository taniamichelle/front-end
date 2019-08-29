import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from "../actions/loginAction";

const initialState = {
  isLoggingIn: false,
  isLoggedIn: false,
  error: ""
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      console.log("IN THE START OF REDUCER");
      return {
        ...state,
        isLoggingIn: true
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: true
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default loginReducer;
