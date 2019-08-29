import {
  EDIT_PROFILE_START,
  EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_FAILURE
} from "../actions/editProfile";

const initialState = {
  isEditing: false,
  error: ""
};

const changePasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_PROFILE_START:
      return {
        ...state,
        isEditing: true,
        error: ""
      };

    case EDIT_PROFILE_SUCCESS:
      return {
        ...state,
        isEditing: false
      };

    case EDIT_PROFILE_FAILURE:
      return {
        ...state,
        isEditing: false,
        error: "Something went wrong. Please try again."
      };

    default:
      return state;
  }
};

export default changePasswordReducer;
