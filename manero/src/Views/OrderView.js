import React from 'react'
import { useShoppingCartContext } from '../contexts/ShoppingCartContext'
import { useEffect, useState } from 'react'
import Header from '../components/sections/Header'
import MenuLinkIcons from '../components/individuals/MenuLinkIcons'

const OrderView = () => {

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
          title={'Order'}
          hasSideIcon={true}
          isMenu={true}
          hasCart={true}
      ></Header>
      {
      items.map(item => (
        <div key={item.id}>
          <div className='d-flex justify-content-center align-items-center'>
            <img src={item.image} className="rounded float-left" alt="..." />
            {item.name}  -  ({item.price} kr)   x {item.quantity}
            <button onClick={() => increaseTotItem(item)} className='btn btn-secondary'> + </button>
            <button onClick={() => decreaseTotItem(item)} className='btn btn-secondary'> - </button>
          </div>
        </div>
      ))
    }
    TotItem: {totAmountOfItems}
    TotPrice: {totPrice}
    
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>

    <MenuLinkIcons/>
    </div>
  )
}

export default OrderView