import React from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";

import Tutorials from "./components/Tutorials";

// components
import Home from "./components/Home/Home";
import MyAccount from "./components/MyAccount/MyAccount";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route path="/myaccount" component={MyAccount} />
    </div>
  );
}

export default App;
