import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    IsOpen:true,
}

const modalSlice = createSlice({
    name: 'toggleModal',
    initialState,
    reducers:{
        toggleModal(state){
            // const toggle = (input) => !input;
            state.IsOpen = !state.IsOpen;
        }
    }
})
export const {
    toggleModal,
}=modalSlice.actions;

export default modalSlice.reducer;