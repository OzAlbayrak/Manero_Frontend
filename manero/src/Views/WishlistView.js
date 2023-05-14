import React from 'react';
import Header from '../components/sections/Header';
import Image from '../assets/images/wishlist_empty.svg';
import MenuLinkIcons from '../components/individuals/MenuLinkIcons';
import { useEffect } from 'react';
import Wishlist from '../components/individuals/Wishlist';
import { useWishlistContext } from '../contexts/WishlistContext';


const WishListView = () => {
  const {favorites, removeFavorite} = useWishlistContext()



  return (
    <div className='container d-flex flex-column'>
        <Header
            title={'MANERO'}
            hasSideIcon={true}
            isMenu={true}
            hasCart={true}
        ></Header>

        <Wishlist/>
          <div>
      
            {
              favorites.length === 0 
              ?
              <div className='text-center'>
                <img className='password-image mx-auto' src={Image} />
                <br></br>
                <div className='vr mx-auto'></div>
                <p className='mx-auto my-3 headline'>Your Wishlist Is Empty!</p>
                <p className='mx-auto text-light-color'>You Can Add Your Favorite Products Here!</p>
              </div> 
              : 
              favorites.map(favorite => (
                <div key={favorite.id}>
                  <div>
                    <img src={favorite.image} className="rounded float-left " alt="..." />
                    {favorite.name}  -  ({favorite.price} kr)   x {favorite.quantity}
                    <button onClick={() => removeFavorite(favorite)} className='btn btn-secondary'> Remove </button>

                    
                  </div>
                </div>
                
              ))
            }  

          </div>

      <MenuLinkIcons/>
    </div>
  )
}

export default WishListView