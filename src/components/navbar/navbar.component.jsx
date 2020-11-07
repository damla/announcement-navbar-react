import React from "react";
import { Link } from "react-router-dom";

import "./navbar.styles.scss";
import logo from "../../logo.svg";

export default function NavBar() {
  return (
    <div className="navbar-container">
      <div className="link-container left">
        <Link to="/">test</Link>
        <Link to="/">test</Link>
        <Link to="/">test</Link>
      </div>
      <img src={logo} className="logo" alt="logo" width={150} height={75} />
      <div className="link-container right">
        <Link to="/">test</Link>
        <Link to="/">test</Link>
        <Link to="/">test</Link>
      </div>
    </div>
  );
}
