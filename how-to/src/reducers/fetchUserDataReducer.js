import {
  FETCH_USER_DATA_START,
  FETCH_USER_DATA_SUCCESS,
  FETCH_USER_DATA_FAILURE
} from "../actions/fetchUserData";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  username: "",
  password: "",
  isFetching: false,
  error: ""
};

const fetchUserDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_DATA_START:
      return {
        ...state,
        isFetching: true,
        error: ""
      };

    case FETCH_USER_DATA_SUCCESS:
      console.log("the payload", action.payload);
      return {
        ...state,
        isFetching: false,
        ...action.payload
      };

    case FETCH_USER_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: "Error loading user data. Please try again later."
      };

    default:
      return state;
  }
};

export default fetchUserDataReducer;
