import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { AuthState, LoginPayload, RegisterPayload } from '../../models'
import userApi from '../../api/userApi'
import authStorage from '../../utils/authStorage'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

export const register = createAsyncThunk(
  'auth/register',
  async (payload: RegisterPayload, { rejectWithValue }) => {
    try {
      return await userApi.register(payload)
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const login = createAsyncThunk(
  'auth/login',
  async (payload: LoginPayload, { rejectWithValue }) => {
    try {
      return await userApi.login(payload)
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

const initialState: AuthState = {
  user: null,
  isLoading: false,
  email: '',
  isLogging: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.isLoading = true
      state.isLogging = false
    })
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.user = payload.data
      state.isLogging = true

      authStorage.saveToken(payload.data.accessToken, payload.data.refreshToken)
    })
    builder.addCase(login.rejected, (state) => {
      state.isLoading = false
      state.isLogging = true
    })
  },
})

// export const {} = authSlice.actions

export const authAsyncAction = {
  login,
  register,
}

const persistConfig = {
  keyPrefix: 'taphoammo',
  key: 'Auth',
  storage,
}

const authReducer = persistReducer(persistConfig, authSlice.reducer)

export default authReducer
