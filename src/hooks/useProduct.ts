import { useRef } from 'react'
import { QueryParam } from '../models'
import { useAppDispatch } from '../store'
import { productAsyncAction } from '../store/slice/productSlice'
import { useSelector } from 'react-redux'
import productSelector from '../store/selector/productSelector'

export interface ProductQuery extends QueryParam {}

interface UseproductProps {
  initQuery: ProductQuery
}

const useProduct = ({ initQuery }: UseproductProps) => {
  const query = useRef<ProductQuery>(initQuery)
  const dispatch = useAppDispatch()
  const products = useSelector(productSelector.selectProductList)
  const isLoadingProducts = useSelector(productSelector.selectProductList)
  //const [total, setTotal] = useState(0)

  const fetchProductAll = async (initQuery: ProductQuery) => {
    try {
      await dispatch(productAsyncAction.getAll(initQuery))
    } catch (error: any) {
      console.log(error)
    }
  }

  return { fetchProductAll, query: query.current, products, isLoadingProducts }
}

export default useProduct
