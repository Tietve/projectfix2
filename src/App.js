import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './HomePage';
import Footerheader from "./footerheader";
import EventDetails from "./EventDetails";
import Cart from "./Cart"
import Checkout from "./Checkout"
import './app.css'

const App = () => {
    return (
        <Router>

            <Routes>
                {/* Định tuyến các trang */}
                <Route path="/HomePage" element={<HomePage />} />
                <Route path="/footerheader" element={<Footerheader />} />
                <Route path="/eventdetails" element={<EventDetails />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/Checkout" element={<Checkout />} />
            </Routes>
        </Router>
    );
};

export default App;
