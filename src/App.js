import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './HomePage';
import Footerheader from './footerheader';
import EventDetail from './EventDetails';
import Cart from './Cart';
import Checkout from './Checkout';
import './app.css';

const App = () => {
	return (
		<Router>
			<Routes>
				{/* Định tuyến các trang */}
				<Route path='/' element={<HomePage />} />
				<Route path='/footerheader' element={<Footerheader />} />
				<Route path='/events/:eventUuid' element={<EventDetail />} />
				<Route path='/cart' element={<Cart />} />
				<Route path='/checkout' element={<Checkout />} />
			</Routes>
		</Router>
	);
};

export default App;
