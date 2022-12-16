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

export const createConfigFee = createAsyncThunk(
    '/serviceFee/addServiceFee', 
    async (serviceFees: ServiceFee[], thunkAPI) => {
        try {
            return await serviceFeeService.createConfigFee(serviceFees);
        } catch (error) {
            return thunkAPI.rejectWithValue('Unable to create Service Fee')
        }
    }
)

export const deleteConfigFee = createAsyncThunk(
    '/serviceFee',
    async () => {
        try {
            return await serviceFeeService.deleteConfigFee();
        } catch (error) {
            console.log('Error: ', error)
        }
    }
)

export const serviceFeeSlice = createSlice({
    name: 'serviceFee',
    initialState,
    reducers: {
        increase:(state: ServiceFeeState,actions:PayloadAction<ServiceFee>) =>{
            state.serviceFees.push({
                id: state.serviceFees.length + 1,
                feePrice: actions.payload.feePrice,
                feeMin: actions.payload.feeMin,
                feeMax: actions.payload.feeMax,
            });
        },
        decrease:(state: ServiceFeeState) =>{
            state.serviceFees.pop();
        },
    },
    extraReducers: (builder) => {
        builder
        // GET LIST CONFIG FEE
        .addCase(listConfigFee.pending, (state) => {
            state.isLoading = true
            console.log(state);
        })
        .addCase(listConfigFee.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.serviceFees = action.payload?.data !!; state.serviceFees.push({
                id: state.serviceFees.length + 1,
                feePrice: 0,
                feeMin: 0,
                feeMax: 0,
            })
            
        })
        .addCase(listConfigFee.rejected, (state) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.serviceFees = []
        })
        // CREATE CONFIG FEE
        .addCase(createConfigFee.pending, (state) => {
            state.isLoading = true
            console.log(state);
        })
        .addCase(createConfigFee.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.serviceFees = action.payload || []
        })
        .addCase(createConfigFee.rejected, (state) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.serviceFees = []
        })
        // DELETE CONFIG FEE
        .addCase(deleteConfigFee.pending, (state) => {
            state.isLoading = true
            console.log(state);
        })
        .addCase(deleteConfigFee.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.serviceFees = action.payload?.data || []
        })
        .addCase(deleteConfigFee.rejected, (state) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.serviceFees = []
        })
    }
})

export const {  increase,decrease  } = serviceFeeSlice.actions;
export const  tableSelector = (store: RootState) => store.fees;
export default serviceFeeSlice.reducer;


