import React from "react";
import "./App.css";
import Tutorials from './components/Tutorials';

// components
import MyAccount from "./components/MyAccount/MyAccount";

function App() {
  return (
    <div className="App">
      <h1>How-To App</h1>
      <MyAccount />
    </div>
  );
}

export default App;
