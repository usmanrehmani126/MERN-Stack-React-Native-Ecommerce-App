import {createSlice} from '@reduxjs/toolkit';
export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.cartItems.find(
        p => p.id === action.payload.id,
      );
      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        state.cartItems.push({...action.payload, quantity: 1});
      }
    },
  },
});
export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;
