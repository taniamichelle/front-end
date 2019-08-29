import { combineReducers } from "redux";

// reducers
import editProfileReducer from "./editProfileReducer";
import tutorialReducer from "./tutorialReducer";
import loginReducer from "./loginReducer";
import fetchUserDataReducer from "./fetchUserDataReducer";

const rootReducer = combineReducers({
  loginReducer,
  fetchUserDataReducer,
  editProfileReducer,
  tutorialReducer
});

export default rootReducer;
