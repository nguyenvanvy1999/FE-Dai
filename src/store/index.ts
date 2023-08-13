import { useDispatch } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slice/counterSlice'
import authReducer from './slice/authSlice' 
import discountReducer from './slice/discountSlice'
import { persistStore } from 'redux-persist'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer, 
    discount: discountReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export const persitor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
