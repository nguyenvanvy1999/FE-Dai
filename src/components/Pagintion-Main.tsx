import { Pagination as PaginationAntd, PaginationProps } from 'antd'
interface IPagination {
  pageIndex?: number
  pageSize?: number
  totalPages?: number
  totalCount?: number
  setPage: (page: number) => void
}
function Pagination({ pageIndex, pageSize, totalCount, setPage }: IPagination) {
  const onChange: PaginationProps['onChange'] = (page: number) => {
    console.log(page)
    setPage(page)
  }

  return (
    <div className="flex items-center justify-between bg-white px-4 py-3 sm:px-6">
      <div className="sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <PaginationAntd
            current={pageIndex}
            pageSize={pageSize || 1}
            total={totalCount}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  )
}

export default Pagination
