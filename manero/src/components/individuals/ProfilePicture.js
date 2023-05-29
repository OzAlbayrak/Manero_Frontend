import React from 'react';
import DefaultImage from '../../assets/images/Account.svg';

const ProfilePicture = ({
	icon,
	altText = 'Picture of user',
	handleClick,
	imageUrl,
}) => {
	let image = DefaultImage;
	if (imageUrl !== undefined) {
		console.log('img:', image);
		image = imageUrl;
	}

	return (
		<>
			<div className='vr mx-auto mb-3'></div>
			<div className='profile-pic-container rounded-circle position-relative mx-auto'>
				<img src={image} alt={altText} className='rounded-circle' />
				<button
					className='rounded-circle position-absolute bottom-0 end-0 text-light-color'
					onClick={handleClick}
				>
					{icon === 'pen' ? (
						<i className='fa-light fa-pen-to-square'></i>
					) : (
						<i className='fa-light fa-camera'></i>
					)}
				</button>
			</div>
		</>
	);
};

export default ProfilePicture;
