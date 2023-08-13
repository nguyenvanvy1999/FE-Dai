import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../index'

const selectDiscount = (state: RootState) => state.discount

const selectDiscountProduct = createSelector(selectDiscount, (discount) => discount.product)

const selectIsLoading = createSelector(selectDiscount, (discount) => discount.isLoading)

const discountSelector = {
  selectDiscountProduct,
  selectIsLoading,
}

export default discountSelector
