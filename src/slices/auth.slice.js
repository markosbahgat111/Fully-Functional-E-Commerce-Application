import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: {},
        auth: false
    },
    reducers: {
        signIn: (state, action) =>
        {
            state.user = action.payload;
        },
        userAuthnticated: (state, action) =>
        {
            state.auth = action.payload;
        }
    }
})
export const authState = (state) => state.auth;
export const authReducer = authSlice.reducer;
export const { signIn, userAuthnticated } = authSlice.actions;
