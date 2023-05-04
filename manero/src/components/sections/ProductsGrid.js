import React from 'react'
import ProductCard from '../individuals/ProductCard'

const ProductsGrid = ({title}) => {
  return (
    <section className="product-grid">
        <div className="container">
            <div className="title">{title}</div>

            <div className="row row-col-sm-8">
                <ProductCard />
                <ProductCard />
                <ProductCard />

            </div>
        </div>
    </section>
  )
}

export default ProductsGrid