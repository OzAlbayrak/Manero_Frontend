import React from 'react';
import Header from '../components/sections/Header';
import Image from '../assets/images/wishlist_empty.svg';
import MenuLinkIcons from '../components/individuals/MenuLinkIcons';


const WishListView = () => {
  return (
    <div className='container d-flex flex-column'>
        <Header
            title={'MANERO'}
            hasSideIcon={true}
            isMenu={true}
            hasCart={true}
        ></Header>
        <img className='password-image mx-auto' src={Image} />

        <div className='vr mx-auto'></div>
        <p className='mx-auto my-3 headline'>Your Wishlist Is Empty!</p>
		<p className='mx-auto text-light-color'>You Can Add Your Favorite Products Here!</p>
      <MenuLinkIcons/>
    </div>
  )
}

export default WishListView