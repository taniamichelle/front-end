import { combineReducers } from "redux";

// reducers
import changePasswordReducer from "./changePasswordReducer";
import tutorialReducer from "./tutorialReducer";
import loginReducer from "./loginReducer";

const rootReducer = combineReducers({
  loginReducer,
  changePasswordReducer,
  tutorialReducer
});

export default rootReducer;
