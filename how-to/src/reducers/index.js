import { combineReducers } from "redux";

// reducers
import changePasswordReducer from "./changePasswordReducer";
import tutorialReducer from "./tutorialReducer";
import loginReducer from "./loginReducer";
import fetchUserDataReducer from "./fetchUserDataReducer";

const rootReducer = combineReducers({
  loginReducer,
  fetchUserDataReducer,
  changePasswordReducer,
  tutorialReducer
});

export default rootReducer;
