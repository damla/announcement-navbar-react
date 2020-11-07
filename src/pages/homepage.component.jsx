import React from "react";

import NavBar from "../components/navbar/navbar.component";
import Announcement from "../components/announcement/announcement.component";

export default function HomePage() {
  return (
    <div className="homepage-container">
      <Announcement></Announcement>
      <NavBar />
    </div>
  );
}
