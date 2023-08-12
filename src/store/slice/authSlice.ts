import { LogoutPayload, ROLE } from './../../models/Auth'
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

export const logout = createAsyncThunk(
  'auth/logout',
  async (payload: LogoutPayload, { rejectWithValue }) => {
    try {
      return await userApi.logout(payload)
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

const initialState: AuthState = {
  user: undefined,
  isLoading: false,
  email: '',
  isLoadingRegister: false,
  isLoadingLogout: false,
  isAuthenticated: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.user = {
        ...payload.data.user,
        role: payload.data.user.role === 1 ? ROLE.ADMIN : ROLE.USER,
      }
      state.isLoading = false
      state.isAuthenticated = true
      authStorage.saveToken(payload.data.accessToken, payload.data.refreshToken)
    })
    builder.addCase(login.rejected, (state) => {
      state.isLoading = false
    })

    builder.addCase(register.pending, (state) => {
      state.isLoadingRegister = true
    })
    builder.addCase(register.fulfilled, (state, { payload }) => {
      state.user = {
        ...payload.data.user,
        role: payload.data.user.role === 1 ? ROLE.ADMIN : ROLE.USER,
      }
      state.isAuthenticated = true
      state.isLoadingRegister = false

      authStorage.saveToken(payload.data.accessToken, payload.data.refreshToken)
    })
    builder.addCase(register.rejected, (state) => {
      state.isLoadingRegister = false
    })

    builder.addCase(logout.pending, (state) => {
      state.isLoadingLogout = true
    })
    builder.addCase(logout.fulfilled, (state) => {
      state.user = undefined
      state.isAuthenticated = false
      authStorage.destroyToken()
    })
    builder.addCase(logout.rejected, (state) => {
      state.isLoadingLogout = false
    })
  },
})

// export const {} = authSlice.actions

export const authAsyncAction = {
  login,
  register,
  logout,
}

const persistConfig = {
  //keyPrefix: 'taphoammo',
  key: 'Auth',
  storage,
}

const authReducer = persistReducer(persistConfig, authSlice.reducer)

export default authReducer
