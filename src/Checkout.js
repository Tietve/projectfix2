import React from 'react';
import Navbar from "./component/common/navbar";
import Checkouts from "../src/component/Checkout/Checkouts";
import Footer from "./component/common/footer";

const Checkout = () => {
    return (
        <div>
            <Navbar />
            <Checkouts />
            <Footer />
        </div>
    );
};

export default Checkout;
