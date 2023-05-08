import React from 'react'
import Showcase from '../components/sections/Showcase'
import Showcase2 from '../components/sections/Showcase2'
import ProductsGrid from '../components/sections/ProductsGrid'
import PromoVoucher from '../components/sections/PromoVoucher'
import BestSellersGrid from '../components/sections/BestSellersGrid'


const HomeView = () => {
  return (
    <div>
      <Showcase/>
      <BestSellersGrid title="Best Sellers"/>
      <Showcase2/>
      <ProductsGrid title="Featured Products"/>
      <PromoCodes />
    </div>
  )
}

export default HomeView