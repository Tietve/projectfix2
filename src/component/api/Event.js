import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/events';

const EventAPI = {
	/**
	 * Get the list of events available based on the user's role.
	 * Endpoint: GET /api/events/list
	 * @returns {Promise<Object[]>} A promise resolving to an array of event objects.
	 */
	getEventList: async () => {
		try {
			const response = await axios.get(`${API_BASE_URL}/list`);
			return response.data;
		} catch (error) {
			console.error(
				'Error fetching event list:',
				error.message || error.response?.data || error,
			);
			throw error;
		}
	},

	/**
	 * Get event info by event ID (Admin/Organizer only).
	 * Endpoint: GET /api/events/info?id={id}
	 * @param {number} id - The ID of the event.
	 * @param {string} token - Authorization token for secure endpoint.
	 * @returns {Promise<Object>} A promise resolving to the event details.
	 */
	getEventInfo: async (id, token) => {
		try {
			const response = await axios.get(`${API_BASE_URL}/info`, {
				params: { id },
				headers: { Authorization: `Bearer ${token}` },
			});
			return response.data;
		} catch (error) {
			console.error(
				'Error fetching event info:',
				error.message || error.response?.data || error,
			);
			throw error;
		}
	},

	/**
	 * Get event details by UUID (public endpoint).
	 * Endpoint: GET /api/events/info/{uuid}
	 * @param {string} uuid - The UUID of the event.
	 * @returns {Promise<Object>} A promise resolving to the event details.
	 */
	getEventByUuid: async (uuid) => {
		try {
			const response = await axios.get(`${API_BASE_URL}/info/${uuid}`);
			return response.data;
		} catch (error) {
			console.error(
				'Error fetching event by UUID:',
				error.message || error.response?.data || error,
			);
			throw error;
		}
	},

	/**
	 * Create a new event (Admin/Organizer only).
	 * Endpoint: POST /api/events/create
	 * @param {Object} eventData - The event data to create.
	 * @param {string} token - Authorization token for secure endpoint.
	 * @returns {Promise<string>} A promise resolving to the created event UUID.
	 */
	createEvent: async (eventData, token) => {
		try {
			const response = await axios.post(`${API_BASE_URL}/create`, eventData, {
				headers: { Authorization: `Bearer ${token}` },
			});
			return response.data;
		} catch (error) {
			console.error(
				'Error creating event:',
				error.message || error.response?.data || error,
			);
			throw error;
		}
	},

	/**
	 * Update an existing event (Admin/Organizer only).
	 * Endpoint: PUT /api/events/update/{uuid}
	 * @param {string} uuid - The UUID of the event to update.
	 * @param {Object} updatedData - The updated event data.
	 * @param {string} token - Authorization token for secure endpoint.
	 * @returns {Promise<Object>} A promise resolving to the updated event details.
	 */
	updateEvent: async (uuid, updatedData, token) => {
		try {
			const response = await axios.put(
				`${API_BASE_URL}/update/${uuid}`,
				updatedData,
				{
					headers: { Authorization: `Bearer ${token}` },
				},
			);
			return response.data;
		} catch (error) {
			console.error(
				'Error updating event:',
				error.message || error.response?.data || error,
			);
			throw error;
		}
	},

	/**
	 * Delete an event by its UUID (Admin/Organizer only).
	 * Endpoint: DELETE /api/events/delete/{uuid}
	 * @param {string} uuid - The UUID of the event to delete.
	 * @param {string} token - Authorization token for secure endpoint.
	 * @returns {Promise<string>} A promise resolving to the deletion confirmation message.
	 */
	deleteEvent: async (uuid, token) => {
		try {
			const response = await axios.delete(`${API_BASE_URL}/delete/${uuid}`, {
				headers: { Authorization: `Bearer ${token}` },
			});
			return response.data;
		} catch (error) {
			console.error(
				'Error deleting event:',
				error.message || error.response?.data || error,
			);
			throw error;
		}
	},
};

export default EventAPI;
