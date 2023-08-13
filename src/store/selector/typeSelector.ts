import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../index'

const selectType = (state: RootState) => state.type

const selectProductType = createSelector(selectType, (type) => type.productTypes)

const selectIsLoadingProductType = createSelector(selectType, (type) => type.isLoadingProductType)

const typeSelector = {
  selectProductType,
  selectIsLoadingProductType,
}

export default typeSelector
