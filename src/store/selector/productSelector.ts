import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../index'

const selectProduct = (state: RootState) => state.product

const selectProductList = createSelector(selectProduct, (product) => product.products)

const selectIsLoadingProduct = createSelector(selectProduct, (product) => product.isLoadingProduct)

const productSelector = {
  selectProductList,
  selectIsLoadingProduct,
}

export default productSelector
