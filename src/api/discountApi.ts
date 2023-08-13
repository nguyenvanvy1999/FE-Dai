import axiosClient from './axiosClient'

export const getAll = (): Promise<any> => {
  return axiosClient.get('/discount/getAll')
}

const discountApi = {
  getAll,
}

export default discountApi
