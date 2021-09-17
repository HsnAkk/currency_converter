import { combineReducers } from "@reduxjs/toolkit";
import { currencySlice } from "../features/currency/currencySlice";


export const reducer = combineReducers({
    currency: currencySlice.reducer
});