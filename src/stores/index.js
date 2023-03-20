import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './reducers/AuthReducer';
import { cartReducer } from './reducers/CartReducer';
import { customerReducer } from './reducers/CustomerReducer';
import { productReducer } from './reducers/ProductReducer';
import { orderReducer } from './reducers/OrderReducer';
import { paymentReducer } from './reducers/PaymentReducer';
import { searchReducer } from './reducers/SearchReducer';

const store = configureStore({
	reducer: {
		authReducer,
		cartReducer,
		customerReducer,
		productReducer,
		orderReducer,
		paymentReducer,
		searchReducer
	}
});

export default store;