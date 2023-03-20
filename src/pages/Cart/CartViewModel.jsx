import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import useLocalStorage from '../../hooks/useLocalStorage';
import { cartSelector } from '../../stores/reducers/CartReducer';
import { fetchCartAsyncThunk } from '../../stores/thunks/CartThunk';

const CartViewModel = () => {
	const [ quantity, setQuantity ] = useState(0);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { get, set } = useLocalStorage();
	const params = useParams();
	const { carts } = useSelector(cartSelector);
	const accessTokenSaved = get({
		key: 'accessToken'
	});

	useEffect(() => {
		if (accessTokenSaved === '')
		{
			navigate('*');
		}
	}, [accessTokenSaved, navigate]);

	useEffect(() => {
		dispatch(fetchCartAsyncThunk({
			token: accessTokenSaved,
			userId: params.userId
		}));
	}, [params.userId, accessTokenSaved, dispatch]);

	const selectProductAddToOrder = (id, event) => {
		if (event.target.checked === true)
		{
			console.log(`checked in ${id}`);
		}
	};

	const increase = () => {
		setQuantity(quantity + 1);
	};

	const decrease = () => {
		setQuantity(quantity - 1);
	};

	useEffect(() => {
		if (quantity < 0)
		{
			setQuantity(0);
		}
	}, [quantity]);

	return {
		quantity,
		increase,
		decrease,
		carts,
		selectProductAddToOrder
	};
};

export default CartViewModel;