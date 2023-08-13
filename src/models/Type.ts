export interface IBusinessType {
  "_id": string;
  "name": string;
  "status": number;
  "slug": string;
}

export interface IShopType {
  "business_typeId": string;
  "_id": string;
  "name": string;
  "status": number;
  "slug": string;
}

export interface IBusinessResponseType extends IBusinessType {
  shopTypes: IShopType[];
}
