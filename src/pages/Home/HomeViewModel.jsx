import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from '../../hooks/useLocalStorage';
import { productSelector } from '../../stores/reducers/ProductReducer';
import { fetchProductAsyncThunk } from '../../stores/thunks/ProductThunk';

const HomeViewModel = () => {
	const dispatch = useDispatch()
	const { books } = useSelector(productSelector)

	useEffect(() => {
		dispatch(fetchProductAsyncThunk(null))
	}, [dispatch])

	return {
		books
	}
};

export default HomeViewModel;