import React from "react";
import NavbarLarge from "./NavbarLarge";
import NavbarSmall from "./NavbarSmall";
import "./Navbar.scss";

export default function Navbar() {

  return (
    <div className="navbar">
      <div className="navbar-big">
        <NavbarLarge />
      </div>
      <div className="navbar-small">
        <NavbarSmall />
      </div>
    </div>
  );
}
