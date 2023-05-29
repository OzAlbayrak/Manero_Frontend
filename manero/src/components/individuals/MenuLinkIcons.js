import React from 'react';
import { NavLink } from 'react-router-dom';

const MenuLinkIcons = () => {
	//const [selectedPage, setSelectedPage] = useState();

	return (
		<div className='bottom-menu-container'>
			<nav className='menuLinkIcons'>
				<NavLink to='/' className='menu-link' activeClassName='active'>
					<div>
						<i className='fa-light fa-house'></i>
					</div>
				</NavLink>
				<NavLink to='/Search' className='menu-link' activeClassName='active'>
					<div>
						<i className='fa-light fa-magnifying-glass'></i>
					</div>
				</NavLink>
				<NavLink to='/Cart' className='menu-link' activeClassName='active'>
					<div>
						<i className='fa-light fa-bag-shopping'></i>
					</div>
				</NavLink>
				<NavLink to='/Wishlist' className='menu-link' activeClassName='active'>
					<div>
						<i className='fa-light fa-heart'></i>
					</div>
				</NavLink>
				<NavLink to='/profile' className='menu-link' activeClassName='active'>
					<div>
						<i className='fa-light fa-user'></i>
					</div>
				</NavLink>
			</nav>
		</div>
	);
};

export default MenuLinkIcons;
