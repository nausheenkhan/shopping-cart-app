import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: "cart",
    initialState: { items: [] },
    reducers: {
        addItem: (state, action) => {
            const item = action.payload;
            const existing = state.items.find((i) => i.id === item.id);

            if (existing) {
                existing.qty = existing.qty + 1;
            } else {
                state.items.push({...item, qty: 1});
            }
        },
        removeItem: (state, action) => {
            state.items = state.items.filter((i) => i.id !== action.payload);
        },
        increaseQty: (state, action) => {
            const item = state.items.find((i) => i.id === action.payload);
            if (item) {
                item.qty = item.qty + 1;
            }
        },
        decreaseQty: (state, action) => {
            const item = state.items.find((i) => i.id === action.payload);
            if (item && item.qty > 1) {
                item.qty = item.qty - 1;
            }
        },
        clearCart: (state) => {
            state.items = [];
        }
    }
});

export const {addItem, removeItem, increaseQty, decreaseQty, clearCart} = cartSlice.actions;

export default cartSlice.reducer;