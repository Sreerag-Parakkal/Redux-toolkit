import {createSlice} from '@reduxjs/toolkit';
const initialState={
    count : 0,
}

export const counterSlice = createSlice({
    name:"My Counter",
    initialState,
    reducers:{
        increment:(state,action) =>{
            state.count +=1;
        },
        decrement:(state,action) =>{
            state.count -=1;
        },
    }
});

// console.log(counterSlice);

export const{increment,decrement} = counterSlice.actions;
export default counterSlice.reducer;