import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './reducers/AuthReducer';
import { cartReducer } from './reducers/CartReducer';
import { customerReducer } from './reducers/CustomerReducer';
import { productReducer } from './reducers/ProductReducer';

const store = configureStore({
	reducer: {
		authReducer,
		cartReducer,
		customerReducer,
		productReducer
	}
});

export default store;