import React, { useEffect, useState } from 'react';
import ProfilePicture from '../individuals/ProfilePicture';
import { useProfileContext } from '../../contexts/ProfileContext';
import { NavLink, useNavigate } from 'react-router-dom';

const ProfileSection = ({ signOutOverlay, setSignOutOverlay }) => {
	const { profile, fetchData } = useProfileContext();
	const navigate = useNavigate();
	useEffect(() => {
		fetchData();
	}, []);

	const goToEditProfile = () => {
		navigate('/EditProfile');
	};

	return (
		<section className='profile-section d-flex flex-column'>
			<ProfilePicture
				icon={'pen'}
				imageUrl={profile.imageSrc}
				altText={profile.name}
				handleClick={goToEditProfile}
			></ProfilePicture>
			<h1 className='text-dark-color'>{profile.name}</h1>
			{/* <h1 className='text-dark-color'>Per Norin</h1> */}
			<p className='mx-auto text-light-color text-center profile-email'>
				{profile.email}
				{/* per.norin@yh.nackademin.se */}
			</p>
			<NavLink to='/OrderHistory' className='profile-link p-4'>
				<i className='fa-light fa-calendar text-light-color'></i>
				<span className='text-dark-color'>Order history</span>
				<i className='fa-light fa-chevron-right text-light-color text-end'></i>
			</NavLink>
			<NavLink to='/PaymentMethods' className='profile-link p-4'>
				<i className='fa-light fa-credit-card text-light-color'></i>
				<span className='text-dark-color'>Payment method</span>
				<i className='fa-light fa-chevron-right text-light-color text-end'></i>
			</NavLink>
			<NavLink to='/Addresses' className='profile-link p-4'>
				<i className='fa-light fa-location-dot text-light-color'></i>
				<span className='text-dark-color'>My address</span>
				<i className='fa-light fa-chevron-right text-light-color text-end'></i>
			</NavLink>
			<NavLink to='/PromoCode' className='profile-link p-4'>
				<i className='fa-light fa-gift text-light-color'></i>
				<span className='text-dark-color'>My promocodes</span>
				<i className='fa-light fa-chevron-right text-light-color text-end'></i>
			</NavLink>
			<div
				className='profile-link p-4'
				onClick={() => setSignOutOverlay(!signOutOverlay)}
			>
				<i className='fa-light fa-arrow-right-from-bracket text-light-color'></i>
				<span className='text-dark-color'>Sign out</span>
			</div>
		</section>
	);
};

export default ProfileSection;
