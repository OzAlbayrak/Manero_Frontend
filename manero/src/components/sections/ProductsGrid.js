import React from 'react'
import ProductList from '../individuals/ProductList'

const ProductsGrid = ({title}) => {
  return (
    <section className="product-grid">
        <div className="container">
            <div className="title">{title}</div>

            <div className="row row-cols-1-sm-2">
                <ProductList />
            </div>
        </div>
    </section>
  )
}

export default ProductsGrid