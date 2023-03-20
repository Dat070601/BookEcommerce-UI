import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCustomerProfileAsync } from '../../api/profile';
import { URL } from '../../constant';

const customerThunk = createAsyncThunk('customer/get-profile', async (payload) => {
	try {
		const response = await fetchCustomerProfileAsync(URL, {
			token: payload.accessToken
		});
		return response;
	} catch (error) {
		console.log(error);
	}
});

export { customerThunk };