import React from 'react'
import Cart from '../components/individuals/Cart'
import Header from '../components/sections/Header'
import MenuLinkIcons from '../components/individuals/MenuLinkIcons'


export const CartView = () => {
  return (
    <div>
      <Header title={"MANERO"} hasSideIcon={true} isMenu={true} hasCart={true}/>
        
         <Cart/>

         <MenuLinkIcons/>
        
      </div>
  )
}

export default CartView