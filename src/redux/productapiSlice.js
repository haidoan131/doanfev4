import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
const url = "https://66a07b887053166bcabb8cd6.mockapi.io/pets";

export const fetchUserData1 = createAsyncThunk(
  "products/fetchUserData",
  async () => {
    //const { apiClient } = extra;
    const response = await axios.get(url);
  

    return response.data;
  }
);

export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (productId) => {
    const response = await axios.get(`${url}/${productId}`);
    console.log(response.data);
    
    return response.data;
  }
);
const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    filteredProducts: [],
    status: "idle",
    error: null,
    selectedCategory: "all", // Default to 'all'
    selectedProduct: null, // Thêm state để lưu sản phẩm theo ID
  },
  reducers: {
    setCategory(state, action) {
      state.selectedCategory = action.payload;
      console.log(action.payload);
      if (action.payload === "all") {
        state.filteredProducts = state.products;
      } else {
        state.filteredProducts = state.products.filter(
          (product) => product.cate === action.payload
        );
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData1.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserData1.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
        state.filteredProducts = action.payload; // Initially show all products
      })
      .addCase(fetchUserData1.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchProductById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.selectedProduct = action.payload; // Cập nhật sản phẩm theo ID
        state.filteredProducts = [action.payload]; // Có thể cập nhật filteredProducts nếu cần
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export const { setCategory } = productSlice.actions;
export default productSlice.reducer;
