import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { DiscountState, DiscountPayLoad } from '../../models'
import discountApi from '../../api/discountApi'
import authStorage from '../../utils/authStorage'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

export const getAll = createAsyncThunk(
  'discount/getAll',
  async (_, { rejectWithValue }) => {
    try {
      return await discountApi.getAll()
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

const initialState: DiscountState = {
  product: undefined, 
  isLoading: false
}

const discountSlice = createSlice({
  name: 'discount',
  initialState,
  reducers: {},
})

// export const {} = authSlice.actions

export const discountAsyncAction = {
    getAll
}

const persistConfig = {
  //keyPrefix: 'taphoammo',
  key: 'Discount',
  storage,
}

const discountReducer = persistReducer(persistConfig, discountSlice.reducer)

export default discountReducer
