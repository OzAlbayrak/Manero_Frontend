//I den här filen kan vi lägga alla fetch-funktioner.
//Vi kan använda variabler för url:en så blir det lätt att byta när vi lägger upp API:et

const sqlUrl = 'https://localhost:7235/api';

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
	return await fetch('https://localhost:7235/api/authentication/signup', {
		method: 'post',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(res),
	});
}
