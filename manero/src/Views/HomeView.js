import React from 'react'
import Header from '../components/sections/Header'
import Showcase from '../components/sections/Showcase'
import Showcase2 from '../components/sections/Showcase2'
import ProductsGrid from '../components/sections/ProductsGrid'
import PromoVoucher from '../components/sections/PromoVoucher'
import PromoCodes from '../components/sections/Promocodes'

const HomeView = () => {
  return (
    <div>
      <Showcase/>
      <ProductsGrid title="Best Sellers"/>
      <Showcase2/>
      <ProductsGrid title="Featured Products"/>
      <PromoCodes />
    </div>
  )
}

export default HomeView