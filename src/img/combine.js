// App.js
import React from 'react';
import App from '../App.js'; // Import the UpcomingEvents component
import ProductCard from './ProductCard'; // Import the ProductCard component

const Combine = () => {
    return (
        <div style={{ padding: '20px' }}>
            <App />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '20px', marginTop: '20px' }}>
                <ProductCard
                    image="https://example.com/image1.png"
                    date="April 14"
                    location="San Francisco"
                    description="We’ll get you directly seated and inside for you to enjoy the show."
                />
                <ProductCard
                    image="https://example.com/image2.png"
                    date="April 15"
                    location="New York"
                    description="Join us for an unforgettable experience with amazing events."
                />
            </div>
        </div>
    );
}

export default Combine;
