import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/media';

const MediaAPI = {
	/**
	 * Fetch all media for a given event by its UUID.
	 * @param {string} eventUuid - The UUID of the event.
	 * @returns {Promise<Object[]>} A promise resolving to an array of media objects.
	 */
	getEventMedia: async (eventUuid) => {
		try {
			const response = await axios.get(`${API_BASE_URL}/event/${eventUuid}`);
			return response.data; // Return the array of media objects
		} catch (error) {
			console.error(
				'Error fetching media for event:',
				error.message || error.response?.data || error,
			);
			throw error; // Re-throw error for further handling if needed
		}
	},
};

export default MediaAPI;
