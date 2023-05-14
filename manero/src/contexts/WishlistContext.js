import { createContext, useContext, useState } from "react"

const WishlistContext = createContext();
export const useWishlistContext = () => {
  return useContext(WishlistContext);
}

const initialState = {
  favorites: [],
  totalQuantity: 0,
  totalAmount: 0
}

export const WishlistProvider = ({children}) => {

  const [favorites, setFavorites] = useState(initialState.favorites)

  const addFavorite = (product) => {
    let _favorite = favorites.find(favorite => favorite.id === product.id)
    if(_favorite)
    {
      setFavorites(favorites.map(favorite => 
        favorite.id === _favorite.id
        ? { ...favorite, quantity: favorite.quantity + 1 }
        : favorite
      ))
    } 
    else
    {
      setFavorites([...favorites, {id: product.id, name: product.name, price: product.price, image: product.imageName, quantity: 1 }])
      console.log(favorites)
    }
  }

  const removeFavorite = (product) => {
    let _favorite = favorites.find(favorite => favorite.id === product.id)
    if(_favorite.quantity > 1)
    {
      setFavorites(favorites.map(favorite => 
        favorite.id === _favorite.id
        ? { ...favorite, quantity: favorite.quantity - 1 }
        : favorite
      ))
    } 
    else
    {
      const favoriteList = favorites.filter(favorite => favorite.id !== _favorite.id)
      setFavorites(favoriteList)
      console.log(favoriteList)
    }
  }


  return <WishlistContext.Provider value = { { favorites, addFavorite, removeFavorite } }>
    {children}
  </WishlistContext.Provider>
}