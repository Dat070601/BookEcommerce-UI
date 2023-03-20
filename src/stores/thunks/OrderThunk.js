import { createAsyncThunk } from "@reduxjs/toolkit"
import { addOrderAsync, getOrderAsyncById } from "../../api/order"
import { URL } from "../../constant"

const addOrderAsyncThunk = createAsyncThunk("order/add-order", async (payload) => {
  try {
    const response = await addOrderAsync(
      URL,
      payload.token,
      payload.data
    )
    return response
  } catch (error) {
    console.log(error)
  }
})

const getOrderAsyncThunk = createAsyncThunk("order/get-order", async (payload) => {
  try {
    const response = await getOrderAsyncById(URL, {
      id: payload.id
    })
    return response
  } catch (error) {
    console.log(error)
  }
})

export {
  addOrderAsyncThunk,
  getOrderAsyncThunk
}
