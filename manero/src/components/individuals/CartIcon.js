import React from 'react';

const CartIcon = () => {

	return (
		<div className='text-light-color cart-icon' role='button'>
			<i className='fa-light fa-shopping-bag '></i>
			<span className="cart-total">$0</span>
		</div>
	);
};

export default CartIcon;
