import React from 'react'
import { NavLink } from 'react-router-dom'

const MenuLink = ({name, link}) => {
  return (
    <NavLink to={link} className="menu-link">{name}</NavLink>
  )
}

export default MenuLink