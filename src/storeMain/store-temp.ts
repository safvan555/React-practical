import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

export const storeList = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
