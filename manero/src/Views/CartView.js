import React from 'react'
import Cart from '../components/individuals/Cart'
import Header from '../components/sections/Header'
import MenuLinkIcons from '../components/individuals/MenuLinkIcons'
import Image from '../assets/images/Cart_empty.svg'
import { NavLink } from 'react-router-dom'
import { useShoppingCartContext } from '../contexts/ShoppingCartContext'



export const CartView = () => {
  return (
    <div className='container d-flex flex-column'>
      <Header title={"MANERO"} hasSideIcon={true} isMenu={true} hasCart={true}/>
        
         <Cart/>
           
           <img className='mx-auto' src={Image}/>
           <div className='vr mx-auto'></div>
           <p className='mx-auto my-3 headline'>Your Cart Is Empty!</p>
		       <p className='mx-auto text-light-color'>Looks like you haven`t made your order yet</p>
    
          <div className='mx-auto'>
          <NavLink to='/'>
            <button className='btn rounded-pill my-3 custom-btn'>
              SHOP NOW
            </button>
          </NavLink>
          </div>

          <MenuLinkIcons/>
        
      </div>
  )
}

export default CartView