import React from 'react'
import Header from '../components/sections/Header'
import Searchbar from '../components/individuals/Searchbar'
import MenuLinkIcons from '../components/individuals/MenuLinkIcons'

const SearchView = () => {
  return (
    <div>
        <Header className="search-header" title={<Searchbar/>} hasSideIcon={true} isMenu={true} hasCart={true}/>
        <hr/>
        <div className='categories-container'>Categories</div>
        <div className="product-type-container">
            <div className='search-column-container'>
                <div className="search-column1">
                    <div className="search-dresses">
                        <div className="category-titles">
                            <p className="title-3">Dresses</p>
                        </div>
                    </div> 
                    <div className="search-pants">
                    <div className="category-titles">
                            <p className="title-3">Pants</p>
                        </div>
                    </div>
                </div>
                <div className="search-column2">
                    <div className="search-accessories">
                    <div className="category-titles">
                            <p className="title-3">Accessories</p>
                        </div>
                    </div>
                </div>
                <div className="search-column3">
                    <div className="search-shoes">
                    <div className="category-titles">
                            <p className="title-3">Shoes</p>
                        </div>
                    </div> 
                    <div className="search-tshirts">
                    <div className="category-titles">
                            <p className="title-3">T-shirts</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <MenuLinkIcons/>
    </div>
  )
}

export default SearchView