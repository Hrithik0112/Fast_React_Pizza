import { createSlice } from "@reduxjs/toolkit";
import userSlice from "../user/userSlice";

const initialState = {
  cart: [
    {
      pizaaId: 13,
      name: "Margarita",
      quantity: 2,
      unitPrice: 16,
      totalprice: 32,
    },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      // payload = newItem
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      //payload = pizzaid
      state.cart = state.cart.filter((item) => item.pizaaId !== action.payload);
    },
    IncreaseQuantityItem(state, action) {
      //payload = pizzaid
      const item = state.cart.find((item) => item.pizaaId === action.payload);
      item.quantity++;
      item.totalprice = item.quantity * item.unitPrice;
    },
    decreaseQuantityItem(state, action) {
      //payload = pizzaid
      const item = state.cart.find((item) => item.pizaaId === action.payload);
      item.quantity--;
      item.totalprice = item.quantity * item.unitPrice;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const { addItem, deleteItem, IncreaseQuantityItem, decreaseQuantityItem, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
