import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { type } from "os";
import { RootState } from "../store/store";

export type Fees = {
    id: number,
    min: number,
    max: number,
    fee: number,
}; 

type tableState = {
    fees: Fees | null,
    error: string,
    loading: boolean,
}; 

export const fetchFees = createAsyncThunk("fees/getList", async () => {
    return fetch("http://localhost:8080/fees")
    .then((res) => res.json())
    .then(data => console.log(data));
})

const initialState:tableState = {
    fees: null,
    error: "",
    loading: false,
}
 
const tableSlice = createSlice({
    name: "fees",
    initialState,
    /*  reducers:{
           increase:(state: tableState,actions:PayloadAction<number>) =>{
              
              state.push({
                  id: state.length + 1,
                  min: actions.payload+1,
                  max:actions.payload+1000,
                  fee:5.0,
              });
                  
              console.log(state[state.length-1]);
          },
          decrease:(state: tableState,actions:PayloadAction<void>) =>{
              state.pop();
              console.log(state.length);
          },
      }, */
    extraReducers: (builder) => {
        builder.addCase(fetchFees.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchFees.fulfilled, (state, action) => {
            state.loading = false;
            state.error = '';
        });
        builder.addCase(fetchFees.rejected, (state) => {
            state.loading = false;
            /* state.fees = [] ; */
            state.error = '';
        });
    },
    reducers: {}
});


export const { /* increase,decrease */ } = tableSlice.actions;
export const  tableSelector = (store: RootState) => store.tableReducer;
export default tableSlice.reducer;

