import { createContext, useContext, useState, useEffect } from 'react';
import {
	getProfile,
	registerSocialAccount,
	getSocialProfile,
	getToken,
} from '../utilities/api';

const ProfileContext = createContext();

export const useProfileContext = () => {
	return useContext(ProfileContext);
};

export const ProfileProvider = ({ children }) => {
	const [profile, setProfile] = useState({});
	//const [provider, setProvider] = useState();
	const [addresses, setAddresses] = useState({});

	const handleResponse = async (res) => {
		let obj = {};

		switch (res.provider) {
			case 'google':
				{
					obj = {
						Id: res.data.sub,
						Email: res.data.email,
						Name: res.data.name,
						ImageSrc: res.data.picture,
						Provider: res.provider,
					};
				}
				break;
			case 'facebook':
				{
					obj = {
						Id: res.data.id,
						Email: res.data.email,
						Name: res.data.name,
						ImageSrc: res.data.picture.data.url,
						Provider: res.provider,
					};
				}
				break;
		}

		console.log('obj id: ', obj.Id, typeof obj.Id);
		const result = await registerSocialAccount(obj);
		//const apiToken = await getToken(obj.Id);
		//console.log('apiToken: ', JSON.stringify(apiToken.body));
		//const data = await result.json();
		//const apiToken = data.token;
		//console.log('data: ', data);
		//console.log('token?: ', apiToken);
		sessionStorage.setItem('profile', JSON.stringify(res.data));
		sessionStorage.setItem('provider', res.provider);
		//sessionStorage.setItem('apiAccessToken', apiToken);
		console.log(res);
	};

	// const getProfile = async () => {
	// 	setProfile(await JSON.parse(sessionStorage.getItem('profile')));
	// };

	const getSocialData = async (provider) => {
		let id = '';

		switch (provider) {
			case 'google':
				const googleData = JSON.parse(sessionStorage.getItem('profile'));
				id = googleData.sub;
				break;
			case 'facebook':
				const facebookData = JSON.parse(sessionStorage.getItem('profile'));
				id = facebookData.id;
				break;
		}
		const response = await getSocialProfile(id);

		console.log('id:', id);
		if (response.ok) {
			const profileData = await response.json();
			setProfile(profileData);
			console.log('profile:', profileData);
		} else {
			console.log('error!');
		}
	};

	const getData = async () => {
		let token = sessionStorage.getItem('apiAccessToken');

		console.log(token);
		const response = await getProfile(token);

		if (response.ok) {
			const profileData = await response.json();
			setProfile(profileData);
			console.log('profile:', profileData);
		} else {
			console.log('error!');
		}
	};
	/*
	const getAddresses = async () => {
		const token = sessionStorage.getItem('accessToken');
		const response = await fetch('https://localhost:7235/api/user/addresses', {
			method: 'get',
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		if (response.ok) {
			const addressData = await response.json();
			setAddresses(addressData);
		} else {
			console.log('error!');
		}
	};
*/

	const getProvider = () => {
		if (
			sessionStorage.getItem('provider') === 'facebook' ||
			sessionStorage.getItem('provider') === 'google'
		) {
			console.log('using socialmedia provider');
			setProfile(JSON.parse(sessionStorage.getItem('profile')));
			getSocialData(sessionStorage.getItem('provider'));
		} else if (sessionStorage.getItem('provider') === 'local') {
			console.log('using local provider');
			getData();
		} else {
			console.log('not logged in');
		}
	};

	useEffect(() => {
		getProvider();
	}, []);

	return (
		<ProfileContext.Provider
			value={{
				handleResponse,

				getProvider,

				profile,

				addresses,
			}}
		>
			{children}
		</ProfileContext.Provider>
	);
};
