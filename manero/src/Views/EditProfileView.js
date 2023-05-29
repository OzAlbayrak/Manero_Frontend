import React from 'react';

import Header from '../components/sections/Header';
import EditProfileSection from '../components/sections/EditProfileSection';

const EditProfileView = () => {
	return (
		<>
			<Header
				hasCart={false}
				hasSideIcon={true}
				isMenu={false}
				title={'Edit profile'}
			/>
			<EditProfileSection />
		</>
	);
};

export default EditProfileView;
