import axios from 'axios';

const fetchCartAsync = async (url, token, { userId }) => {
	try {
		const response = await axios.get(`${url}/api/cart/${userId}`, {
			headers: {
				Authorization: `bearer ${token}`
			}
		});
		return response.data;
	} catch (error) {
		console.log(error);
	}
};

export {
	fetchCartAsync
};