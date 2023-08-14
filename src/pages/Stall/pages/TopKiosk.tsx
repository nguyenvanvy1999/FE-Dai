import { StallLayout } from '../../../Layout'

function TopKiosk() {
  return (
    <StallLayout>
      <div className="m-4 max-w-full bg-slate-50 pl-2">
        <div className="inline-block items-center">
          <p className="text-md	font-bold	mb-2 mt-3 w-full">Chọn gian hàng top 1</p>
        </div>
        <p className="text-green-300 mt-3">
          Nếu bạn chiến thắng trong cuộc đấu giá gian hàng xếp đầu danh mục, bạn có thể lựa chọn
          gian hàng đứng đầu <br />
          Buổi đấu giá sẽ diễn ra 20h Chủ Nhật hàng tuần{' '}
          <a href="" className="text-blue-600">
            tại đây
          </a>
          <br />
          Gian hàng của bạn sẽ luôn đứng vị trí đầu tiên dù còn hàng hay không
          <br />
        </p>
        <hr className="w-full" />
        <p>Bạn không chiến thắng trong cuộc đấu giá nào!</p>
      </div>
    </StallLayout>
  )
}

export default TopKiosk
