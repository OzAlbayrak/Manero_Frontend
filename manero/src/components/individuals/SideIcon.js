import React, { useState } from 'react';

const SideIcon = ({ isMenu }) => {
	const [toggleMenu, setToggleMenu] = useState(false);

	const openMenu = () => {
		setToggleMenu(!toggleMenu);
		console.log('toggle menu');
	};

	function goBack() {
		window.history.back();
		console.log('click');
	}

	return (
		<div role='button'>
			{isMenu ? (
				<i className='fa-sharp fa-light fa-bars' onClick={openMenu}></i>
			) : (
				<i className='fa-regular fa-chevron-left' onClick={goBack}></i>
			)}
		</div>
	);
};

export default SideIcon;
