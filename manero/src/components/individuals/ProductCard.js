import Cart from './Cart'
import Rating from './Rating'
import { useShoppingCartContext } from '../../contexts/ShoppingCartContext'
import { useWishlistContext } from '../../contexts/WishlistContext'


const ProductCard = ({ product }) => {
  const {items, addItem, removeItem} = useShoppingCartContext()
  const {addFavorite} = useWishlistContext()
  
  return <div className="card">
        <div className="card-img-container">
          <img src={product.imageName} className="card-img-top" alt="..." />
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
          <Rating />
            <h5 className="card-title">{product.name}</h5>
            <p className="card-price">{product.price}$</p>
        </div>
        
    </div>
    
}

export default ProductCard