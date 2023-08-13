export interface OrderResponseData {
  pageIndex: number
  pageSize: number
  totalPages: number
  totalCount: number
  data: Order[]
}

export interface Order {
  _id: string
  uid: string
  buyerId: string
  sellerId: string
  shopId: string
  productId: string
  name: string
  quantity: number
  price: number
  discount: number
  totalPayment: number
  statusBuyer: number
  statusSeller: number
  orderDuration: any
  deleted: boolean
  createdAt: string
  updatedAt: string
}

export interface OrderState {
  orders: Order[]
  isLoadingOrder: boolean
}
