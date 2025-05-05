import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import ExpanMoreIcon from "@mui/icons-material/ExpandMore";
import Avatar from '@mui/material/Avatar';

function Header() {
  return (
    <div className="header">
      <img className="header__icon" src="/airbnb-logo.png" />

      <div className="header__center">
        <input type="text" />
        <SearchIcon />
      </div>

      <div className="header__right">
        <p>Become a host</p>
        <LanguageIcon />
        <ExpanMoreIcon />
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
