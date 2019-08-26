import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppElvis from "./AppElvis";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <AppElvis />
  </Router>,
  document.getElementById("root")
);
