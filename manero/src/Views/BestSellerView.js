import React from 'react';
import Header from '../components/sections/Header';
import BestSellerProducts from '../components/sections/BestSellerProducts';
import MenulinkIcons from '../components/individuals/MenuLinkIcons';

export const BestSellerView = () => {
  return (
    <div>
    <Header title={"Best sellers"} hasSideIcon={true} isMenu={false} hasCart={true}/>
    <BestSellerProducts />
    <MenulinkIcons></MenulinkIcons>
    </div>
  )
}

export default BestSellerView

