import React from "react";
import { NavLink } from "react-router-dom";

const MenuLinkIcons = () => {
  return (
    <nav className="menuLinkIcons">
      <NavLink to="/" className="menu-link">
        <i className="fa-light fa-house"></i>
      </NavLink>
      <NavLink to="/Search" className="menu-link">
        <i className="fa-light fa-magnifying-glass"></i>
      </NavLink>
      <NavLink to="/Cart" className="menu-link">
        <i className="fa-light fa-bag-shopping"></i>
      </NavLink>
      <NavLink to="/Wishlist" className="menu-link">
        <i className="fa-light fa-heart"></i>
      </NavLink>
      <NavLink to="/profile" className="menu-link">
        <i className="fa-light fa-user"></i>
      </NavLink>
    </nav>
  );
};

export default MenuLinkIcons;
