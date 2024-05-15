import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <div className="nav" data-aos="zoom-in-down" data-dos-delay="20">
        <Link to="/">
          <div className="logo">Swarupanand</div>
        </Link>
        <div
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        <div className={`links-and-buttons ${menuOpen ? "open" : ""}`}>
          <div>
            <ul>
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
              <li>
                <NavLink to="/blog" onClick={() => setMenuOpen(false)}>
                  Blog
                </NavLink>
              </li>
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
    </nav>
  );
};

export default Navbar;
