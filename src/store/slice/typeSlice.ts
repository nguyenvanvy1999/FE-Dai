import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { TypeState } from '../../models/Type'
import typeApi from '../../api/typeApi'

export const getProductType = createAsyncThunk(
  'type/getProductType',
  async (_, { rejectWithValue }) => {
    try {
      return await typeApi.productType()
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

const initialState: TypeState = {
  productTypes: [],
  isLoadingProductType: false,
}

const typeSlice = createSlice({
  name: 'type',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductType.pending, (state) => {
      state.isLoadingProductType = true
    })
    builder.addCase(getProductType.fulfilled, (state, { payload }) => {
      state.productTypes = payload
      state.isLoadingProductType = false
    })
    builder.addCase(getProductType.rejected, (state) => {
      state.isLoadingProductType = false
    })
  },
})

// export const {} = authSlice.actions

export const typeAsyncAction = {
  getProductType,
}

const persistConfig = {
  //keyPrefix: 'taphoammo',
  key: 'ProductType',
  storage,
}

const typeReducer = persistReducer(persistConfig, typeSlice.reducer)

export default typeReducer
