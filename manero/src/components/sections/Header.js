import React from 'react';
import Logo from '../individuals/Logo';
import CartIcon from '../individuals/CartIcon';
import SideIcon from '../individuals/SideIcon';

const Header = ({ title, hasSideIcon, isMenu, hasCart }) => {
	return (
		<header className='header-section container'>
			{hasSideIcon ? <SideIcon isMenu={isMenu} /> : <div></div>}
			<Logo title={title} />
			{hasCart && <CartIcon />}
		</header>
	);
};

export default Header;
