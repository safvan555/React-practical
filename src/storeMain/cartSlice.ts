import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

{/* If data exists, it parses and returns it. Otherwise, it returns an empty array */}

const cardStorage = (): CartItem[] => {
  const storeCart = localStorage.getItem('cart');
  return storeCart ? JSON.parse(storeCart) : [];
}

const initialState: CartState = {
  items: cardStorage(),
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => { // here will Increases the quantity
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push(action.payload);
      }
      localStorage.setItem('cart', JSON.stringify(state.items));
    },
    adjustQuantity: (state, action: PayloadAction<{ id: number, quantity: number }>) => { // here find the product by id and updates its quantity
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
        localStorage.setItem('cart', JSON.stringify(state.items));
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => { // for remove product
      state.items = state.items.filter(item => item.id !== action.payload);
      localStorage.setItem('cart', JSON.stringify(state.items));
    },
  },
});

export const { addToCart, adjustQuantity, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;