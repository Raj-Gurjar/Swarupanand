import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

export default function NavbarSmall() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleMenuToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div className="navbar-small">
      <div className={`${!toggleMenu ? "navbar-small-btn" : "hidden"}`}>
        <h1 onClick={() => handleMenuToggle()} className="menu-btn">
          Menu
        </h1>
      </div>

      <div className={` ${toggleMenu ? "small-menu-container" : "hidden"}`}>
        <div onClick={() => handleMenuToggle()} className="close-menu">
          <span>
            <RxCross2 />
          </span>
        </div>

        <div className="menu-links">
          <div className="bold-links">
            <div>
              <Link to="/" onClick={() => handleMenuToggle()}>Home</Link>
            </div>
            <div>
              <Link to="/about" onClick={() => handleMenuToggle()}>About</Link>
            </div>
            <div>
              <Link to="/view-products" onClick={() => handleMenuToggle()}>Products</Link>
            </div>
            <div>
              <Link to="/gallery" onClick={() => handleMenuToggle()}>Gallery</Link>
            </div>
            <div>
              <Link to="/blogs" onClick={() => handleMenuToggle()}>Blogs</Link>
            </div>
            <div>
              <Link to="/contact" onClick={() => handleMenuToggle()}>Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
