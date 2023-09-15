import {configureStore} from "@reduxjs/toolkit";
import counterSlice from "../features/count/counterSlice";

export const store = configureStore({
    reducer:{
        count : counterSlice
    }
})

export default store