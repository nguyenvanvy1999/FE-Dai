import { MainLayout } from '../../Layout'
function Reseller() {
  return (
    <MainLayout>
      <div className="form-row">
        <div className="form-group col-md-6">
          <button className="px-4 py-2 mr-4 bg-yellow-500 text-black-100 rounded min-w-[110px] font-bold">
            Danh sách
          </button>
          <button className="px-4 py-2 mr-4 bg-blue-400 text-white rounded min-w-[110px] font-bold">
            Lịch sử
          </button>
        </div>
        <div className="mt-10">
          <div className="row px-5 py-4 border border-gray-200">
            <h5 className="col-12">Gian hàng Reseller</h5>
          </div>
          <div className="border border-gray-200 p-5">
            <table className="">
              <thead className="thead-light">
                <tr>
                  <th scope="col" className="p-3 bg-gray-300 text-center">
                    Gian hàng
                  </th>
                  <th scope="col" className="p-3 bg-gray-300 text-center">
                    Link Reseller
                  </th>
                  <th scope="col" className="p-3 bg-gray-300 text-center">
                    Chiết khấu(%)
                  </th>
                  <th scope="col" className="p-3 bg-gray-300 text-center">
                    Ngày yêu cầu
                  </th>
                  <th scope="col" className="p-3 bg-gray-300 text-center">
                    Trạng thái
                  </th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
        </div>
        <div className="mt-4 mb-20">
          <p className="text-green-600 text-sm">
            Lưu ý: Khách chỉ cần vào 1 lần bằng link referer của bạn, chúng tôi sẽ lưu cookie và áp
            dụng chia chiết khấu cho tất cả các đơn hàng về sau ( trong trường hợp ref của bạn vẫn
            được chủ shop duyệt).
          </p>
        </div>
      </div>
    </MainLayout>
  )
}

export default Reseller
