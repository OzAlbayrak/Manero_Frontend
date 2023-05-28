import React from 'react';

const ProfilePicture = ({
	icon,
	altText = 'Picture of user',
	handleClick,
	imageUrl = 'https://dummyimage.com/240x240/79ed5f/000&text=profilePic',
}) => {
	return (
		<>
			<div className='vr mx-auto mb-3'></div>
			<div className='profile-pic-container rounded-circle position-relative mx-auto'>
				<img src={imageUrl} alt={altText} className='rounded-circle' />
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
