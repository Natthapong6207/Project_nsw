import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { type } from "os";
import { ServiceFee } from "../interfaces/ServiceFee";
import { RootState } from "../store/store";
import serviceFeeService from '../service/serviceFee.service'

interface AsyncState {
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;
    
}
interface ServiceFeeState extends AsyncState {
    serviceFees: ServiceFee[];
}; 

const initialState: ServiceFeeState = {
    serviceFees: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
}

export const listConfigFee = createAsyncThunk(
    '/serviceFee/list', async () => {
        try {

            return await serviceFeeService.listConfigFee();

        } catch (error) {
            console.log('Error: ', error)
        }
    }
)

export const tableSlice = createSlice({
    name: 'serviceFee',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(listConfigFee.pending, (state) => {
            state.isLoading = true
            console.log(state);
        })
        .addCase(listConfigFee.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.serviceFees = action.payload?.data || []
        })
        .addCase(listConfigFee.rejected, (state) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.serviceFees = []
        })
    }
})


export const { /* increase,decrease */ } = tableSlice.actions;
export const  tableSelector = (store: RootState) => store.auth;
export default tableSlice.reducer;


