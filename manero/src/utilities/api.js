//I den här filen kan vi lägga alla fetch-funktioner.
//Vi kan använda variabler för url:en så blir det lätt att byta när vi lägger upp API:et

const sqlUrl = 'https://localhost:7235/api';
// const sqlUrl = 'https://sijb-cms22-backend.azurewebsites.net/api';
//const sqlUrl = 'https://localhost:7235/api';
//const sqlUrl = "https://sijb-cms22-backend.azurewebsites.net/api";

export async function logIn(res) {
	try {
		return await fetch(sqlUrl + '/authentication/signin', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(res),
		});
	} catch {
		return 'no connection';
	}
}

export async function register(res) {
	return await fetch(sqlUrl + '/authentication/signup', {
		method: 'post',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(res),
	});
}

export async function registerAddress(res, token) {
	return await fetch(sqlUrl + '/address/register', {
		method: 'post',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(res),
	});
}

export async function registerCreditCard(res, token) {
	return await fetch(sqlUrl + '/address/register', {
		method: 'post',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(res),
	});
}

export async function registerSocialAccount(res) {
	return await fetch(sqlUrl + '/authentication/socialaccountsignup', {
		method: 'post',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(res),
	});
}

export async function getProfile(token) {
	return await fetch(sqlUrl + '/user/profile', {
		method: 'get',
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
}

export async function getSocialProfile(token) {
	return await fetch(sqlUrl + '/user/socialprofile', {
		method: 'get',
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
}

export async function getAddresses(token) {
	return await fetch(sqlUrl + '/address/addresses', {
		method: 'get',
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
}

export async function getCreditCards(token) {
	return await fetch(sqlUrl + '/creditcard/creditcards', {
		method: 'get',
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
}

export async function updateProfile(res, token) {
	return await fetch(sqlUrl + '/user/editprofile', {
		method: 'put',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(res),
	});
}
