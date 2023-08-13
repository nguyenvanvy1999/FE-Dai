import { ProductQuery } from '../hooks/useProduct'
import { IProductDetailModel } from './../models/Product'
import axiosClient from './axiosClient'

export const productList = (params: ProductQuery): Promise<any> => {
  console.log({ params })
  return axiosClient.get(`/product/getAll`, { params })
}

export const productDetail = (productId: string): Promise<IProductDetailModel> => {
  return axiosClient.get('/product/getById/' + productId)
}

const productApi = {
  productDetail,
  productList,
}

export default productApi
