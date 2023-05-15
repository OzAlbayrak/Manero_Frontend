
const Wishlist = (prod) =>
{

	function addToWishlist(product)
	{

		console.log(product);
	  	localStorage.setFavorite('wishlistFavorites', JSON.stringify(product));
	}

	return (
		<div className='d-flex justify-content-center align-items-center' >
			{prod.id ? addToWishlist(prod) : 				
				<div></div>				
			}
		</div>
	);
} 

  export default Wishlist;