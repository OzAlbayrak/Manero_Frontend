import React, { useEffect, useState } from 'react';
import Header from '../components/sections/Header';
import ProfileSection from '../components/sections/ProfileSection';
import MenuLinkIcons from '../components/individuals/MenuLinkIcons';
import SignOut from '../components/sections/SignOut';

const ProfileView = () => {
	const [signOutOverlay, setSignOutOverlay] = useState(false);
	// useEffect(() => {
	// 	console.log(signOutOverlay);
	// }, [signOutOverlay]);
	return (
		<div className='position-relative d-flex flex-column overflow-hidden'>
			{signOutOverlay && (
				<SignOut
					setSignOutOverlay={setSignOutOverlay}
					signOutOverlay={signOutOverlay}
				/>
			)}
			<Header
				hasSideIcon={true}
				isMenu={true}
				title={'My profile'}
				hasCart={true}
			></Header>
			<ProfileSection
				setSignOutOverlay={setSignOutOverlay}
				signOutOverlay={signOutOverlay}
			></ProfileSection>
			<MenuLinkIcons></MenuLinkIcons>
		</div>
	);
};

export default ProfileView;
