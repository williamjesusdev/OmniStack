import React from "react";
import "./App.css";

import logo from "./assets/logo.svg";

import Routes from "./routes";

function App() {
  return (
    <div className="container">
      <a href="/dashboard">
        <img src={logo} alt="AirCnC Logo" />
      </a>

      <div className="content">
        <Routes />
      </div>
    </div>
  );
}

export default App;
