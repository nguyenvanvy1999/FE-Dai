import { ProductTypeResponse } from '../models'
import axiosClient from './axiosClient'

export const productType = (): Promise<ProductTypeResponse[]> => {
  return axiosClient.get('/producttype/getAll')
}

const typeApi = {
  productType,
}

export default typeApi
