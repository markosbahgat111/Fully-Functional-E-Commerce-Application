import { createSlice } from "@reduxjs/toolkit"
import fetchMenProducts from "src/api/men.middelware";
import fetchWomenProducts from "src/api/women.middelware";
import fetchProducts from "src/api/products.middelware";

const dataSlice = createSlice({
    name: "data",
    initialState: {
        products: [],
        menProducts: [],
        womenProducts: [],
        
    },
    reducers: {},
    extraReducers: (builder) =>
    {
        builder.addCase(fetchProducts.fulfilled, (state, action) =>
        {
            state.products = action.payload;
        }),
        builder.addCase(fetchMenProducts.fulfilled, (state, action) =>
        {
            state.menProducts = action.payload;
        }),
        builder.addCase(fetchWomenProducts.fulfilled, (state, action) =>
        {
            state.womenProducts = action.payload;
        })
    }
})
export const dataState = (state) => state.data;
export const dataReducer = dataSlice.reducer;
