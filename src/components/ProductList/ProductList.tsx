import ProductCard from '../ProductCard'
import Pagination from '../Pagintion'

export default function ProductList() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <ProductCard className="xl:col-span-2" />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <div className="flex items-center justify-center">
        <Pagination />
      </div>
    </>
  )
}
