import React from 'react'
import Cart from '../components/individuals/Cart'
import Header from '../components/sections/Header'
import MenuLinkIcons from '../components/individuals/MenuLinkIcons'
import Image from '../assets/images/Cart_empty.svg'
import { NavLink } from 'react-router-dom'
import { useShoppingCartContext } from '../contexts/ShoppingCartContext'
import { useEffect } from 'react'
import Rating from '../components/individuals/Rating'



export const CartView = () => {
  const {items, addItem, removeItem} = useShoppingCartContext()

  useEffect(() => {
    //getProducts()
    localStorage.setItem('items', JSON.stringify(items));
    console.log(items)
}, [items])

  return (
    <div className='container d-flex flex-column'>
      <Header title={"MANERO"} hasSideIcon={true} isMenu={true} hasCart={true}/>
        
        <Cart/>
          <img className='mx-auto' src={Image}/>
          <div className='vr mx-auto'></div>
          <div>
      
            {
              items.length === 0 
              ?
              <div className='text-center'>
                <p className='mx-auto my-3 headline'>Your Cart Is Empty!</p>
                <p className='mx-auto text-light-color'>Looks like you haven`t made your order yet</p>
              </div> 
              : 
              items.map(item => (
                <div key={item.id}>
                  <div>
                    <img src={item.image} className="rounded float-left " alt="..." />
                    {item.name}
                    {item.price} kr   
                    x {item.quantity}
                    <button onClick={() => addItem(item)}>+</button>
                    <button onClick={() => removeItem(item)}>-</button>
                    <Rating />

                    
                  </div>
                </div>
                
              ))
            }  

          </div>
 
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