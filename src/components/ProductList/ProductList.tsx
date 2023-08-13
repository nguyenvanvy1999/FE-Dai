import ProductCard from '../ProductCard'
// // import Pagination from '../Pagintion'
import { IProductListModel } from '../../models/Product'

import useProduct from '../../hooks/useProduct'
import { useEffect } from 'react'

// interface ProductList {
//   list?: IResponsePaging
//   setPage: (page: number) => void
//   page: number
// }

export default function ProductList() {
  const { products, fetchProductAll } = useProduct({ initQuery: { pageIndex: 1, pageSize: 10 } })

  useEffect(() => {
    fetchProductAll()
  }, [])

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {products.map((prod: IProductListModel, key: number) => {
          if (key === 0) {
            return <ProductCard item={prod} className="xl:col-span-2" />
          } else {
            return <ProductCard item={prod} />
          }
        })}
      </div>
      {/* <div className="flex items-center justify-center">
        <Pagination
          pageSize={list?.pageSize}
          pageIndex={page}
          totalCount={list?.totalCount}
          setPage={setPage}
        />
      </div> */}
    </>
  )
}
