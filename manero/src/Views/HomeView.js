import React from 'react'
import Showcase from '../components/sections/Showcase'
import Showcase2 from '../components/sections/Showcase2'
import ProductsGrid from '../components/sections/ProductsGrid'

import BestSellersGrid from '../components/sections/BestSellersGrid'
import MenuLinkIcons from '../components/individuals/MenuLinkIcons'
import Header from '../components/sections/Header'



const HomeView = () => {
  return (
    <div>
      <Header title={"MANERO"} hasSideIcon={true} isMenu={true} hasCart={true}/>
      <Showcase/>
      <BestSellersGrid title="Best Sellers"/>
      <Showcase2/>
      <ProductsGrid title="Featured Products"/>
      <MenuLinkIcons></MenuLinkIcons>
    </div>
  )
}

export default HomeView
