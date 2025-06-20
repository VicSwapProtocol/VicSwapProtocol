import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import logo from "../public/logo.svg";

const App = () => (
  <div className="app">
    <img src={logo} alt="Vic Swap Logo" width="120" />
    <h1>Welcome to Vic Swap Protocol</h1>
    <p>Web3 platform coming soon...</p>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
