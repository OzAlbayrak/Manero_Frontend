import React from 'react';
import { useShoppingCartContext } from '../contexts/ShoppingCartContext';
import { useEffect, useState } from 'react';
import Header from '../components/sections/Header';
import MenuLinkIcons from '../components/individuals/MenuLinkIcons';
import { NavLink } from 'react-router-dom';
import SideIcon from '../components/individuals/SideIcon';
import { PromoCodeProvider } from '../contexts/PromoCodeContext';
import { useAddressContext } from '../contexts/AddressContext';
import { useCreditCardContext } from '../contexts/CreditCardContext';
import { useProfileContext } from '../contexts/ProfileContext';

const CheckoutView = () => {
	const { items, addItem, removeItem } = useShoppingCartContext();
	const [totAmountOfItems, setTotAmountOfItems] = useState(0);
	const [totPrice, setTotPrice] = useState(0);
	const [start, setStart] = useState(true);
	const [comments, setComments] = useState('');
	const [email, setEmail] = useState('order@myorder.com');
	const [deliveryMethod, setdeliveryMethod] = useState('PostNord');
	const [payment, setpayment] = useState('VISA CARD');
	const [promoCodes, setPromoCodes] = useState([]);
	const { profile } = useProfileContext();
	const { addresses } = useAddressContext();
	const { creditCards } = useCreditCardContext();

	const handleOnSubmit = (e) => {
		e.preventDefault();

		const formData = {
			price: totPrice,
			profile: {
				email: profile.email,
				name: profile.name,
				phoneNumber: '',
			},
			address: {
				address: 'addresses[0].streetName',
				postalCode: 'addresses[0].postalCode',
				city: 'addresses[0].city',
			},
			products: items,
			paymentMethod: payment,
			comment: comments,
			delivery: deliveryMethod,
			PromoCodes: [],
		};

		console.log('profile:', formData.profile);
		console.log('Products:', formData.products);
		console.log('paymentMethod:', formData.paymentMethod);
		console.log('Comment:', formData.comment);
		console.log('Delivery:', formData.delivery);
		console.log('PromoCode:', formData.promoCodes);

		fetch('https://sijb-cms22-backend.azurewebsites.net/api/Order', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(formData),
		})
			.then((res) => res.json())
			.then((formData) => {
				console.log(formData);
				window.location.replace('/OrderCompleted');
			})
			.catch((error) => {
				console.log(error);
				window.location.replace('/OrderFailed');
			});
	};

	const handleChange = (event) => {
		setComments(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		// Hantera inskickade kommentaren, t.ex. skicka till en API eller spara i en lokal lista
		console.log('Skicka kommentar:', comments);
		setComments('');
	};

	/* const increaseTotItem = ((item) => {
	 setTotAmountOfItems(totAmountOfItems + 1);
	 setTotPrice(totPrice + item.price);
	 addItem(item);
   })
 
   const decreaseTotItem = ((item) => {
	 setTotAmountOfItems(totAmountOfItems - 1);
	 setTotPrice(totPrice - item.price);
	 removeItem(item);
   })*/

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
		<div className='d-flex flex-column vh-100'>
			<div className='checkout-container m-1'>
				<Header title={'Checkout'} hasSideIcon={true} isMenu={false} ></Header>
			</div>

			<div className='checkout-info'>
				<div className='checkout-info-order'>
					<p className='semi'>My order</p>
					<p className='totPrice'>
						<div>${totPrice}</div>
					</p>
				</div>

				<div className='info-color'>
					<hr />
					<p className='totItem'>
						{items.map((item) => (
							<div key={item.id}>
								<div className='check-inf'>
									<div>{item.name}</div>
									<div>
										{item.quantity} x ${item.price}
									</div>
								</div>
							</div>
						))}
					</p>

					<p className='discount'>Discount</p>
					<div></div>

					<div className='d-flex order-delivery-p'>
						<p className='delivery'>Delivery</p>
						<p className='odp'>Free</p>
					</div>

					<hr />
				</div>
			</div>

			<div className='shipping-address'>
				<p className='semi'>Shipping details</p>
				<NavLink to='/Shippment'>
					<i className='fa-regular fa-chevron-right'></i>
				</NavLink>
			</div>
			<p className='p-info'>Nordkapsvägen 1, 136 57, Vega SVERIGE</p>

			<hr />
			<div className='shipping-address'>
				<p className='semi'>Payment Method</p>
				<NavLink to='/Payment'>
					<i className='fa-regular fa-chevron-right'></i>
				</NavLink>
			</div>
			<p className='p-info'>7741********6644</p>

			<hr />

			<form className='checkout-form' onSubmit={handleOnSubmit}>
				<label>COMMENT</label>
				<div>
					<textarea
						className='area'
						rows='8'
						colum='10'
						value={comments}
						onChange={(e) => setComments(e.target.value)}
						placeholder='Enter your comment'
					/>
				</div>
				<div className='mx-auto button-container'>
					<NavLink>
						<button
							className='btn rounded-pill my-3 custom-btn'
							type='submit'
							onClick={handleOnSubmit}
						>
							Confirm Order
						</button>
					</NavLink>
				</div>
			</form>

			<MenuLinkIcons />
		</div>
	);
};

export default CheckoutView;

/* <p className='discount'>Discount
			<div>
			  {promoCodes}
			</div>
		  </p>
		  {
			totPrice >= 100
			  ?
			  <p className='delivery'>Delivery
				<div>
				  Free
				</div>
			  </p>
			  :
			  <p className='delivery'>Delivery
				<div>
				  $49
				</div>
			  </p>
		  }*/
