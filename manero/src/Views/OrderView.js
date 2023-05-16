import React from 'react'
import { useShoppingCartContext } from '../contexts/ShoppingCartContext'
import { useEffect } from 'react'
import Header from '../components/sections/Header'
import MenuLinkIcons from '../components/individuals/MenuLinkIcons'

const OrderView = () => {

  const {items, addItem, removeItem} = useShoppingCartContext()

  useEffect(() => {
    //getProducts()
    localStorage.setItem('items', JSON.stringify(items));
    console.log(items)
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
            <button onClick={() => addItem(item)} className='btn btn-secondary'> + </button>
            <button onClick={() => removeItem(item)} className='btn btn-secondary'> - </button>
            

            
          </div>
        </div>
        
      ))
    }
    <MenuLinkIcons/>
    </div>
  )
}

export default OrderView