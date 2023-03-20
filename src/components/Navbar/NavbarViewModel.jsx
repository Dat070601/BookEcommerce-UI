import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from '../../hooks/useLocalStorage';
import { authSelector } from '../../stores/reducers/AuthReducer';
import { customerSelector } from '../../stores/reducers/CustomerReducer';
import { getUserLoggedAsyncThunk } from '../../stores/thunks/AuthThunk';
import { customerThunk } from '../../stores/thunks/CustomerThunk';

const NavbarViewModel = () => {
	const { isSuccess, email, id, accessToken } = useSelector(authSelector);
	const { customerFullName, customerId } = useSelector(customerSelector);
	const { get, set, remove } = useLocalStorage();
	const navigate = useNavigate()
	const dispatch = useDispatch();
	const accessTokenSaved = get({
		key: 'accessToken'
	});
	
	useEffect(() => {
		dispatch(getUserLoggedAsyncThunk({
			accessToken: accessTokenSaved
		}));
	}, [accessTokenSaved, dispatch]);

	useEffect(() => {
		dispatch(customerThunk({
			accessToken: accessTokenSaved
		}));
	}, [isSuccess, dispatch]);

	const signOut = () => {
		remove({ 
			key: "accessToken"
		})
		window.location.reload();
	};

	return {
		isSuccess,
		email,
		id,
		signOut,
		customerFullName,
		customerId,
		accessTokenSaved
	};
};

export default NavbarViewModel;