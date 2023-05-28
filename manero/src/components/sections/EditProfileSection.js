import React from 'react';
import ProfilePicture from '../individuals/ProfilePicture';
import { useProfileContext } from '../../contexts/ProfileContext';
import InputField from '../individuals/InputField';
import Button from '../individuals/Button';

const EditProfileSection = () => {
	const { profile, fetchData } = useProfileContext();

	return (
		<section className='edit-profile-section d-flex flex-column'>
			<ProfilePicture
				icon={'camera'}
				imageUrl={profile.imageSrc}
				altText={profile.name}
			/>
			<form className='inputcontainer pt-4'>
				<InputField
					type={'text'}
					name={'name'}
					nameid={'name'}
					labelName={'name'}
				/>
				<InputField
					type={'email'}
					name={'email'}
					nameid={'email'}
					labelName={'email'}
				/>
				<InputField
					type={'tel'}
					name={'phoneNumber'}
					nameid={'phoneNumber'}
					labelName={'phone number'}
				/>
				<InputField
					type={'text'}
					name={'location'}
					nameid={'location'}
					labelName={'location'}
				/>
				<div className='text-center mx-auto px-3'>
					<Button btnText={'SAVE CHANGES'} btnType='submit' />
				</div>
			</form>
		</section>
	);
};

export default EditProfileSection;
