import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/tickets';

const TicketAPI = {
	/**
	 * Get the list of tickets based on the user's role.
	 * Endpoint: GET /api/tickets/list
	 * @param {string} token - Authorization token for secure endpoint.
	 * @returns {Promise<Object[]>} A promise resolving to a list of ticket objects.
	 */
	getTicketList: async (token) => {
		try {
			const response = await axios.get(`${API_BASE_URL}/list`, {
				headers: { Authorization: `Bearer ${token}` },
			});
			return response.data;
		} catch (error) {
			console.error(
				'Error fetching ticket list:',
				error.response?.data || error.message,
			);
			throw error;
		}
	},

	/**
	 * Get tickets of a specific event.
	 * Endpoint: GET /api/tickets/event/{id}
	 * @param {number} eventId - The ID of the event.
	 * @returns {Promise<Object[]>} A promise resolving to a list of ticket objects.
	 */
	getTicketsOfEvent: async (eventId) => {
		try {
			const response = await axios.get(`${API_BASE_URL}/event/${eventId}`);
			return response.data;
		} catch (error) {
			if (error.response?.status === 404) {
				console.error('Event not found.');
			} else if (error.response?.status === 401) {
				console.error('Unauthorized access.');
			} else {
				console.error(
					'Error fetching tickets for event:',
					error.response?.data || error.message,
				);
			}
			throw error;
		}
	},

	/**
	 * Create a new ticket.
	 * Endpoint: POST /api/tickets/create
	 * @param {Object} ticketData - Data for creating the ticket.
	 * @param {string} token - Authorization token for secure endpoint.
	 * @returns {Promise<Object>} A promise resolving to the created ticket object.
	 */
	createTicket: async (ticketData, token) => {
		try {
			const response = await axios.post(`${API_BASE_URL}/create`, ticketData, {
				headers: { Authorization: `Bearer ${token}` },
			});
			return response.data;
		} catch (error) {
			if (error.response?.status === 404) {
				console.error('Resource not found.');
			} else if (error.response?.status === 401) {
				console.error('Unauthorized access.');
			} else {
				console.error(
					'Error creating ticket:',
					error.response?.data || error.message,
				);
			}
			throw error;
		}
	},

	/**
	 * Update an existing ticket.
	 * Endpoint: PUT /api/tickets/{id}
	 * @param {number} id - The ID of the ticket to update.
	 * @param {Object} updatedData - The updated ticket data.
	 * @param {string} token - Authorization token for secure endpoint.
	 * @returns {Promise<Object>} A promise resolving to the updated ticket object.
	 */
	updateTicket: async (id, updatedData, token) => {
		try {
			const response = await axios.put(`${API_BASE_URL}/${id}`, updatedData, {
				headers: { Authorization: `Bearer ${token}` },
			});
			return response.data;
		} catch (error) {
			if (error.response?.status === 404) {
				console.error('Ticket not found.');
			} else if (error.response?.status === 401) {
				console.error('Unauthorized access.');
			} else {
				console.error(
					'Error updating ticket:',
					error.response?.data || error.message,
				);
			}
			throw error;
		}
	},

	/**
	 * Delete a ticket by its ID.
	 * Endpoint: DELETE /api/tickets/{id}
	 * @param {number} id - The ID of the ticket to delete.
	 * @param {string} token - Authorization token for secure endpoint.
	 * @returns {Promise<string>} A promise resolving to the deletion confirmation message.
	 */
	deleteTicket: async (id, token) => {
		try {
			const response = await axios.delete(`${API_BASE_URL}/${id}`, {
				headers: { Authorization: `Bearer ${token}` },
			});
			return response.data;
		} catch (error) {
			if (error.response?.status === 404) {
				console.error('Ticket not found.');
			} else if (error.response?.status === 401) {
				console.error('Unauthorized access.');
			} else {
				console.error(
					'Error deleting ticket:',
					error.response?.data || error.message,
				);
			}
			throw error;
		}
	},

	/**
	 * Get information about a specific ticket.
	 * Endpoint: GET /api/tickets/{id}
	 * @param {number} id - The ID of the ticket.
	 * @param {string} token - Authorization token for secure endpoint.
	 * @returns {Promise<Object>} A promise resolving to the ticket details.
	 */
	getTicketInfo: async (id, token) => {
		try {
			const response = await axios.get(`${API_BASE_URL}/${id}`, {
				headers: { Authorization: `Bearer ${token}` },
			});
			return response.data;
		} catch (error) {
			if (error.response?.status === 404) {
				console.error('Ticket not found.');
			} else if (error.response?.status === 401) {
				console.error('Unauthorized access.');
			} else {
				console.error(
					'Error fetching ticket info:',
					error.response?.data || error.message,
				);
			}
			throw error;
		}
	},
};

export default TicketAPI;
