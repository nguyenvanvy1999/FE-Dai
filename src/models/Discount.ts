export interface DiscountState {
  discounts: DiscountResponseData[]
  isLoadingDiscount: boolean
}

export interface Product {
  createdAt: Date
  createdBy: string
  deleted: boolean
  description: string
  name: string
  updatedAt: Date
  value: number
  _id: string
}

export interface DiscountResponseData {
  createdAt: Date
  createdBy: string
  deleted: boolean
  description: string
  name: string
  updatedAt: Date
  value: number
  _id: string
}

export interface DiscountResponse {
  status: number
  message: string
  data: DiscountResponseData
}

export interface DiscountPayLoad {
  createdAt: Date
  createdBy: string
  deleted: boolean
  description: string
  name: string
  updatedAt: Date
  value: number
  _id: string
}
