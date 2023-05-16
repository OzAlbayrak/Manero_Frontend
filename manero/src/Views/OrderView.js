import React from 'react'
import { useShoppingCartContext } from '../contexts/ShoppingCartContext'
import { useEffect } from 'react'
import Rating from '../components/individuals/Rating'

const OrderView = () => {

  const {items, addItem, removeItem} = useShoppingCartContext()

  useEffect(() => {
    //getProducts()
    localStorage.setItem('items', JSON.stringify(items));
    console.log(items)
  }, [items])

  return (
    
    <div>
        {
    items.map(item => (
        <div key={item.id}>
          <div>
            <img src={item.image} className="rounded float-left " alt="..." />
            {item.name}  -  ({item.price} kr)   x {item.quantity}
            <button onClick={() => addItem(item)} className='btn btn-secondary'> + </button>
            <button onClick={() => removeItem(item)} className='btn btn-secondary'> - </button>
            <Rating />

            
          </div>
        </div>
        
      ))
    }
    </div>
  )
}

export default OrderView