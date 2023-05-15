import React from 'react';
import Header from '../components/sections/Header';
import BestSellerProducts from '../components/sections/BestSellerProducts';

export const BestSellerView = () => {
  return (
    <div>
    <Header title={"Best sellers"} hasSideIcon={true} isMenu={false} hasCart={true}/>
    <BestSellerProducts />
    </div>
  )
}

export default BestSellerView

