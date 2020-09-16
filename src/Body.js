import React from "react";

import "./Body.css";
import Header from "./Header";

function Body({ spotify }) {
  return (
    <div className="Body">
      <Header spotify={spotify} />

      <div className="body__info">
        <img src="" alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>Description...</p>
        </div>
      </div>
    </div>
  );
}

export default Body;
