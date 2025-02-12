import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

{/* this is initializes the redux store 
  like add update remove will be handle by this
  */}
  
export const storeList = configureStore({
  reducer: {
    cart: cartReducer,
  },
});