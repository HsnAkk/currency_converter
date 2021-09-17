import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICurrency } from '../../type';
  


const currencyInitialState: ICurrency = {
    currOne: 'USD - United States Dollar',
    currTwo: 'EUR - Euro',
    currOneAmount: 0,
    currTwoAmount: 0,
    period: '5min',
    alertPrice: 0,
    showModal: false,
    refreshCheck: false,
    rate: ''
}
  
export const currencySlice = createSlice({
    name: "currency",
    initialState: currencyInitialState,
    reducers: {
        getCurrOne: (state, { payload }: PayloadAction<{ value: string }>) => {
            state.currOne = payload.value
        },
        getCurrTwo: (state, { payload }: PayloadAction<{ value: string }>) => {
            state.currTwo = payload.value
        },
        getCurrOneAmount: (state, { payload }: PayloadAction<{ value: number }>) => {
            state.currOneAmount = payload.value
        },
        getRate: (state, { payload }: PayloadAction<{ value: string }>) => {
            state.rate = payload.value
        },
        getAlertPrice: (state, { payload }: PayloadAction<{ value: number }>) => {
            state.alertPrice = payload.value
        },
        updatePeriod: (state, { payload }: PayloadAction<{ value: string }>) => {
            state.period = payload.value
        },
        showModal: (state, { payload }: PayloadAction<{ value: boolean }>) => {
            state.showModal = payload.value
        },
        refreshCheck: (state, { payload }: PayloadAction<{ value: boolean }>) => {
            state.refreshCheck = payload.value
        },
    }
})

export const {
    getRate: getRateActionCreator,
    getCurrOne: getCurrOneActionCreator,
    getCurrTwo: getCurrTwoActionCreator,
    getCurrOneAmount: getCurrOneAmountActionCreator,
    updatePeriod: updatePeriodActionCreator,
    getAlertPrice: getAlertPriceActionCreater,
    showModal: showModalActionCreater,
    refreshCheck: refreshCheckActionCreater,
} = currencySlice.actions;