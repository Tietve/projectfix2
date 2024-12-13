const mockProducts = [
    {
        id: 1,
        title: "Wonder Girls 2010 Wonder Girls World Tour",
        date: { month: "APR", day: 14 },
        image: "https://via.placeholder.com/343x197"
    },
    {
        id: 2,
        title: "JYJ 2011 JYJ Worldwide Concert Barcelona",
        date: { month: "AUG", day: 20 },
        image: "https://via.placeholder.com/343x197"
    },
    {
        id: 3,
        title: "2011 Super Junior SM Town Live '10 World Tour New York City",
        date: { month: "SEP", day: 18 },
        image: "https://via.placeholder.com/343x197"
    },
    {
        id: 4,
        title: "2011 Super xxx",
        date: { month: "SEP", day: 18 },
        image: "https://via.placeholder.com/343x197"
    },
    {
        id: 5,
        title: "2020 Super Junior ",
        date: { month: "SEP", day: 18 },
        image: "https://via.placeholder.com/343x197"
    },
    {
        id: 6,
        title: "'10 World Tour New York City",
        date: { month: "SEP", day: 18 },
        image: "https://via.placeholder.com/343x197"
    },
    {
        id: 7,
        title: "2011 Super Junior SM Town Live '10 World Tour New York City",
        date: { month: "SEP", day: 18 },
        image: "https://via.placeholder.com/343x197"
    },
    // Add more mock products here...
];

export const fetchProducts = (page = 1, limit = 6) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const startIndex = (page - 1) * limit;
            const endIndex = startIndex + limit;
            const paginatedProducts = mockProducts.slice(startIndex, endIndex);
            resolve({
                products: paginatedProducts,
                hasMore: endIndex < mockProducts.length
            });
        }, 500); // Simulate network delay
    });
};

