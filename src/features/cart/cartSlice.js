import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const defaultState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: JSON.parse(localStorage.getItem("cart")) || defaultState,
  reducers: {
    addItem: (state, action) => {
      const { product } = action.payload;
      const item = state.cartItems.find((i) => i.cartId === product.cartId);
      if (item) {
        item.amount += product.amount;
      } else {
        state.cartItems.push(product);
      }
      state.numItemsInCart += Number(product.amount);
      state.cartTotal += product.amount * product.price;
      cartSlice.caseReducers.calculateTotals(state);
      toast.success("Item added to cart");
    },
    clearCart: (state) => {
      localStorage.setItem("cart", JSON.stringify(defaultState));
      return defaultState;
    },
    removeItem: (state, action) => {
      const { cartId } = action.payload;
      const product = state.cartItems.find((i) => i.cartId === cartId);
      state.cartItems = state.cartItems.filter((i) => i.cartId !== cartId);
      state.numItemsInCart -= Number(product.amount);
      state.cartTotal -= product.amount * product.price;
      cartSlice.caseReducers.calculateTotals(state);
      toast.info("Item removed from cart");
    },
    editItem: (state, action) => {
      const { cartId, newAmount } = action.payload;
      const product = state.cartItems.find((i) => i.cartId === cartId);
      //logic to filter the change number of items of item with cartId === cartId
      //   state.cartItems = state.cartItems.map((i) => {
      //     const newItem = i;
      //     if (newItem === product) {
      //       newItem.amount = newAmount;
      //     }
      //     return newItem;
      //   });
      state.numItemsInCart += Number(newAmount - product.amount);
      state.cartTotal += (newAmount - product.amount) * product.price;
      product.amount = newAmount;
      cartSlice.caseReducers.calculateTotals(state);
      toast.info("Cart Updated");
    },
    calculateTotals: (state) => {
      state.tax = 0.1 * state.cartTotal;
      state.orderTotal = state.cartTotal + state.shipping + state.tax;
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addItem, clearCart, removeItem, editItem } = cartSlice.actions;
export default cartSlice.reducer;
