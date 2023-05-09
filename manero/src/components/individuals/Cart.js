import React from 'react';
import MenuLink from './MenuLink';

{
//GetAllProduct()
//GetNumberOfProducts()
//DeleteOneProductFromList()
//ViewAllproducts(GetAllProduct())
}




// Jag bytte ut denna i headern mot CartIcon, det blir tydligare. Just nu används den här inte. /Per
const Menu = () => {
	return (
		<nav className='cart shoppingicon'>
			<i className='fal fa-shopping-bag '></i>

			{/* <MenuLink name={(<i className="fa-light fa-bag-shopping"></i>)}  link="/cart" /> */}
		</nav>
	);
};

export default Menu;
