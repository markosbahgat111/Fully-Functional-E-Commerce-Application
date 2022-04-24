import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        showCart:false,
        cartProducts: [],
    },
    reducers: {
        append: (state, action) =>
        {
            state.cartProducts.push(action.payload);
        },
        incrementCount: (state, action) =>
        {
            const target = state.cartProducts.find(item => item.id === action.payload.id);
            if (target) target.count = action.payload.count;

        },
        decrementCount: (state, action) =>
        {
            const target = state.cartProducts.find(item => item.id === action.payload.id);
            if (target) target.count = action.payload.count;
        },
        remove: (state, action) =>
        {
            state.cartProducts = [...state.cartProducts.filter(item => item.id !== action.payload)];
        },
        toggleModel: (state) =>
        {
            state.showCart = !state.showCart
        }
    },
})
export const cartState = (state) => state.cart;
export const cartReducer = cartSlice.reducer;
export const { append, remove, incrementCount, decrementCount, toggleModel } = cartSlice.actions
