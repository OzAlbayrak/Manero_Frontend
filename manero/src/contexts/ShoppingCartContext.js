import { createContext, useContext, useState } from "react"

const ShoppingCartContext = createContext();
export const useShoppingCartContext = () => {
  return useContext(ShoppingCartContext);
}

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0
}

export const ShoppingCartProvider = ({children}) => {

  const [items, setItems] = useState(initialState.items)

  const addItem = (product) => {
    let _item = items.find(item => item.id === product.id)
    if(_item)
    {
      setItems(items.map(item => 
        item.id === _item.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
      ))
    } 
    else
    {
      setItems([...items, {id: product.id, name: product.name, price: product.price, quantity: 1 }])
      console.log(items)
    }
  }

  const removeItem = (product) => {
    let _item = items.find(item => item.id === product.id)
    if(_item.quantity > 1)
    {
      setItems(items.map(item => 
        item.id === _item.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
      ))
    } 
    else
    {
      const itemList = items.filter(item => item.id !== _item.id)
      setItems(itemList)
      console.log(itemList)
    }
  }


  return <ShoppingCartContext.Provider value = { { items, addItem, removeItem } }>
    {children}
  </ShoppingCartContext.Provider>
}