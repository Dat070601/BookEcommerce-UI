import { createSlice } from '@reduxjs/toolkit';
import { cartState } from '../initialState/CartState';
import { fetchCartAsyncThunk } from '../thunks/CartThunk';

const cartSlice = createSlice({
	name: 'cart',
	initialState: cartState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchCartAsyncThunk.fulfilled, (state, action) => {
			state.carts = action.payload;
		});
	}
});

const cartReducer = cartSlice.reducer;
const cartSelector = (state) => state.cartReducer;

export { cartReducer, cartSelector };