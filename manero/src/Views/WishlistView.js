import React from 'react';
import Header from '../components/sections/Header';
import Image from '../assets/images/wishlist_empty.svg';
import MenuLinkIcons from '../components/individuals/MenuLinkIcons';
import Wishlist from '../components/individuals/Wishlist';
import { useWishlistContext } from '../contexts/WishlistContext';
import { useShoppingCartContext } from '../contexts/ShoppingCartContext';
import RatingStars from '../components/individuals/RatingStars'


const WishListView = () => {
  const {favorites, removeFavorite} = useWishlistContext()
  const {addItem} = useShoppingCartContext()

  return (
    <div className="">
        <Header
            title={'Wishlist'}
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
                  <div className="wishlist-container">
                    <div className="wishlist-img">
                      <img src={favorite.image} alt="..." />
                    </div>
                    <div className="wishlist-info">
                      <div>{favorite.name}</div>
                      <div>${favorite.price}</div>
                      <RatingStars/>
                    </div>
                    <div className="wishlist-btns">
                    <button id="heart" className="menu-link" onClick={() => removeFavorite(favorite)}>
                    <i className="fa-solid fa-heart"></i>
                    </button>
                    <button id="bag" className="menu-link" onClick={() => addItem(favorite)}>
                      <i className="fa-light fa-bag-shopping"></i>
                    </button>
                    </div>                   
                  </div>
                  <hr/>
                </div>
                
              ))
            }  

          </div>

      <MenuLinkIcons/>
    </div>
  )
}

export default WishListView