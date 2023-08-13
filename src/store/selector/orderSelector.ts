import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../index'

const selectOrder = (state: RootState) => state.order

const selectOrderUser = createSelector(selectOrder, (order) => order.orders)

const selectIsLoadingOrder = createSelector(selectOrder, (auth) => auth.isLoadingOrder)

const orderSelector = {
  selectOrderUser,
  selectIsLoadingOrder,
}

export default orderSelector
