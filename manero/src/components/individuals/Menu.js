import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <nav className="menu">
      <NavLink to="/" className="menu-link">Home</NavLink>
      <NavLink to="/search" className="menu-link">Search</NavLink>
      <NavLink to="/cart" className="menu-link">Cart</NavLink>
      <NavLink to="/wishlist" className="menu-link">Wishlist</NavLink>
      <NavLink to="/profile" className="menu-link">Profile</NavLink>
      </nav>
  )
}

export default Menu