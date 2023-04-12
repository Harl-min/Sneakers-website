import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const orderSlice =createSlice({
    name:"order",
    initialState,
    reducers:{
        AddOrder(state,action){
            state.push(action.payload)
        }
    }
})

export const { AddOrder} = orderSlice.actions;

export default orderSlice.reducer;