import {
	createContext,
	useContext,
	useState,
	useEffect,
	useCallback,
} from 'react';
import {
	getProfile,
	registerSocialAccount,
	getSocialProfile,
} from '../utilities/api';

const ProfileContext = createContext();

export const useProfileContext = () => {
	return useContext(ProfileContext);
};

export const ProfileProvider = ({ children }) => {
	const [profile, setProfile] = useState({});

	const getToken = () => {
		return sessionStorage.getItem('apiAccessToken');
	};

	const handleResponse = async (res) => {
		let obj = {};

		switch (res.provider) {
			case 'google': {
				obj = {
					Id: res.data.sub,
					Email: res.data.email,
					Name: res.data.name,
					ImageSrc: res.data.picture,
					Provider: res.provider,
				};
				break;
			}
			case 'facebook': {
				obj = {
					Id: res.data.id,
					Email: res.data.email,
					Name: res.data.name,
					ImageSrc: res.data.picture.data.url,
					Provider: res.provider,
				};
				break;
			}
			default: {
				console.log('Unknown provider:', res.provider);
			}
		}

		console.log('obj id: ', obj.Id, typeof obj.Id);
		const response = await registerSocialAccount(obj);
		if (response.ok) {
			const data = await response.json();
			const apiToken = await data.token;
			sessionStorage.setItem('profile', JSON.stringify(res.data));
			sessionStorage.setItem('provider', res.provider);
			sessionStorage.setItem('apiAccessToken', apiToken);
			console.log(res);
		}
	};

	const fetchData = useCallback(async () => {
		const provider = sessionStorage.getItem('provider');
		const token = getToken();

		try {
			if (provider === 'facebook' || provider === 'google') {
				console.log('using social media provider');
				const response = await getSocialProfile(token);
				if (response.ok) {
					const profileData = await response.json();
					setProfile(profileData);
					console.log('profile:', profileData);
				} else {
					console.log('error!');
				}
			} else if (provider === 'local') {
				console.log('using local provider');
				const response = await getProfile(token);
				if (response.ok) {
					const profileData = await response.json();
					setProfile(profileData);
					console.log('profile:', profileData);
				} else {
					console.log('error!');
				}
			} else {
				console.log('not logged in');
			}
		} catch (error) {
			console.log('error:', error);
		}
	}, []);

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	return (
		<ProfileContext.Provider
			value={{
				handleResponse,
				profile,
				setProfile,
				fetchData,
			}}
		>
			{children}
		</ProfileContext.Provider>
	);
};
