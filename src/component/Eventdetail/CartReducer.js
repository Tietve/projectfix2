import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TicketItem {
    id: number;
    title: string;
    ticketType: "VIP" | "Standard";
    price: number;
    quantity: number;
    totalPrice: number;
    date: string;
    location: string;
    maxQuantity: number;
}

interface CartState {
    vipTickets: TicketItem[];
    standardTickets: TicketItem[];
}

const initialState: CartState = {
    vipTickets: [],
    standardTickets: [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<TicketItem>) => {
            const { ticketType } = action.payload;
            const targetArray = ticketType === "VIP" ? state.vipTickets : state.standardTickets;
            const existingItem = targetArray.find((item) => item.id === action.payload.id);

            if (existingItem) {
                existingItem.quantity += action.payload.quantity;
                existingItem.totalPrice = existingItem.quantity * existingItem.price;
            } else {
                targetArray.push({
                    ...action.payload,
                    totalPrice: action.payload.quantity * action.payload.price,
                });
            }
        },
        incrementQuantity: (state, action: PayloadAction<{ ticketType: "VIP" | "Standard"; id: number }>) => {
            const { ticketType, id } = action.payload;
            const targetArray = ticketType === "VIP" ? state.vipTickets : state.standardTickets;
            const item = targetArray.find((item) => item.id === id);

            if (item && item.quantity < item.maxQuantity) {
                item.quantity += 1;
                item.totalPrice = item.quantity * item.price;
            }
        },
        decrementQuantity: (state, action: PayloadAction<{ ticketType: "VIP" | "Standard"; id: number }>) => {
            const { ticketType, id } = action.payload;
            const targetArray = ticketType === "VIP" ? state.vipTickets : state.standardTickets;
            const item = targetArray.find((item) => item.id === id);

            if (item && item.quantity > 1) {
                item.quantity -= 1;
                item.totalPrice = item.quantity * item.price;
            } else if (item && item.quantity === 1) {
                const index = targetArray.findIndex((i) => i.id === id);
                if (index !== -1) {
                    targetArray.splice(index, 1);
                }
            }
        },
        removeItem: (state, action: PayloadAction<{ ticketType: "VIP" | "Standard"; id: number }>) => {
            const { ticketType, id } = action.payload;
            const targetArray = ticketType === "VIP" ? state.vipTickets : state.standardTickets;
            const index = targetArray.findIndex((item) => item.id === id);
            if (index !== -1) {
                targetArray.splice(index, 1);
            }
        },
        resetCart: (state) => {
            state.vipTickets = [];
            state.standardTickets = [];
        },
    },
});

export const { addToCart, incrementQuantity, decrementQuantity, removeItem, resetCart } = cartSlice.actions;
export default cartSlice.reducer;

