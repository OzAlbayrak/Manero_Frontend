import React from 'react'
import { NavLink } from 'react-router-dom'

const MenuLinkIcons = () => {
  return (
    <nav className="menuLinkIcons">
      <NavLink to="/HomeView" className="menu-link"><i class="fa-light fa-house"></i></NavLink>
      <NavLink to="/search" className="menu-link"><i class="fa-light fa-magnifying-glass"></i></NavLink>
      <NavLink to="/cart" className="menu-link"><i class="fa-light fa-bag-shopping"></i></NavLink>
      <NavLink to="/wishlist" className="menu-link"><i class="fa-light fa-heart"></i></NavLink>
      <NavLink to="/profile" className="menu-link"><i class="fa-light fa-user"></i></NavLink>
      </nav>

  )
}

export default MenuLinkIcons