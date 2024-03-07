import { createSlice } from "@reduxjs/toolkit";
import { generateId } from "../utils/halpers/generateId";

const products = generateId();

const todoSlice = createSlice({
  name: "products",
  initialState: {
    products: products,
  },

  reducers: {
    addTodo(state, action) {
      state.products.push({
      });
    },

    toggleComplete(state, action) {
      const toggledTodo = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      toggledTodo.completed = !toggledTodo.completed;
    },

    removeProduct(state, action) {
      console.log(state, action);

      state.products = state.products.filter((item) => item.id !== action.
      payload
      );
    },
  },
});

export const { addTodo, toggleComplete, removeProduct } = todoSlice.actions;
export default todoSlice.reducer;
