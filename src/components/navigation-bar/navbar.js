import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-links">
        <NavLink
          exact
          className="navbar-link"
          activeClassName="selected"
          to="/"
        >
          Knavigation
        </NavLink>
        <NavLink className="navbar-link" activeClassName="selected" to="/Home">
          K-Station
        </NavLink>

        <NavLink className="navbar-link" activeClassName="selected" to="/bio">
          K-Bio
        </NavLink>

        <NavLink
          className="navbar-link"
          activeClassName="selected"
          to="/interests"
        >
          K-interest
        </NavLink>
        <NavLink
          className="navbar-link"
          activeClassName="selected"
          to="/Contacts"
        >
          Kontacts
        </NavLink>
      </div>
    </div>
  );
}
