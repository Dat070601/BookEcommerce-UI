import axios from 'axios';

const fetchCustomerProfileAsync = async (url, { token }) => {
	try {
		const response = await axios.get(`${url}/get-customer`, {
			headers: {
				'Authorization': `Bearer ${token}`
			}
		});
		return response.data;
	} catch (error) {
		console.log(error);
	}
};

export { fetchCustomerProfileAsync };