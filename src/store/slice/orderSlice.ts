import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { OrderState } from '../../models/Order'
import orderApi from '../../api/orderApi'
import { OrderQuery } from '../../hooks/useOrder'

export const getAllOrder = createAsyncThunk(
  'order/getAllOrder',
  async (initQuery: OrderQuery, { rejectWithValue }) => {
    try {
      return await orderApi.getOrderList(initQuery)
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

const initialState: OrderState = {
  orders: [],
  isLoadingOrder: false,
}

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllOrder.pending, (state) => {
      state.isLoadingOrder = true
    })
    builder.addCase(getAllOrder.fulfilled, (state, { payload }) => {
      state.orders = payload.data
      state.isLoadingOrder = false
    })
    builder.addCase(getAllOrder.rejected, (state) => {
      state.isLoadingOrder = false
    })
  },
})

// export const {} = authSlice.actions

export const orderAsyncAction = {
  getAllOrder,
}

const persistConfig = {
  //keyPrefix: 'taphoammo',
  key: 'Order',
  storage,
}

const orderReducer = persistReducer(persistConfig, orderSlice.reducer)

export default orderReducer
