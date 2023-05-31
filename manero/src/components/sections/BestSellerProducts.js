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

  const sortProducts = () => {
    if (sortBy === 'asc') {
      const sorted = [...products].sort((a, b) => a.price - b.price);
      setProducts(sorted);
    } else if (sortBy === 'dsc') {
      const sorted = [...products].sort((a, b) => b.price - a.price);
      setProducts(sorted);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    sortProducts();
  }, [sortBy]);

  console.log(sortBy)
  
  
  return (
    <section className="bestproduct-grid">
      <div className="bestproductscontainer">
        <section>
          <div className="salesBtnContainer">
            <button className="salesIcons"><i className="fa-light fa-sliders-up"></i> Filters</button>
            <div className="dropdown">
              <button className="dropdownbutton" >Sorting by <i className="fa-light fa-angle-down"></i></button>       
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
        <div >
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
