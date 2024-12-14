const API_BASE_URL = 'http://localhost:8080/api/categories';

const CategoryAPI = {
	/**
	 * Fetches all available categories from the server.
	 * @returns {Promise<Array>} - A promise that resolves to the list of categories or rejects with an error.
	 */
	getAllCategories: async () => {
		try {
			const response = await fetch(API_BASE_URL, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			});

			if (!response.ok) {
				const errorData = await response.json();
				throw new Error(errorData.message || 'Failed to fetch categories');
			}

			const categories = await response.json();
			return categories; // e.g., [ { id: 1, name: "Music" }, { id: 2, name: "Sports" } ]
		} catch (error) {
			console.error('Error fetching categories:', error.message);
			throw error; // Re-throw for handling in the component
		}
	},
};

export default CategoryAPI;
