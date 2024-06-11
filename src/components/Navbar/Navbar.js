import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar bg-red-200 relative">
      <div className="row flex flex-wrap align-middle justify-around py-5">
        <div className="bg-red-500">
          <ul className="flex align-middle gap-10">
            <li>
              <NavLink to="/" onClick={() => setMenuOpen(false)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={() => setMenuOpen(false)}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/view-products" onClick={() => setMenuOpen(false)}>
                View Products
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="bg-green-400">
          <h1>LOGO</h1>
        </div>
        <div>
          <ul className="flex align-middle gap-10">
            <li>
              <NavLink to="/gallery" onClick={() => setMenuOpen(false)}>
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
