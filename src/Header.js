import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";

import "./Header.css";
import { useDataLayerValue } from "./DataLayer";

function Header() {
  const [{ user }, dispatch] = useDataLayerValue();
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input
          type="text"
          autoFocus
          placeholder="Search for Artists, Songs, or Podcasts"
        />
      </div>
      <div className="header__right">
        <h4>{user?.display_name}</h4>
        <Avatar src={user?.images[0]?.url} alt="Q" />
      </div>
    </div>
  );
}

export default Header;
