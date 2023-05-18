import React, { useEffect, useState } from 'react';
import ProductCard from '../individuals/ProductCard';


const BestSellerProducts = () => {
  const [sortBy, setSortBy] = useState('asc')
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    const result = await fetch ('https://sijb-cms22-backend.azurewebsites.net/api/Products/BestSellers/20')
    const data = await result.json()
    setProducts(data)
  }

  useEffect(() => {
    getProducts()

    if (sortBy === 'asc'){
      const sorted = [...products].sort((a, b) => a.price - b.price)
      setProducts(sorted)
    }
    else if (sortBy === 'dsc') {
      const sorted = [...products].sort((a, b) => b.price - a.price)
      setProducts(sorted)
    }
    console.log(sortBy)
  }, [sortBy, setSortBy, getProducts])
  
  
  
  return (
    <section className="bestproduct-grid">
      <div className="bestproductscontainer">
        <section>
          <div className="salesBtnContainer">
            <button className="salesIcons"><i className="fa-light fa-sliders-up"></i> Filters</button>
            <div className="dropdown">
              <button className="dropdownbutton" >Sorting by <i class="icon fa-light fa-angle-down"></i></button>       
              <ul className="dropdown-content" >
                <li>
                  <button onClick={() => setSortBy('dsc')} className="dropdownitems" >price (Highest)</button>
                </li>
                <li>
                  <button onClick={() => setSortBy('asc')} className="dropdownitems">Price (Lowest)</button>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <div className="row row-cols-1-sm-2">
          <div className='bestproductsitem-container'>
            {
              products.map(product => (<ProductCard key={product.id} product={product} />))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default BestSellerProducts
