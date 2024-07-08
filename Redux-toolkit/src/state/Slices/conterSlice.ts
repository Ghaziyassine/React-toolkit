import { createSlice } from "@reduxjs/toolkit";


const initialState={
    value:0
};

const conterSlice = createSlice({
    name:"conter",
    initialState,
    reducers:{
        increment:(state)=> {
            state.value += 1;
        },
        decrement:(state)=> {
            state.value -= 1;
        }

    }
});

export const{increment,decrement} =conterSlice.actions;
export default conterSlice.reducer;