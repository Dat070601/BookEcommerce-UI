import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import useLocalStorage from './hooks/useLocalStorage';
import LoginPage from './pages/auth/login';
import RegisterPage from './pages/auth/register';
import Cart from './pages/Cart';
import Home from './pages/Home';
import LandingPage from './pages/LandingPage';
import NotFound from './pages/NotFound/NotFound';
import Order from './pages/Order';
import ProductDetail from './pages/ProductDetail';
import Search from './pages/Search';
import VerifyAccount from './pages/VerifyAccount';

const App = () => {

	const { set, remove } = useLocalStorage()

	useEffect(() => {
		setTimeout(() => {
			remove({
				key: "accessToken"
			})
		}, 1800000)
	}, [])

	return (
		<div>
			<Routes>
				<Route index path='/' element={<LandingPage />} />
				<Route path='login' element={<LoginPage />}></Route>
				<Route path='register' element={<RegisterPage />}></Route>
				<Route path='home' element={<Home />}></Route>
				<Route path='product/:id' element={<ProductDetail />}></Route>
				<Route path='verify/:email' element={<VerifyAccount />}></Route>
				<Route path='cart/:userId' element={<Cart />}></Route>
				<Route path='*' element={<NotFound />}></Route>
				<Route path='/order/:orderId' element={<Order />}></Route>
				<Route path='/search/:keyword' element={<Search />}></Route>
			</Routes>
		</div>
	);
};

export default App;