import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import sizeReducer from "./sizeSlice";

export const store = configureStore({
    reducer: {
        cart : cartReducer,
        size : sizeReducer
    }
})

