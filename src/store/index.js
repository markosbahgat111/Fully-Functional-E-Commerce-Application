import { configureStore } from "@reduxjs/toolkit";
import fetchMenProducts from "src/api/men.middelware";
import fetchWomenProducts from "src/api/women.middelware";
import fetchProducts from "src/api/products.middelware";
import rootReducer from "./rootReducer";

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
})

store.dispatch(fetchProducts())
store.dispatch(fetchMenProducts())
store.dispatch(fetchWomenProducts())

export default store;
