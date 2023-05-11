import UseFetch from './UseFetch';
import ProductCard from './ProductCard';

const ProductList = () => {
    const{
        data: products,
        loading,
        error
    }  = UseFetch("https://sijb-cms22-backend.azurewebsites.net/api/Products/FeaturedProducts/20");

  return (
    <div className="slide-container">
      <div className='item-container'>
        {error && <div>{error}</div>}
        {loading && <div>Loading...</div>}
        {products?.map((product) => {
          return (
          <ProductCard 
          key={product.id} 
          product={product}
          />
          );
        })}
      </div>
    </div>
  );
};

export default ProductList