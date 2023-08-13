export interface ProductTypeResponse {
  _id: string
  name: string
  business_typeId: string
  shop_typeId: string
  discount_percent: number
  status: number
  deleted: boolean
  createdAt: string
  updatedAt: string
  slug: string
}

export interface TypeState {
  productTypes: ProductTypeResponse[]
  isLoadingProductType: boolean
}
