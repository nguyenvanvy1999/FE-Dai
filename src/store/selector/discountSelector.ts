import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../index'

const selectDiscountState = (state: RootState) => state.discount

const selectDiscounts = createSelector(selectDiscountState, (discount) => discount.discounts)

const selectIsLoading = createSelector(
  selectDiscountState,
  (discount) => discount.isLoadingDiscount
)

const discountSelector = {
  selectDiscounts,
  selectIsLoading,
}

export default discountSelector
