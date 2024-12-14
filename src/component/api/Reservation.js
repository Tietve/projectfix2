import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/reservations';

const ReservationAPI = {
	/**
	 * Create a new reservation.
	 * @param {Object} reservationData - Data for the reservation to create.
	 * @returns {Promise<Object>} - The created reservation data.
	 */
	createReservation: async (reservationData) => {
		try {
			const response = await axios.post(
				`${API_BASE_URL}/create`,
				reservationData,
			);
			return response.data;
		} catch (error) {
			console.error(
				'Error creating reservation:',
				error.response?.data || error.message,
			);
			if (error.response?.status === 500) {
				throw new Error('Internal Server Error: Unable to create reservation.');
			}
			throw error;
		}
	},

	/**
	 * Fetch the list of all reservations.
	 * @returns {Promise<Array>} - A list of reservation data.
	 */
	getReservations: async () => {
		try {
			const response = await axios.get(`${API_BASE_URL}/list`);
			return response.data;
		} catch (error) {
			console.error(
				'Error fetching reservations:',
				error.response?.data || error.message,
			);
			if (error.response?.status === 401) {
				throw new Error('Unauthorized: Please log in to view reservations.');
			}
			if (error.response?.status === 500) {
				throw new Error('Internal Server Error: Unable to fetch reservations.');
			}
			throw error;
		}
	},

	/**
	 * Update an existing reservation.
	 * @param {Object} reservationData - Updated reservation data.
	 * @returns {Promise<Object>} - The updated reservation data.
	 */
	updateReservation: async (reservationData) => {
		try {
			const response = await axios.put(
				`${API_BASE_URL}/update`,
				reservationData,
			);
			return response.data;
		} catch (error) {
			console.error(
				'Error updating reservation:',
				error.response?.data || error.message,
			);
			if (error.response?.status === 404) {
				throw new Error('Not Found: Reservation does not exist.');
			}
			if (error.response?.status === 500) {
				throw new Error('Internal Server Error: Unable to update reservation.');
			}
			throw error;
		}
	},

	/**
	 * Delete a reservation.
	 * @param {string} uuid - The UUID of the reservation to delete.
	 * @returns {Promise<string>} - Success message.
	 */
	deleteReservation: async (uuid) => {
		try {
			const response = await axios.delete(`${API_BASE_URL}/delete`, {
				params: { uuid },
			});
			return response.data;
		} catch (error) {
			console.error(
				'Error deleting reservation:',
				error.response?.data || error.message,
			);
			if (error.response?.status === 404) {
				throw new Error('Not Found: Reservation does not exist.');
			}
			if (error.response?.status === 500) {
				throw new Error('Internal Server Error: Unable to delete reservation.');
			}
			throw error;
		}
	},

	/**
	 * Check-in a reservation.
	 * @param {string} reservationUuid - The UUID of the reservation to check in.
	 * @returns {Promise<string>} - Check-in status message.
	 */
	checkInReservation: async (reservationUuid) => {
		try {
			const response = await axios.get(
				`${API_BASE_URL}/checkin/${reservationUuid}`,
			);
			return response.data;
		} catch (error) {
			console.error(
				'Error during reservation check-in:',
				error.response?.data || error.message,
			);
			if (error.response?.status === 401) {
				throw new Error('Unauthorized: Please log in to check in.');
			}
			if (error.response?.status === 404) {
				throw new Error('Not Found: Reservation does not exist.');
			}
			throw error;
		}
	},
};

export default ReservationAPI;
