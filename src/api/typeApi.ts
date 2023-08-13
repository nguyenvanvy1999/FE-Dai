import { IBusinessResponseType, IShopType } from '../models/Type';
import axiosClient from './axiosClient'

export const businessType = () : Promise<IBusinessResponseType[]>=> {
  return axiosClient.get(`/businesstype/getAll`);
}
export const shopTypeGetById = (id: string): Promise<IShopType[]> => {
  return axiosClient.get('/shopType/getById/' + id);
}

const typeApi = {
  businessType,
  shopTypeGetById
}

export default typeApi
