import React, { useState, useEffect } from 'react'

const Searchbar = ({ setResults }) => {
  const [searchInput, setSearchInput] = useState("");

  const fetchData = (value) => {
    fetch('https://sijb-cms22-backend.azurewebsites.net/api/Products/FeaturedProducts/40')
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((product) => {
            return (
              value && 
              product && 
              product.name && 
              product.name.toLowerCase().includes(value)
            )
        });
        setResults(results)
      });
  };


  const handleChange = (value) => {
    setSearchInput(value);
    fetchData(value);
  };

  
  return (
    <div>
      <div className="search-container">
        <span className="search-mag-glas">
          <i className="fas fa-search"></i>
        </span>
        <input 
          type="search" 
          className="search-field"
          onChange={(e) => handleChange(e.target.value)}
          value={searchInput} 
          placeholder="Search" 
          aria-label="Search" 
          aria-describedby="search-addon" 
          />
      </div>

      

    </div>

  )
}

export default Searchbar