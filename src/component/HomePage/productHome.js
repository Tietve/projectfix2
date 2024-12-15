import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { fetchProducts } from './MockApi';
import EventAPI from '../api/Event.js';
import MediaAPI from '../api/Media.js';

const API_BASE_URL = 'http://localhost:8080';

const ProductHome = () => {
	const [products, setProducts] = useState([]);
	const [media, setMedia] = useState([]);
	const [page, setPage] = useState(1);
	const [hasMore, setHasMore] = useState(true);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		//loadProducts(1, 6);
		loadEvents(); // Lần đầu load 6 sản phẩm
	}, []);

	const loadEvents = async () => {
		if (isLoading) return;

		setIsLoading(true);
		const result = await EventAPI.getEventList();

		setProducts((prevProducts) => {
			const existingUuids = new Set(prevProducts.map((p) => p.uuid));

			const newProducts = result
				.filter((p) => !existingUuids.has(p.uuid))
				.map((event) => {
					const timeStart = new Date(event.timeStart);
					return {
						...event,
						parsedMonth: timeStart.toLocaleString('en-US', { month: 'short' }), // First 3 characters of the month
						parsedDay: timeStart.getDate(), // Day of the month
					};
				});
			return [...prevProducts, ...newProducts];
		});
		setIsLoading(false);
	};

	/*
	const loadProducts = async (currentPage, limit = 5) => {
		// Mỗi lần Load More lấy 5 sản phẩm
		if (isLoading) return; // Tránh gọi nhiều lần khi đang tải

		setIsLoading(true);
		const result = await fetchProducts(currentPage, limit);

		// Thêm sản phẩm mới vào danh sách hiện tại, không trùng lặp
		setProducts((prevProducts) => {
			const existingIds = new Set(prevProducts.map((p) => p.id));
			const newProducts = result.products.filter((p) => !existingIds.has(p.id));
			return [...prevProducts, ...newProducts];
		});

		setHasMore(result.hasMore);
		if (result.hasMore) {
			setPage(currentPage + 1);
		}
		setIsLoading(false);
	};*/

	return (
		<Container className='my-5'>
			<h2 className='text-center mb-4'>Upcoming Events</h2>
			<Row>
				{products.map((product) => (
					<Col key={product.uuid} md={4} className='mb-4'>
						<Card>
							<Card.Img variant='top' src={product.thumbnailUrl} />
							<Card.Body>
								<Card.Title>{product.name}</Card.Title>
								<div className='d-flex justify-content-between align-items-center'>
									<div>
										<small className='text-muted'>
											{product.parsedMonth ?? 'APR'}
										</small>
										<h3>{product.parsedDay ?? '1'}</h3>
									</div>
									<Button
										variant='primary'
										href={API_BASE_URL + '/events/info/' + product.uuid}>
										View Details
									</Button>
								</div>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
			{hasMore && (
				<div className='text-center mt-4'>
					<Button
						variant='outline-primary'
						onClick={() => loadEvents()}
						disabled={isLoading}>
						{isLoading ? 'Loading...' : 'Load More'}
					</Button>
				</div>
			)}
		</Container>
	);
};

export default ProductHome;
