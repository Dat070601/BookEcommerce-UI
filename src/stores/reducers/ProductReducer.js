import { createSlice } from "@reduxjs/toolkit";
import { fetchProductAsyncThunk } from "../thunks/ProductThunk";
import { productState } from "../initialState/ProductState";

const productSlice = createSlice({
  name: "product",
  initialState: productState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProductAsyncThunk.fulfilled, (state, action) => {
      state.books = action.payload
    })
  }
})

const productReducer = productSlice.reducer
const productSelector = (state) => state.productReducer

export { productReducer, productSelector }
