import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state,action){
        state.cart.push(action.payload);
    },
    removeItem(state,action){
      state.cart=state.cart.filter((item) => item.id !== action.payload);
    },
    updateItem(state,action){
      state.cart.forEach((item)=>{
        if(item.id === action.payload.id){
          item.orderAmount +=action.payload.orderAmount 
        }
      })
    },
    clearCart(state){
      state.cart = [];
    }
    
  },
});

export const {
    addItem,
    removeItem,
    updateItem,
}=cartSlice.actions;

export default cartSlice.reducer;