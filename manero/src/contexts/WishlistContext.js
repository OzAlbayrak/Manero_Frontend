import { createContext, useContext, useState, useEffect } from "react"

const WishlistContext = createContext();
export const useWishlistContext = () => {
  return useContext(WishlistContext);
}


export const WishlistProvider = ({children}) => {
  const [wishlist, setWishlist] = useState([]);


  useEffect(() => {
    const storedWishlist = localStorage.getItem('wishlist');
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist));
    }
  }, []);

  const addToWishlist = (product) => {
    const updatedWishlist = [...wishlist, product];
    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  const removeFromWishlist = (productId) => {
    const updatedWishlist = wishlist.filter(
      (product) => product.id !== productId
    );
    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  const isInWishlist = (productId) => {
    return wishlist.some((product) => product.id === productId);
  };


  return <WishlistContext.Provider value = { { wishlist, addToWishlist, removeFromWishlist, isInWishlist } }>
    {children}
  </WishlistContext.Provider>
}