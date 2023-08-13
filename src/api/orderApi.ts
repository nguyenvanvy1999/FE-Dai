import { OrderQuery } from '../hooks/useOrder'
import { OrderResponseData } from '../models/Order'
import axiosClient from './axiosClient'

const getOrderList = (params: OrderQuery): Promise<OrderResponseData> => {
  return axiosClient.get('/order/getPaging', { params })
}

const orderApi = {
  getOrderList,
}

export default orderApi
