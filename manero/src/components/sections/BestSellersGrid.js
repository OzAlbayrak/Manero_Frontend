import React from 'react'
import BestSellers from '../individuals/BestSellers'
import { NavLink } from 'react-router-dom'

const BestSellersGrid = ({title}) => {
  return (
    <section className="product-grid">
        <div className="home-container">
          <div className="titleBestSeller">
            <div className="title">{title}</div>
            <NavLink className="title2 " to="/bestSellers">View all <i class="icon-right fa-light fa-angle-right"></i></NavLink>
            </div>


            <div className="row row-cols-1-sm-2">
                <BestSellers />
            </div>
        </div>
    </section>
  )
}

export default BestSellersGrid