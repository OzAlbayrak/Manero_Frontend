import { NavLink } from 'react-router-dom';
import { useShoppingCartContext } from '../../contexts/ShoppingCartContext';

const CartIcon = () => {
	const { cartTotalQuantity, calculateTotalAmount } = useShoppingCartContext()

	return (
		<div>
			<NavLink to="/Cart" className="menu-link">
				<div className='shopping-cart-icon' role='button'>
					<i className='fa-light fa-shopping-bag '></i>
					<span className='cart-icon-amount'>${calculateTotalAmount()}</span>
				</div>
			</NavLink>
		</div>
	);
};

export default CartIcon;
