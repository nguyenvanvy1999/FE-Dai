import { IProductDetailModel, IResponsePaging } from './../models/Product'
import axiosClient from './axiosClient'

export const productList = ({page = 1, pageSize = 1 }: { page: number, pageSize?: number }) : Promise<IResponsePaging>=> {
  const params = new URLSearchParams({ pageIndex: `${page}`, pageSize: `${pageSize}` })
  return axiosClient.get(`/product/getPaging?${params}`);
}
export const productDetail = (productId: string): Promise<IProductDetailModel> => {
  return axiosClient.get('/product/getById/' + productId)
}

const productApi = {
  productDetail,
  productList
}

export default productApi
