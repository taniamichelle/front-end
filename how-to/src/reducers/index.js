import { combineReducers } from "redux";

// reducers
import changePasswordReducer from "./changePassword";
import tutorialReducer from './tutorialReducer';

const rootReducer = combineReducers({
  changePasswordReducer,
  tutorialReducer
});

export default rootReducer;
