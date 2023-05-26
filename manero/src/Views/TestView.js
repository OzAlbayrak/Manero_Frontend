import React, { useEffect } from 'react';
import { useProfileContext } from '../contexts/ProfileContext';

const TestView = () => {
	const { profile, provider, getProfile, getProvider, getLocalProfile } =
		useProfileContext();

	return (
		<div>
			{profile.name} - {profile.email} - {/*addresses[0].streetName */}
		</div>
	);
};

export default TestView;
