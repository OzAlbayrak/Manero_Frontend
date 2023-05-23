import React, { useState, useEffect } from 'react';
import Header from '../components/sections/Header'
import MenuLinkIcons from '../components/individuals/MenuLinkIcons'
import ProductCard from '../components/individuals/ProductCard';

const SearchView = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [genderFilter, setGenderFilter] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    //fetch the products
    useEffect(() => {
        fetch('https://sijb-cms22-backend.azurewebsites.net/api/Products/FeaturedProducts/100')
          .then(response => response.json())
          .then(data => {
            setProducts(data);
            setFilteredProducts(data);
          })
          .catch(error => console.log(error));
      }, []);

      let filters = ["Men", "Women", "Kids", "Accessories"];

      //filter on gender
      const handleGenderFilter = gender => {
        setGenderFilter(gender);
        setCategoryFilter('');
        if (gender === '') {
          setFilteredProducts(products);
        } else {
          const filteredByGender = products.filter(product => product.gender === gender);
          setFilteredProducts(filteredByGender);
        }
      };

      //filter on category
      const handleCategoryFilter = category => {
        setCategoryFilter(category);
        if (category === '') {
          setFilteredProducts(products.filter(product => product.gender === genderFilter));
        } else {
          const filteredByCategory = products.filter(
            product => product.gender === genderFilter && product.category === category
          );
          setFilteredProducts(filteredByCategory);
        }
      };

      //Search option
      const handleSearch = event => {
        setSearchTerm(event.target.value);
        const filteredBySearch = products.filter(
          product =>
            product.name.toLowerCase().includes(event.target.value.toLowerCase()) ||
            product.description.toLowerCase().includes(event.target.value.toLowerCase())
        );
        setFilteredProducts(filteredBySearch);
      };

  return (
    <div>
        <Header title={<div className="search-container"><span className="search-mag-glas">
            <i className="fas fa-search"></i>
          </span><input className="search-field" type="text" value={searchTerm} onChange={handleSearch} placeholder="Search" /></div>} hasSideIcon={true} isMenu={true} hasCart={true}/>
          <hr/>
        <div className='genders-container'>
            <div className="gender-buttons">
            {filters.map((gender, idx) => (
                    <button
                        onClick={() => handleGenderFilter(gender)}
                        className={`gender-button ${
                        genderFilter?.includes(gender) ? "active" : ""
                        }`}
                        key={`filters-${idx}`}
                    >
                        {gender}
                    </button>
                ))}
                <button className="gender-button" onClick={() => handleGenderFilter('')}>All</button>
            </div>
        </div>
        <div className="search-column-container">
            <div className="category-buttons">
                    <div className="search-column1">
                        {products
                            .filter(product => product.gender === genderFilter)
                            .map(product => (
                                <button className="category-button" key={product.id} onClick={() => handleCategoryFilter(product.category)}>
                                {product.category}
                                </button>
                                ))}
                    </div>
            </div>
        </div>
      <div>
      <div className="filtred-products-container">
            <div className="filtred-products">
                {filteredProducts.map(product => (<ProductCard key={product.id} product={product} />))}
            </div>
        </div> 
      </div>
      <MenuLinkIcons/>
    </div>
  )
}

export default SearchView