import React from 'react'
import Cart from '../components/individuals/Cart'
import Header from '../components/sections/Header'
import MenuLinkIcons from '../components/individuals/MenuLinkIcons'
import Image from '../assets/images/Cart_empty.svg'



export const CartView = () => {
  return (
    <div className='container d-flex flex-column'>
      <Header title={"MANERO"} hasSideIcon={true} isMenu={true} hasCart={true}/>
        
         <Cart/>
           
           <img className='mx-auto' src={Image}/>
           <div className='vr mx-auto'></div>
           <p className='mx-auto my-3 headline'>Your Cart Is Empty!</p>
		       <p className='mx-auto text-light-color'>Looks like you haven`t made your order yet</p>
    
          <MenuLinkIcons/>
        
      </div>
  )
}

export default CartView