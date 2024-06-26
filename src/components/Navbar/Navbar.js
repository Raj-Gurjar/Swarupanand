import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../data/assets/logos/swarupanand-high-resolution-logo-transparent.png";
import "./navbar.scss";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`navbar bg-[#ffffff] fixed  w-[90%]`}>
      <div className={`nav-menu ${scrolled ? "sticky" : "px-[50px] py-[12px]"} `}>
        <div className="">
          <ul className="flex align-middle gap-[90px]">
            <li className="nav-link">
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
        <div className="bg-red-400 mx-[20px]">
          <Link to="/">
            <img src={logo} alt="logo" className="h-[40px] w-[100px]" />
          </Link>
        </div>
        <div>
          <ul className="flex align-middle gap-[90px]">
            <li>
              <NavLink to="/gallery" onClick={() => setMenuOpen(false)}>
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink to="/blogs" onClick={() => setMenuOpen(false)}>
                Blogs
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
