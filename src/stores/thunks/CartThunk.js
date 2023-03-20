import { fetchCartAsync } from '../../api/cart';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { URL } from '../../constant';

const fetchCartAsyncThunk = createAsyncThunk('cart/fetch-cart', async (payload) => {
	try {
		const response = await fetchCartAsync(
			URL, 
			payload.token,
			{
				userId: payload.userId
			}
		);
		return response;
	} catch (error) {
		console.log(error);
	}
});

export { fetchCartAsyncThunk };