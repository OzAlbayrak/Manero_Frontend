
import React from 'react'
import MenuLink from './MenuLink'

const MenuLinkIcons = () => {
  return (
    <div className="menulinkicons">
      <MenuLink name={(<i className="fa-solid fa-house" style="color: #707070;"></i>)}  link="/" />
      <MenuLink name={(<i className="fa-sharp fa-regular fa-magnifying-glass" style="color: #707070;"></i>)}  link="/search" />
      <MenuLink name={(<i className="fa-light fa-bag-shopping" style="color: #707070;"></i>)}  link="/cart" />
      <MenuLink name={(<i className="fa-sharp fa-light fa-heart" style="color: #707070;"></i>)}  link="/wishlist" />
      <MenuLink name={(<i className="fa-light fa-circle-user" style="color: #707070;"></i>)} link="/profile" />
    </div>
  )
}

export default MenuLinkIcons