import React from 'react';
import { useShoppingCartContext } from '../contexts/ShoppingCartContext';
import { useEffect, useState } from 'react';
import Header from '../components/sections/Header';
import MenuLinkIcons from '../components/individuals/MenuLinkIcons';
import { NavLink } from 'react-router-dom';

const OrderView = () => {
	const { items, addItem, removeItem } = useShoppingCartContext();
	const [totAmountOfItems, setTotAmountOfItems] = useState(0);
	const [totPrice, setTotPrice] = useState(0);
	const [start, setStart] = useState(true);

	const increaseTotItem = (item) => {
		setTotAmountOfItems(totAmountOfItems + 1);
		setTotPrice(totPrice + item.price);
		addItem(item);
	};

	const decreaseTotItem = (item) => {
		setTotAmountOfItems(totAmountOfItems - 1);
		setTotPrice(totPrice - item.price);
		removeItem(item);
	};

	useEffect(() => {
		localStorage.setItem('items', JSON.stringify(items));
		console.log(items);

		if (start === true) {
			let pr = 0;
			let itm = 0;
			for (let i = 0; i < items.length; i++) {
				itm += items[i].quantity;
				pr += items[i].price * items[i].quantity;
			}
			setTotAmountOfItems(itm);
			setTotPrice(pr);
			setStart(false);
		}
	}, [items]);

	return (
		<div className='order-container d-flex flex-column vh-100 '>
			<div className='d-flex'>
				<Header
					title={'Order'}
					hasSideIcon={true}
					isMenu={true}
					hasCart={true}
				></Header>
			</div>
			{items.map((item) => (
				<div key={item.id}>
					<div className='order-container '>
						<img src={item.image} className='order-img' alt='...' />
						<div className='order-info'>
							<div className='order-info-name'>{item.name}</div>
							<div className='order-info-price'>${item.price}</div>
						</div>
						<div className='order-btns'>
							<button
								onClick={() => increaseTotItem(item)}
								className='btn btn-secondary order-info-btn'
							>
								{' '}
								+{' '}
							</button>
							<div>{item.quantity}</div>
							<button
								onClick={() => decreaseTotItem(item)}
								className='btn btn-secondary order-info-btn'
							>
								{' '}
								-{' '}
							</button>
						</div>
					</div>
				</div>
			))}
			<hr />
			<div>
				Promocode applied
				<span className='promo-app-span'>&#10003;</span>
			</div>
			<div className='subtotal'>
				<div>Subtotal</div>
				<div>${totPrice}</div>
			</div>
			<p>Discount</p>
			<div className='d-flex order-delivery-p'>
				<p className='delivery'>Delivery</p>
				<p className='odp'>Free</p>
			</div>
			<hr />
			<div className='order-total-price'>
				<div>Total</div>
				<div>${totPrice}</div>
			</div>

			<div className='mx-auto order-btn-container'>
				<NavLink to='/Checkout'>
					<button className='order-btn rounded-pill my-3 custom-btn'>
						PROCEED TO CHECKOUT
					</button>
				</NavLink>
			</div>

			<MenuLinkIcons className='menu-icons' />
		</div>
	);
};

export default OrderView;
