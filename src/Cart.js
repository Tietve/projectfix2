import React from 'react';
import Navbar from "./component/common/navbar";

import Footer from "./component/common/footer";
import ShoppingCart from "./component/ShoppingCart/ShoppingCart";

const Checkout = () => {
    return(
        <div>
            <Navbar />
            <ShoppingCart />
            <Footer />
        </div>
    )

}

export default Checkout;