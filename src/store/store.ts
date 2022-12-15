import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux';
import tableReducer from '../slices/tableSlice';

const reducer = {
    tableReducer,
}

export const store = configureStore({
    reducer,
    devTools: process.env.NODE_ENV === "development",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();