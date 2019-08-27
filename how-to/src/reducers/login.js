import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from "../actions/loginAction";

const initialState = {
  id: "",
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  isLoggingIn: false,
  isLggedIn: false,
  error: ""
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        isLoggingIn: true
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: true,
        ...action.payload
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
