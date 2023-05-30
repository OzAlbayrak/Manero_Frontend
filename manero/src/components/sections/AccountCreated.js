import React from 'react';
import Header from './Header';
import Button from '../individuals/Button';
import Image from '../../assets/images/Account.svg';
import { Link } from 'react-router-dom';

const AccountCreated = () => {
	return (
		<div className='container d-flex flex-column'>
			<Header
				title={'MANERO'}
				hasSideIcon={false}
				isMenu={false}
				hasCart={false}
			></Header>
			<img className='password-image mx-auto' src={Image} />

			<div className='vr mx-auto'></div>
			<p className='mx-auto my-3 headline'>Account Created!</p>
			<p className='mx-auto text-light-color'>
				Your account had beed created successfully.
			</p>
			<Link to="/home" className='navlinkbutton'>
			<div className='text-center mx-auto px-3 button-container'>
				<Button btnText={'SHOP NOW'} btnType='button' />
			</div>
			</Link>
		</div>
	);
};

export default AccountCreated;
