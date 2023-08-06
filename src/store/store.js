import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import sizeSlice from "./sizeSlice";

export const store = configureStore({
    reducer: {
        cart : cartSlice,
        size : sizeSlice
    }
})

