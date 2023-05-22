import RatingStars from './RatingStars'
import { useShoppingCartContext } from '../../contexts/ShoppingCartContext'
import { useWishlistContext } from '../../contexts/WishlistContext'
import { NavLink } from 'react-router-dom'

const ProductCard = ({ product }) => {
  const {items, addItem, removeItem} = useShoppingCartContext()
  const {addFavorite} = useWishlistContext()
  
  return <div className="card">
        <div className="card-img-container">
        <NavLink to="/DescriptionView"><img src={product.imageName} className="card-img-top" alt="..." /></NavLink>
          <div className="card-menu d-xl-none">
            <button className="menu-link" onClick={() => addFavorite(product)}>
              <i id="card-heart" className="fa-regular fa-heart"></i>
            </button>
            <button className="menu-link" onClick={() => addItem(product)}>
              <i className="fa-light fa-bag-shopping"></i>
            </button>
          </div>
        </div>
        <div className="card-body">
          <RatingStars />
            <h5 className="card-title">{product.name}</h5>
            <p className="card-price">{product.price}$</p>
        </div>
        
    </div>
    
}

export default ProductCard