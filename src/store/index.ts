import { useDispatch } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slice/counterSlice'
import authReducer from './slice/authSlice'
import discountReducer from './slice/discountSlice'
import { persistStore } from 'redux-persist'
import productReducer from './slice/productSlice'
import typeReducer from './slice/typeSlice'
import orderReducer from './slice/orderSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    discount: discountReducer,
    // auth: authReducer,
    product: productReducer,
    type: typeReducer,
    order: orderReducer,
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
