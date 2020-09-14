import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";

import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input
          type="text"
          autofocus
          placeholder="Search for Artists, Songs, or Podcasts"
        />
      </div>
      <div className="header__right">
        <h4>Querty</h4>
        <Avatar src="" alt="Q" />
      </div>
    </div>
  );
}

export default Header;
