import React from "react";
import { useLocation } from "react-router-dom";
import NavbarLarge from "./NavbarLarge";
import NavbarSmall from "./NavbarSmall";
import "./Navbar.scss";

export default function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

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
