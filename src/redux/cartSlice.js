import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: JSON.parse(localStorage.getItem("carts")) || [],
  status: "idle",
  error: null,
};

const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItemIndex = state.items.findIndex(item => item.id === newItem.id);

      if (existingItemIndex !== -1) {
        // Item already exists, update quantity
        state.items[existingItemIndex].quantity += 1;
      } else {
        // Item does not exist, add new item
        state.items.push({ ...newItem, quantity: 1 });
      }

      localStorage.setItem("carts", JSON.stringify(state.items));
    },


    increaseQuantity: (state, action) => {
      const itemId = action.payload;
      const item = state.items.find(item => item.id === itemId);

      if (item) {
        item.quantity += 1;
        localStorage.setItem("carts", JSON.stringify(state.items));
      }
    },
    decreaseQuantity: (state, action) => {
      const itemId = action.payload;
      const item = state.items.find(item => item.id === itemId);

      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          // Remove item if quantity is 0
          state.items = state.items.filter(item => item.id !== itemId);
        }
        localStorage.setItem("carts", JSON.stringify(state.items));
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      localStorage.setItem("carts", JSON.stringify(state.items));
    },
    clearCart: (state) => {
      state.items = [];
      localStorage.removeItem("carts"); // Optionally remove from local storage
    },
    setLoading: (state) => {
      state.status = "loading";
    },
    setError: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
    setLoaded: (state) => {
      state.status = "succeeded";
    },
  },
});

export const { addItem, removeItem, clearCart, setLoading, setError, setLoaded,increaseQuantity,decreaseQuantity} = cartSlice.actions;
export default cartSlice.reducer;
