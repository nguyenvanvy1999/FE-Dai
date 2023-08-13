import { ProductQuery } from './../../hooks/useProduct'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { ProductState } from '../../models/Product'
import productApi from '../../api/productApi'

export const getAll = createAsyncThunk(
  'product/getAll',
  async (initQuery: ProductQuery, { rejectWithValue }) => {
    try {
      return await productApi.productList(initQuery)
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

const initialState: ProductState = {
  products: [],
  isLoadingProduct: false,
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAll.pending, (state) => {
      state.isLoadingProduct = true
    })
    builder.addCase(getAll.fulfilled, (state, { payload }) => {
      state.products = payload.data
      state.isLoadingProduct = false
    })
    builder.addCase(getAll.rejected, (state) => {
      state.isLoadingProduct = false
    })
  },
})

// export const {} = authSlice.actions

export const productAsyncAction = {
  getAll,
}

const persistConfig = {
  //keyPrefix: 'taphoammo',
  key: 'Product',
  storage,
}

const productReducer = persistReducer(persistConfig, productSlice.reducer)

export default productReducer
