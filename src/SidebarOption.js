import React from "react";

import "./SidebarOption.css";

function SidebarOption({ title, Icon }) {
  return (
    <div className="sidebarOption">
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
      {/* <hr /> */}
    </div>
  );
}

export default SidebarOption;
