import { combineReducers } from 'redux';
import { cartReducer } from './Reducer'; // Đảm bảo import đúng file reducer

const RootReducer = combineReducers({
    cart: cartReducer,
    // Các reducer khác...
});

export default RootReducer;
