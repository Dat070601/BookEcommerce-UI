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
	const { get } = useLocalStorage();
	const [ prepareOrderProduct, setPrepareOrderProduct ] = useState([])
	const params = useParams();
	const { carts } = useSelector(cartSelector);
	const accessTokenSaved = get({
		key: 'accessToken'
	});

	useEffect(() => {
		if (!accessTokenSaved) navigate("/login")
	}, [accessTokenSaved])

	useEffect(() => {
		dispatch(fetchCartAsyncThunk({
			token: accessTokenSaved,
			userId: params.userId
		}));
	}, [accessTokenSaved, dispatch]);

	const selectProductAddToOrder = ({ id, total }, event) => {
		if (event.target.checked === true)
		{
			setPrepareOrderProduct([...prepareOrderProduct, { id, total }])
		} 
		else
		{
			setPrepareOrderProduct(prepareOrderProduct.filter(product => product.id !== id))
		}
	};

	const increase = () => {
		setQuantity(quantity + 1);
	};

	const decrease = () => {
		setQuantity(quantity - 1);
	};

	const getTotalInCart = (cart) => {
		const initialValue = 0
		const totalPrice = cart.reduce((first, current) => first + current.total, initialValue)
		return totalPrice
	}

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
		selectProductAddToOrder,
		getTotalInCart,
		prepareOrderProduct
	};
};

export default CartViewModel;