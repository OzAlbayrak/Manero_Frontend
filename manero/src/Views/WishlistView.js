import React from 'react';
import Header from '../components/sections/Header';
import Image from '../assets/images/wishlist_empty.svg';
import MenuLinkIcons from '../components/individuals/MenuLinkIcons';
import { useWishlistContext } from '../contexts/WishlistContext';
import { useShoppingCartContext } from '../contexts/ShoppingCartContext';
import RatingStars from '../components/individuals/RatingStars';

const WishListView = () => {
	const { wishlist, removeFromWishlist } = useWishlistContext();
	const { addItem } = useShoppingCartContext();

	const handleRemoveFromWishlist = (productId) => {
		removeFromWishlist(productId);
	};

	return (
		<div className='vh-100 m-0 p-0'>
			<Header
				title={'Wishlist'}
				hasSideIcon={true}
				isMenu={true}
				hasCart={true}
			></Header>

			<div>
				{wishlist.length === 0 ? (
					<div className='text-center'>
						<img className='password-image mx-auto' src={Image} alt="..." />
						<br></br>
						<div className='vr mx-auto'></div>
						<p className='mx-auto my-3 headline'>Your Wishlist Is Empty!</p>
						<p className='mx-auto text-light-color'>
							You Can Add Your Favorite Products Here!
						</p>
					</div>
				) : (
					wishlist.map((product) => (
						<div key={product.id}>
							<div className='wishlist-container'>
								<div className='wishlist-img'>
									<img src={product.imageName} alt='...' />
								</div>
								<div className='wishlist-info'>
									<div>{product.name}</div>
									<div>${product.price}</div>
									<RatingStars />
								</div>
								<div className='wishlist-btns'>
									<button
										id='heart'
										className='menu-link'
										onClick={() => handleRemoveFromWishlist(product.id)}
									>
										<i className='fa-solid fa-heart'></i>
									</button>
									<button
										id='bag'
										className='menu-link'
										onClick={() => addItem(product.id)}
									>
										<i className='fa-light fa-bag-shopping'></i>
									</button>
								</div>
							</div>
							<hr />
						</div>
					))
				)}
			</div>

			<MenuLinkIcons />
		</div>
	);
};

export default WishListView;
