const initialState = {
    totalPrice: 0,
    // Các dữ liệu khác của giỏ hàng như ticket, quantity, etc.
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_TOTAL_PRICE':
            return {
                ...state,
                totalPrice: action.payload,
            };
        default:
            return state;
    }
};
