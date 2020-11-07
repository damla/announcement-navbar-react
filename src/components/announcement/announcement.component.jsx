import React from "react";

import "./announcement.styles.scss";

export default function Announcement({ children }) {
  return <div className="announcement-bar-container">{children}</div>;
}
