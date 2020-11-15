import React from "react";

import NavBar from "./components/navbar/navbar.component";
import Announcement from "./components/announcement/announcement.component";

import "./App.scss";

function App() {
  return (
    <>
      <div className="container">
        <Announcement>
          <a href="mailto:me@damlakoksal.com">me@damlakoksal.com</a>
          <a href="tel:+902122222222">+90 (212) 222 22 22</a>
        </Announcement>
        <NavBar />
      </div>
      <div className="container pink"></div>
    </>
  );
}

export default App;
