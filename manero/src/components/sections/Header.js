import React from 'react'
import Logo from '../individuals/Logo'
import Menu from '../individuals/Menu'
import Cart from '../individuals/Cart'

const Header = () => {
  return (
    <section className="header container">
        <Menu/>
        <Logo/>
        <Cart/>
    </section>
  )
}

export default Header