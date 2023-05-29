import React from 'react';
import Cart from '../components/individuals/Cart';
import Header from '../components/sections/Header';
import MenuLinkIcons from '../components/individuals/MenuLinkIcons';
import Image from '../assets/images/Cart_empty.svg';
import { NavLink } from 'react-router-dom';
import { useShoppingCartContext } from '../contexts/ShoppingCartContext';
import { useEffect } from 'react';
import CartIcon from '../components/individuals/CartIcon';

export const CartView = () => {
	const { items, addItem, removeItem } = useShoppingCartContext();

	useEffect(() => {
		//getProducts()
		localStorage.setItem('items', JSON.stringify(items));
		console.log(items);
	}, [items]);

	return (
		<div className='cart-container d-flex flex-column vh-100'>
			<div className='d-flex flex-direction-column '>
				<Header title={'Cart'} hasSideIcon={true} isMenu={true} hasCart={true} />
			</div>
			<div>
				{items.length === 0 ? (
					<div className='text-center'>
						<img className='mx-auto' src={Image} />

						<br></br>
						<div className='vr'></div>

						<div className='text-center'>
							<p className='mx-auto my-3 headline'>Your Cart Is Empty!</p>
							<p className='mx-auto text-light-color'>
								Looks like you haven`t made your order yet
							</p>
						</div>
						<div className='mx-auto'>
							<NavLink to='/home'>
								<button className='btn rounded-pill my-3 custom-btn'>SHOP NOW</button>
							</NavLink>
						</div>
					</div>
				) : (
					<div className='text-center'>
						{items.map((item) => (
							<div key={item.id}>
								<div className='cart-container'>
									<img src={item.image} className='cart-img' alt='...' />

									<div className='cart-info'>
										<div className='cart-info-name'>{item.name}</div>
										<div className='cart-info-price'>${item.price}</div>
									</div>

									<div className='cart-btns'>
										<button onClick={() => addItem(item)} className='btn btn-secondary'>
											{' '}
											+{' '}
										</button>
										<div>{item.quantity}</div>
										<button
											onClick={() => removeItem(item)}
											className='btn btn-secondary'
										>
											{' '}
											-{' '}
										</button>
									</div>
								</div>
								<hr />
							</div>
						))}
						<div className='mx-auto cart-btn-container'>
							<NavLink to='/Order'>
								<button className='btn rounded-pill my-3 custom-btn'>Make Order</button>
							</NavLink>
						</div>
					</div>
				)}
			</div>

			<MenuLinkIcons className='menu-icons' />
		</div>
	);
};

export default CartView;
