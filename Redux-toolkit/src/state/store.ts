import { configureStore } from "@reduxjs/toolkit";
import conterReducer from './Slices/conterSlice';

export const store = configureStore({
    reducer: {
        conter: conterReducer,
    }
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispach = typeof store.dispatch;