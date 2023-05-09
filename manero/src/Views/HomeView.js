import React from 'react'
import Showcase from '../components/sections/Showcase'
import Showcase2 from '../components/sections/Showcase2'
import ProductsGrid from '../components/sections/ProductsGrid'
import PromoVoucher from '../components/sections/PromoVoucher'
import BestSellersGrid from '../components/sections/BestSellersGrid'
import SideMenu from '../components/individuals/SideMenu'
import Menu from '../components/individuals/Menu'
import MenuLinkIcons from '../components/individuals/MenuLinkIcons'

const HomeView = () => {
  return (
    <div>
      
      <SideMenu></SideMenu>
      <Showcase/>
      <BestSellersGrid title="Best Sellers"/>
      <Showcase2/>
      <ProductsGrid title="Featured Products"/>
      
      <PromoVoucher />
      <MenuLinkIcons></MenuLinkIcons>
    </div>
  )
}

export default HomeView