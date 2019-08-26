import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppElvis from "./AppElvis";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

// reducer
import rootReducer from "./reducers";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <AppElvis />
    </Router>
  </Provider>,
  document.getElementById("root")
);
