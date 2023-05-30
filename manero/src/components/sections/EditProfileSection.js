import React, { useState } from 'react';
import ProfilePicture from '../individuals/ProfilePicture';
import { useProfileContext } from '../../contexts/ProfileContext';

import InputField from '../individuals/InputField';
import Button from '../individuals/Button';
import { updateProfile } from '../../utilities/api';
import { useNavigate } from 'react-router-dom';
import { useAddressContext } from '../../contexts/AddressContext';

const EditProfileSection = () => {
	const { profile } = useProfileContext();
	const { addresses } = useAddressContext();
	const [name, setName] = useState(profile.name);
	const [email, setEmail] = useState(profile.email);
	const [phone, setPhone] = useState(profile.phoneNumber);
	const [error, setError] = useState();
	const [success, setSuccess] = useState();
	const navigate = useNavigate();

	let location = '';

	if (addresses.length > 0) {
		location = addresses[0].city;
	}

	const validateEmail = (res) => {
		if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(res.email)) {
			return true;
		} else {
			setError('Incorrect Email format');
			return false;
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const formData = new FormData(e.target);
		const res = Object.fromEntries(formData);
		const token = sessionStorage.getItem('apiAccessToken');

		if (validateEmail(res)) {
			const result = await updateProfile(res, token);

			if (result.status === 200) {
				setSuccess('Profile updated');
				setTimeout(() => {
					navigate('/profile');
				}, '3000');
			} else {
				setError('Failed to update profile');
			}
		}
	};

	return (
		<section className='edit-profile-section d-flex flex-column'>
			<ProfilePicture
				icon={'camera'}
				imageUrl={profile.imageSrc}
				altText={profile.name}
			/>

			<form className='inputcontainer pt-4' onSubmit={handleSubmit} noValidate>
				{error && <p className='text-danger text-center mx-auto'>{error}</p>}
				{success && <p className='text-success text-center mx-auto'>{success}</p>}
				<InputField
					type={'text'}
					name={'name'}
					nameid={'name'}
					labelName={'name'}
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<InputField
					type={'email'}
					name={'email'}
					nameid={'email'}
					labelName={'email'}
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<InputField
					type={'tel'}
					name={'phoneNumber'}
					nameid={'phoneNumber'}
					labelName={'phone number'}
					value={phone}
					onChange={(e) => setPhone(e.target.value)}
				/>
				<InputField
					type={'text'}
					name={'location'}
					nameid={'location'}
					labelName={'location'}
					value={location}
					disabled={true}
				/>
				<div className='text-center mx-auto px-3'>
					<Button btnText={'SAVE CHANGES'} btnType='submit' />
				</div>
			</form>
		</section>
	);
};

export default EditProfileSection;
