import { useRef } from 'react'
import { QueryParam } from '../models'
import { useAppDispatch } from '../store'
import { useSelector } from 'react-redux'
import orderSelector from '../store/selector/orderSelector'
import { orderAsyncAction } from '../store/slice/orderSlice'

export interface OrderQuery extends QueryParam {}

interface UseOrderProps {
  initQuery: OrderQuery
}

const useOrder = ({ initQuery }: UseOrderProps) => {
  const dispatch = useAppDispatch()
  const query = useRef<OrderQuery>(initQuery)

  const orders = useSelector(orderSelector.selectOrderUser)

  const isLoadingOrder = useSelector(orderSelector.selectIsLoadingOrder)

  const fetchDataOrder = async () => {
    try {
      await dispatch(orderAsyncAction.getAllOrder(query.current))
    } catch (error) {
      console.log(error)
    }
  }

  return { orders, isLoadingOrder, fetchDataOrder }
}

export default useOrder
