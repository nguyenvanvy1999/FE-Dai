import { Pagination as AntPagination } from 'antd'

interface IPagination {
  total: number
  onChange: ({ page, limit }: { page: number; limit: number }) => void
  currentPage: number
  defaultPageSize?: number
  autoScrollToTop?: boolean
}

export const Pagination = ({
  total,
  onChange,
  currentPage,
  defaultPageSize = 50,
  autoScrollToTop = true,
}: IPagination) => {
  return (
    <AntPagination
      current={currentPage}
      style={{ marginTop: 12 }}
      total={total}
      onChange={(page, limit) => {
        onChange({
          page,
          limit,
        })
        if (autoScrollToTop) {
          document.body.scrollTop = 0 // For Safari
          document.documentElement.scrollTop = 0
        }
      }}
      defaultPageSize={defaultPageSize}
      showTotal={(total) => `Tổng ${total} dòng`}
    />
  )
}
