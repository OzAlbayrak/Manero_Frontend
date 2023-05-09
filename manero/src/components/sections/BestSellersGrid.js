import React from 'react'
import BestSellers from '../individuals/BestSellers'

const BestSellersGrid = ({title}) => {
  return (
    <section className="product-grid">
        <div className="container">
            <div className="title">{title}</div>

            <div className="row row-cols-1-sm-2">
                <BestSellers />
            </div>
        </div>
    </section>
  )
}

export default BestSellersGrid