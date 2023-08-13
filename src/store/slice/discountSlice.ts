import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { DiscountState } from '../../models'
import discountApi from '../../api/discountApi'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

export const getAll = createAsyncThunk('discount/getAll', async (_, { rejectWithValue }) => {
  try {
    return await discountApi.getAll()
  } catch (error) {
    return rejectWithValue(error)
  }
})

const initialState: DiscountState = {
  discounts: [],
  isLoadingDiscount: false,
}

const discountSlice = createSlice({
  name: 'discount',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAll.pending, (state) => {
      state.isLoadingDiscount = true
    })
    builder.addCase(getAll.fulfilled, (state, { payload }) => {
      state.discounts = payload
    })
    builder.addCase(getAll.rejected, (state) => {
      state.isLoadingDiscount = false
    })
  },
})

// export const {} = authSlice.actions

export const discountAsyncAction = {
  getAll,
}

const persistConfig = {
  //keyPrefix: 'taphoammo',
  key: 'Discount',
  storage,
}

const discountReducer = persistReducer(persistConfig, discountSlice.reducer)

export default discountReducer
