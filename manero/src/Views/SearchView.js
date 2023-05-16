import { useState, useEffect} from 'react'
import Header from '../components/sections/Header'
import Searchbar from '../components/individuals/Searchbar'
import MenuLinkIcons from '../components/individuals/MenuLinkIcons'

const SearchView = () => {
    const [products, setProducts] = useState([])
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState(products);

    const getProducts = async () => {
        const result = await fetch('https://sijb-cms22-backend.azurewebsites.net/api/Products/FeaturedProducts/40')
        // console.log(await result.json())
        setProducts(await result.json())
    }

    let filters = ["Jackets", "Sweaters", "Dresses", "Accessories", "Shoes"];

    const handleFilterButtonClick = (selectedCategory) => {
        if (selectedFilters.includes(selectedCategory)) {
          let filters = selectedFilters.filter((el) => el !== selectedCategory);
          setSelectedFilters(filters);
        } else {
          setSelectedFilters([...selectedFilters, selectedCategory]);
        }
      };

      useEffect(() => {
        getProducts();
        filterProducts();
      }, [selectedFilters]);
    
      const filterProducts = () => {
        if (selectedFilters.length > 0) {
          let tempProducts = selectedFilters.map((selectedCategory) => {
            let temp = products.filter((product) => product.category === selectedCategory);
            return temp;
          });
          setFilteredProducts(tempProducts.flat());
        } else {
          setFilteredProducts([...products]);
        }
      };
      
  return (
    <div>
        <Header className="search-header" title={<Searchbar/>} hasSideIcon={true} isMenu={true} hasCart={true}/>
        <hr/>
        <div className='categories-container'>
            <div className="category-buttons">
                {filters.map((category, idx) => (
                    <button
                        onClick={() => handleFilterButtonClick(category)}
                        className={`category-button ${
                        selectedFilters?.includes(category) ? "active" : ""
                        }`}
                        key={`filters-${idx}`}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
        
        <div>
            {
              products.length === 0 
              ?
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
          :
            <div className="product-type-container">
                <div className="items-container">
                        {filteredProducts.map((product, idx) => (
                        <div key={`products-${idx}`} className="product">
                            <div>
                                <p>{product.name}</p>
                            </div>
                            <div>
                            <img src={product.imageName} className="rounded float-left " alt="..." />
                            </div>
                        </div>
                        ))}
                    </div>
            </div>

            }
        </div>
        <MenuLinkIcons/>
    </div>
  )
}

export default SearchView