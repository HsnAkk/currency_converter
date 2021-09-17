import { configureStore, getDefaultMiddleware, } from "@reduxjs/toolkit";
import { reducer } from './rootReducer';



  
const middleware = [...getDefaultMiddleware({
    serializableCheck: false
})];

export default configureStore({
  reducer,
  middleware
});
