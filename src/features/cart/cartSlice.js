import { createSlice } from "@reduxjs/toolkit";
import userSlice from "../user/userSlice";

const initialState = {
  cart: [],
  //   cart: [
  //     {
  //       pizaaId: 13,
  //       name: "Margarita",
  //       quantity: 2,
  //       unitPrice: 16,
  //       totalprice: 32,
  //     },
  //   ],
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

/** in big rpoduction grade app this might cause performence issue,
 * to avoid that we need to use "reslect " package
 */

export const getCart = (state) => state.cart.cart;
export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);
