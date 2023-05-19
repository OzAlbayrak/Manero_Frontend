import React from 'react'
import { useShoppingCartContext } from '../contexts/ShoppingCartContext'
import { useEffect, useState } from 'react'
import Header from '../components/sections/Header'
import MenuLinkIcons from '../components/individuals/MenuLinkIcons'
import { NavLink } from 'react-router-dom'

const CheckoutView = () => {

  const {items, addItem, removeItem} = useShoppingCartContext()
  const [totAmountOfItems, setTotAmountOfItems] = useState(0);
  const [totPrice, setTotPrice] = useState(0);
  const [start, setStart] = useState(true);

  const increaseTotItem = ((item) => {
    setTotAmountOfItems(totAmountOfItems + 1);
    setTotPrice(totPrice + item.price);
    addItem(item);
  })

  const decreaseTotItem = ((item) => {
    setTotAmountOfItems(totAmountOfItems - 1);
    setTotPrice(totPrice - item.price);
    removeItem(item);
  })

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
    console.log(items)

    if(start === true)
    {
      let pr = 0;
      let itm = 0;
      for (let i = 0; i < items.length; i++) {
        itm += items[i].quantity;
        pr += (items[i].price * items[i].quantity);   
      }
      setTotAmountOfItems(itm)
      setTotPrice(pr)
      setStart(false)
    }
  }, [items])


  return (
    <div className='container d-flex flex-column'>
      <Header
          title={'Checkout'}
          hasSideIcon={true}
          isMenu={true}
          hasCart={true}
      ></Header>
      {
      items.map(item => (
        <div key={item.id}>
          <div className='d-flex justify-content-center align-items-center'>
            {item.name}  -  ({item.price} kr)   x {item.quantity}
          </div>
        </div>
      ))
    }
    
    <p>TotItem: {totAmountOfItems}</p>
    <p>TotPrice: {totPrice}</p>
    <p>Discount: None</p>
    {
        totPrice >= 100 
        ?
        <p>Delivery: Free</p>
        :
        <p>Delivery: 49$</p>
    }
    
 

    <div className='mx-auto'>
        <NavLink to='/'>
        <button className='btn rounded-pill my-3 custom-btn'>
                    Confirm Order
        </button>
        </NavLink>
    </div>
    
    <p>x</p>
    <p>x</p>
    <p>x</p>
 

    <MenuLinkIcons/>
    </div>
  )
}

export default CheckoutView