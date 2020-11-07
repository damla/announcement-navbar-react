import React from "react";

import NavBar from "../components/navbar/navbar.component";
import Announcement from "../components/announcement/announcement.component";
import { Link } from "react-router-dom";

import "./homepage.styles.scss";

export default function HomePage() {
  return (
    <>
      <div className="container">
        <Announcement>
          <Link to="mailto:me@damlakoksal.com">me@damlakoksal.com</Link>
          <Link to="tel:+902122222222">+90 (212) 222 22 22</Link>
        </Announcement>
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
