import { DiscountResponse } from './../models/Discount'
import axiosClient from './axiosClient'

export const getAll = (): Promise<DiscountResponse> => {
  return axiosClient.get('/discount/getAll')
}

const discountApi = {
    getAll
}

export default discountApi
