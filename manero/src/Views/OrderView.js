import React from 'react'
import { useShoppingCartContext } from '../contexts/ShoppingCartContext'
import { useEffect, useState } from 'react'
import Header from '../components/sections/Header'
import MenuLinkIcons from '../components/individuals/MenuLinkIcons'
import { NavLink } from 'react-router-dom'


const OrderView = () => {

  const { items, addItem, removeItem } = useShoppingCartContext()
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

    if (start === true) {
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
        title={'Order'}
        hasSideIcon={true}
        isMenu={true}
        hasCart={true}
      ></Header>
      {
        items.map(item => (
          <div key={item.id}>
            <div className='order-container'>
              <img src={item.image} className="order-img" alt="..." />
              <div className='order-info'>
                <div className='order-info-name'>
                  {item.name}
                </div>
                <div className='order-info-price'>
                  ${item.price}
                </div>
              </div>
              <div className='order-btns'>
                <button onClick={() => increaseTotItem(item)} className='btn btn-secondary'> + </button>
                <div>{item.quantity}</div>
                <button onClick={() => decreaseTotItem(item)} className='btn btn-secondary'> - </button>
              </div>
            </div>
          </div>
        ))
      }
      <hr />
      <div>Promocode applied!!!!!!!!!!!</div>
      <div className='subtotal'>
        <div>
          Subtotal
        </div>
        <div>
          ${totPrice}
        </div>
      </div>
      <p>Discount</p>
      <p>Delivery</p>
      <hr />
      <div className='order-total-price'>
        <div>Total</div>
        <div>${totPrice}</div>
      </div>

      <div className='mx-auto order-btn-container'>
        <NavLink to='/Checkout'>
          <button className='btn rounded-pill my-3 custom-btn'>
            Confirm Order
          </button>
        </NavLink>
      </div>

      <MenuLinkIcons className='menu-icons' />
    </div>
  )
}

export default OrderView