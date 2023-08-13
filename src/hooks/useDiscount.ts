import { useSelector } from 'react-redux'
import discountSelector from '../store/selector/discountSelector'
import {  NotificationType } from '../models'
import { discountAsyncAction } from '../store/slice/discountSlice'
import { useAppDispatch } from '../store'
import useAntdNotification from './useAntdNotification'

const useDiscount = () => {

  const dispatch = useAppDispatch()

  const product = useSelector(discountSelector.selectDiscountProduct)

  const isLoading = useSelector(discountSelector.selectIsLoading)


  const { showNotification } = useAntdNotification()

  const getAll = async ( ) => {
    try {
      await dispatch(discountAsyncAction.getAll())
    } catch (error: any) {
      showNotification(NotificationType.Error, error.response?.data?.message || 'Đã xảy ra lỗi.')
    }
  }


  return {
    product,
    isLoading,
    getAll,
  }
}

export default useDiscount
