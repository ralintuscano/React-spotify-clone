import React from "react";

import "./sidebarOption.css";

function sidebarOption({ title, Icon }) {
  return (
    <div className="sidebarOption">
      <p>{title}</p>
    </div>
  );
}

export default sidebarOption;
