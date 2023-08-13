export interface IProductDetailModel {
  name?: string;
  quantity?: number;
  price?: number;
  status?: number;
}

export interface IProductListModel {
  "soldQuantity": number;
  "_id": string;
  "createdBy"?: any;
  "name": string;
  "shopId": string;
  "quantity": number;
  "price": number;
  "status": number;
  "createdAt": string;
  "updatedAt": string;
}

export interface IResponsePaging {
  data: IProductListModel[];
  pageIndex: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
}