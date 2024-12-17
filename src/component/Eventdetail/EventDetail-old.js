import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useDispatch } from 'react-redux';
import { Button, Card, Badge } from 'react-bootstrap';
import EventAPI from '../api/Event';
import MediaAPI from '../api/Media';
import TicketAPI from '../api/Ticket';
import { addToCart } from './CartReducer';
import './EventDetail.css';

export default function EventDetail() {
	const { eventUuid } = useParams();
	const dispatch = useDispatch();
	const [event, setEvent] = useState(null);
	const [media, setMedia] = useState([]);
	const [tickets, setTickets] = useState([]);
	const [quantity, setQuantity] = useState({});

	const formatDate = (dateString) => {
		return new Date(dateString).toLocaleString('en-US', {
			weekday: 'long',
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			hour: '2-digit',
			minute: '2-digit',
		});
	};

	useEffect(() => {
		// Fetch event details
		EventAPI.getEventByUuid(eventUuid)
			.then((data) => setEvent(data))
			.catch((error) => console.error('Error fetching event details:', error));

		// Fetch event media
		MediaAPI.getEventMedia(eventUuid)
			.then((data) => setMedia(data))
			.catch((error) => console.error('Error fetching event media:', error));

		// Fetch tickets for the event
		TicketAPI.getTicketsOfEvent(eventUuid)
			.then((data) => {
				setTickets(data);
				const initialQuantities = {};
				data.forEach((ticket) => {
					initialQuantities[ticket.id] = 0;
				});
				setQuantity(initialQuantities);
			})
			.catch((error) => console.error('Error fetching tickets:', error));
	}, [eventUuid]);

	if (!event) {
		return <div>Loading event details...</div>;
	}

	return (
		<div className='container mx-auto px-4 py-8'>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
				{/* Media Section */}
				<div className='image-container'>
					{media.length > 0 ? (
						<img src={media[0].url} alt={event.name} />
					) : (
						<img src='https://via.placeholder.com/343x197' alt='Placeholder' />
					)}
				</div>

				{/* Event Details Section */}
				<div className='space-y-6'>
					<div>
						<Badge className='mb-2'>{event.categoryName}</Badge>
						<h1 className='text-3xl font-bold'>{event.name}</h1>
						<div className='flex items-center gap-2 text-muted-foreground mt-2'>
							<CalendarTodayIcon className='w-4 h-4' />
							<span>{formatDate(event.timeStart)}</span>
						</div>
						<div className='flex items-center gap-2 text-muted-foreground'>
							<LocationOnIcon className='w-4 h-4' />
							<span>{event.place}</span>
						</div>
						<p>
							<span className='font-medium'>Duration:</span>{' '}
							{formatDate(event.timeStart)} -{' '}
							{new Date(event.timeEnd).toLocaleTimeString()}
						</p>
						<p>
							<span>Max quantity:</span> {event.maxQuantity}
						</p>
					</div>

					{/* Tickets Section */}
					<Card className='p-2 max-w-xxs mx-auto card-custom'>
						<div className='space-y-2'>
							<h2 className='font-medium text-sm text-center'>Tickets</h2>
							<div className='space-y-1'>
								{tickets.map((ticket) => (
									<div
										key={ticket.id}
										className={`p-2 rounded-lg border border-gray-200 cursor-pointer text-sm ${
											quantity[ticket.id] > 0
												? 'border-primary bg-primary/10'
												: ''
										}`}>
										<div className='flex justify-between items-center'>
											<div className='flex-1'>
												<h5 className='font-normal text-xs'>
													{ticket.ticketName}
												</h5>
												<p className='text-xs text-muted-foreground'>
													{ticket.ticketPosition}
												</p>
											</div>
											<p className='ml-2 text-sm font-medium text-right'>
												${ticket.price}
											</p>
										</div>
									</div>
								))}
							</div>
						</div>
					</Card>
					<Button
						className='w-full'
						onClick={() => {
							dispatch(
								addToCart({
									id: event.uuid,
									title: event.name,
									tickets: tickets,
									quantities: quantity,
								}),
							);
						}}>
						<AddShoppingCartIcon className='mr-2 h-4 w-4' />
						Buy now
					</Button>

					{/* Event Description */}
					<div className='space-y-4'>
						<h2 className='text-xl font-semibold'>Event Details</h2>
						<p className='text-muted-foreground'>{event.description}</p>
						<div className='space-y-2'>
							<p>
								<span className='font-medium'>Organizer:</span>{' '}
								{event.organizer.fullName}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
