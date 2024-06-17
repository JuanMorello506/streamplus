import { BASE_URL } from "../../config/config";

//BUSCAR EN IPCONFIG LA IPV4 Y REEMPLAZARLA POR localhost
const createUser = async ({ userName, password, mail }) => {
	try {
		const request = { userName: userName, password: password, mail: mail }
		const response = await fetch(`${BASE_URL}/streamplus/user/`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(request),
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
		const response = await fetch(`${BASE_URL}/streamplus/user/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ userName, password }),
		});
		console.log(response);
		if (response.ok) {
			const data = await response.json();
			return data;
		} else {
			// Añadido para manejar la respuesta de error y mostrar detalles
			const errorData = await response.json();
			console.error('Error details:', errorData);
			throw new Error(errorData.message || 'Error logging in');
		}
	} catch (error) {
		console.error('Error caught in catch:', error);
	}
};


export default {
	createUser,
	loginUser,
}