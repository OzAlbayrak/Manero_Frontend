import React from 'react'
import MenuLink from './MenuLink'

const Menu = () => {
  return (
    <nav className="cart">
            <MenuLink name={(<i className="fa-light fa-bag-shopping"></i>)}  link="/cart" />
    </nav>
  )
}

export default Menu