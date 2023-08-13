import { useSelector } from 'react-redux'
import typeSelector from '../store/selector/typeSelector'
import { useAppDispatch } from '../store'
import { typeAsyncAction } from '../store/slice/typeSlice'

const useType = () => {
  const dispatch = useAppDispatch()
  const productType = useSelector(typeSelector.selectProductType)
  const isLoadingProductType = useSelector(typeSelector.selectIsLoadingProductType)

  const fetchProductType = async () => {
    try {
      await dispatch(typeAsyncAction.getProductType())
    } catch (error: any) {
      console.log(error)
    }
  }

  return { productType, isLoadingProductType, fetchProductType }
}

export default useType
