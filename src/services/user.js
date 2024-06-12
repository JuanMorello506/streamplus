const BASE_URL = 'https://localhost:8080';

const createUser = async ({ userName, password, mail }) => {
	try {
		const response = await fetch(`${BASE_URL}register`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ userName, password, mail }),
		});
		if (response.ok) {
			return await response.json();
		}
		throw new Error('Error al registrar usuario');
	} catch (error) {
		throw error;
	}
};


const loginUser = async ({ userName, password }) => {
	try {
		const response = await fetch(`${BASE_URL}login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ userName, password }),
		});
		if (response.ok) {
			return await response.json();
		}
		throw new Error('Error al iniciar sesión');
	} catch (error) {
		throw error;
	}
};

export default {
	createUser,
	loginUser,
}