import React from "react";
import { Link } from "react-router-dom";

import logo from "../../logo.svg";

export default function Nav() {
  return (
    <div className="navbar-container">
      <img src={logo} className="App-logo" alt="logo" />
      <div className="link-container">
        <Link to="/">test</Link>
        <Link to="/">test</Link>
        <Link to="/">test</Link>
      </div>
    </div>
  );
}
