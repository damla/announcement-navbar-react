import React, { useLayoutEffect } from "react";

import "./navbar.styles.scss";
import logo from "../../logo.svg";
const classNames = require("classnames");

export default function NavBar() {
  const [scrolled, setScrolled] = React.useState(false);

  useLayoutEffect(() => {
    const handleScroll = () =>
      window.scrollY > 0 ? setScrolled(true) : setScrolled(false);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={classNames("navbar-container", { scrolled: scrolled })}>
      <div className="link-container left">
        <a href="/">test</a>
        <a href="/">test</a>
        <a href="/">test</a>
      </div>
      <img src={logo} className="logo" alt="logo" width={150} height={75} />
      <div className="link-container right">
        <a href="/">test</a>
        <a href="/">test</a>
        <a href="/">test</a>
      </div>
    </nav>
  );
}
