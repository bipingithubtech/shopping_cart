import React from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="header">
      <nav className="nav-list">
        <ul className="frame">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/categories">Categories</NavLink>
          </li>
          <li>
            <NavLink to="/cart">
              {" "}
              Cart <FaShoppingCart />
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
