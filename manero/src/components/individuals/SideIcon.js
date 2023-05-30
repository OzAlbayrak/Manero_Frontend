import React, { useState } from 'react';
import SideMenu from './SideMenu';

const SideIcon = ({ isMenu }) => {
	function goBack() {
		window.history.back();
		console.log('click');
	}

	return (
		<div role='button'>
			{isMenu ? (
				<SideMenu></SideMenu>
			) : (
				<i className='chevronicon fa-regular fa-chevron-left' onClick={goBack}></i>
			)}
		</div>
	);
};

export default SideIcon;