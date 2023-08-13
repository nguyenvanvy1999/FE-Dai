export interface QueryParam {
  page: number
  limit: number
  search?: string
  [key: string]: any
}

export interface QueryParams2 {
  [key: string]: any
}
