// App.js
import React from 'react';

import Footer from './component/common/footer';
import Navbar from './component/common/navbar';
import Product from './component/Eventdetail/Product';
import EventDetail from './component/Eventdetail/EventDetail';

const EventDetails = () => {
	return (
		<div>
			<Navbar />
			<EventDetail />

			<Footer />
		</div>
	);
};

export default EventDetails;
