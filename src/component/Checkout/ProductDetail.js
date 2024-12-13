import React, { useContext } from "react";
import { CartContext } from "../ShoppingCart/Cart";



const ProductDetail = () => {
    // Dùng useContext để lấy giá trị từ CartContext
    const { totalAmount } = useContext(CartContext);

    return (
        <div>
            <h2>Total Amount: {totalAmount}</h2>
        </div>
    );
};




export default ProductDetail;
