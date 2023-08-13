import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import typeApi from '../../api/typeApi'
import { IBusinessResponseType, IShopType } from '../../models/Type';

export interface TypeState {
  businessType: IBusinessResponseType[];
  shopType: IShopType[];
}

export const storeBusinessType = createAsyncThunk(
  'business/type',
  async (payload, { rejectWithValue }) => {
    try {
      return await typeApi.businessType();
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const storeShopType = createAsyncThunk(
  'shop/type',
  async (payload, { rejectWithValue }) => {
    try {
      return await typeApi.shopTypeGetById(`${payload}`)
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

const initialState: TypeState = {
  businessType: [],
  shopType: [],
}
export const typeSlice = createSlice({
  name: 'type',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(storeBusinessType.fulfilled, (state, { payload }) => {
      state.businessType = payload
    });
    builder.addCase(storeShopType.fulfilled, (state, { payload }) => {
      state.shopType = payload
    })
  },
})

export const typeAction = {
  storeBusinessType,
  storeShopType,
}

const authReducer = persistReducer(persistConfig, authSlice.reducer)

export default typeAction.reducer
