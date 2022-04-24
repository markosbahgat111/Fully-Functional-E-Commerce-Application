import { combineReducers } from "@reduxjs/toolkit";
import { dataReducer } from "src/slices/data.slice";
import { authReducer } from "src/slices/auth.slice";
import { cartReducer } from 'src/slices/cart.slice';

const rootReducer = combineReducers({
    auth: authReducer,
    data: dataReducer,
    cart: cartReducer
})



export default rootReducer;
