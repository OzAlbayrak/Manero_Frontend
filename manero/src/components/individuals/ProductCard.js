import RatingStars from './RatingStars'
import { useShoppingCartContext } from '../../contexts/ShoppingCartContext'
import { useWishlistContext } from '../../contexts/WishlistContext'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
  const {addItem} = useShoppingCartContext()
  const {addToWishlist, removeFromWishlist, isInWishlist} = useWishlistContext()

  const handleWishlistClick = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };
  
  return <div className="card">
        <div className="card-img-container">
        <Link to={`/description/${product.id}`}><img src={product.imageName} className="card-img-top" alt="..." /></Link>
          <div className="card-menu d-xl-none">
            <button className={isInWishlist(product.id) ? 'heart-active' : 'heart'} onClick={handleWishlistClick}>
              <i className="fa-regular fa-heart"></i>
            </button>
            <button className="menu-link-product" onClick={() => addItem(product)}>
            <i className='fa-light fa-shopping-bag '></i>
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