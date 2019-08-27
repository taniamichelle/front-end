import { combineReducers } from "redux";

// reducers
import changePasswordReducer from "./changePassword";

const rootReducer = combineReducers({
  changePasswordReducer
});

export default rootReducer;
