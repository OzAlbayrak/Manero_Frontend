import React from 'react'
import Showcase from '../components/sections/Showcase'
import Showcase2 from '../components/sections/Showcase2'
import ProductsGrid from '../components/sections/ProductsGrid'
import PromoVoucher from '../components/sections/PromoVoucher'
import BestSellersGrid from '../components/sections/BestSellersGrid'
import MenuLinkIcons from '../components/individuals/MenuLinkIcons'
import Header from '../components/sections/Header'
import Logo from '../components/individuals/Logo'
import SideMenu from '../components/individuals/SideMenu'


const HomeView = () => {
  return (
    <div>
      <Header title={"MANERO"} hasSideIcon={true} isMenu={true} hasCart={true}/>
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
