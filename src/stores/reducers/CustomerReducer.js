import { createSlice } from '@reduxjs/toolkit';
import { customerThunk } from '../thunks/CustomerThunk';
import { CustomerState } from '../initialState/CustomerState';

const customerSlice = createSlice({
	name: 'customer',
	initialState: CustomerState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(customerThunk.fulfilled, (state, action) => {
			if (action.payload.isSuccess === false)
			{
				state.isSuccess = action.payload.isSuccess;
				state.message = action.payload.message;
				state.customerFullName = action.payload.customerFullName;
				state.customerId = action.payload.customerId;
			}
			state.isSuccess = action.payload.isSuccess;
			state.message = action.payload.message;
			state.customerFullName = action.payload.customerFullName;
			state.customerId = action.payload.customerId;
		});
	}
});

const customerReducer = customerSlice.reducer;
const customerSelector = (state) => state.customerReducer;

export {
	customerReducer,
	customerSelector
};