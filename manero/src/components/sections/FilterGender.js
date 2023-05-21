import React, { useState, useEffect } from 'react'
import ProductCard from '../individuals/ProductCard';

const FilterGender = () => {
    const [products, setProducts] = useState([])
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState(products);

    //fetch products
    const getProducts = async () => {
        const result = await fetch('https://sijb-cms22-backend.azurewebsites.net/api/Products/FeaturedProducts/100')

        setProducts(await result.json())
    }

    // filter gender function
    let filters = ["Men", "Women", "Kids", "Accessories"];

    const handleFilterButtonClick = (selectedGender) => {
        if (selectedFilters.includes(selectedGender)) {
          let filters = selectedFilters.filter((el) => el !== selectedGender);
          setSelectedFilters(filters);
        } else {
          setSelectedFilters([...selectedFilters, selectedGender]);
        }
      };

      useEffect(() => {
        getProducts();
        filterProducts();
      }, [selectedFilters]);
    
      const filterProducts = () => {
        if (selectedFilters.length > 0) {
          let tempProducts = selectedFilters.map((selectedGender) => {
            let temp = products.filter((product) => product.gender === selectedGender);
            return temp;
          });
          setFilteredProducts(tempProducts.flat());
        } else {
          setFilteredProducts([...products]);
        }
      };
  return (
    <div>
        <div className='genders-container'>
            <div className="gender-buttons">
                {filters.map((gender, idx) => (
                    <button
                        onClick={() => handleFilterButtonClick(gender)}
                        className={`gender-button ${
                        selectedFilters?.includes(gender) ? "active" : ""
                        }`}
                        key={`filters-${idx}`}
                    >
                        {gender}
                    </button>
                ))}
            </div>
        </div>

          <div className="search-column-container">
            <div className="category-buttons">
                {filteredProducts.map((product, idx) => (
              <div key={`products-${idx}`} className="search-column1">
                <button
                  onClick={() => handleFilterButtonClick(product.category)}
                  className={`category-button ${
                  selectedFilters?.includes(product.category) ? "active" : ""
                  }`}
                  key={`filters-${idx}`}
                >
                  {product.category}
                </button>
              </div>
            ))}
                </div>
          </div>

          <div className="filtred-products-container">
            <div className="filtred-products">
                {/*{filteredProducts.map(product => (<ProductCard key={product.id} product={product} />))}*/}
            </div>
        </div> 

        </div>  
  )
}

export default FilterGender