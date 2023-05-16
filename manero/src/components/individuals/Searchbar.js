import React from 'react'

const Searchbar = () => {
  return (
        <div className="search-container">
            <span className="search-mag-glas">
                <i className="fas fa-search"></i>
            </span>
            <input type="search" className="search-field" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
        </div>
  )
}

export default Searchbar