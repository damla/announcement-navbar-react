import React from "react";

import NavBar from "../components/navbar/navbar.component";
import Announcement from "../components/announcement/announcement.component";
import { Link } from "react-router-dom";

import "./homepage.styles.scss";

export default function HomePage() {
  return (
    <>
      <div className="container">
        {/* In case of adding extra Announcement components, navbar.styles.scss need to be edited.
         * Instruction:
         * Open navbar.styles.scss
         * Find .navbar-container and top attribute in it
         * top: calc(1 * (0.4rem + 30px)); -> Change the number 1 in the calculation with the count of your
         * announcement component.
         */}
        <Announcement>
          <Link to="mailto:me@damlakoksal.com">me@damlakoksal.com</Link>
          <Link to="tel:+902122222222">+90 (212) 222 22 22</Link>
        </Announcement>
        <NavBar />
      </div>
      <div className="container pink"></div>
    </>
  );
}
