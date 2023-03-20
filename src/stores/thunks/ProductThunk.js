import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProductAsync } from "../../api/product";

const fetchProductAsyncThunk = createAsyncThunk("product/fetch-product", async (payload) => {
  try {
    const response = await fetchProductAsync()
    return response
  } catch (error) {
    console.log(error)
  }
})

export { fetchProductAsyncThunk }