import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    size : localStorage.getItem("size") || ""
}


export const sizeSlice = createSlice({
    name : "size",
    initialState,
    reducers : {
        setSize : (state, action) => {
            state.size = action.payload
            localStorage.setItem("size", action.payload);
        }
    }
})

export const {setSize} = sizeSlice.actions
export default sizeSlice.reducer