import React from 'react';
import Logo from '../individuals/Logo';
import Menu from '../individuals/Menu';
import Cart from '../individuals/Cart';
import SideIcon from '../individuals/SideIcon';

const Header = ({ title, hasSideIcon, isMenu, hasCart }) => {
	return (
		<header className='headersection container'>
			{/* <Menu/> */}
			{hasSideIcon && <SideIcon isMenu={isMenu} />}
			<Logo title={title} />
			{hasCart && <Cart />}
		</header>
	);
};

export default Header;
