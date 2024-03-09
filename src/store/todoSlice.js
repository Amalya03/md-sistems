import { createSlice } from "@reduxjs/toolkit";
import { generateId } from "../utils/halpers/generateId";

const products = generateId();

const todoSlice = createSlice({
  name: "products",
  initialState: {
    products: products,
  },

  reducers: {
    addProduct(state, action) {
      state.products.push(action.payload);
    },

    editProduct(state, action) {
      let objIndex = state.products.findIndex((item) => item.id === action.payload.id);
      state.products[objIndex] = action.payload
    },

    removeProduct(state, action) {
      state.products = state.products.filter((item) => item.id !== action.payload
      );
    },
  },
});

export const { addProduct, editProduct, removeProduct } = todoSlice.actions;
export default todoSlice.reducer;
