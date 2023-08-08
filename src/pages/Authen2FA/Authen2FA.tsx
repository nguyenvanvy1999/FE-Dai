import { MainLayout } from '../../components/Layout'
function Authen2FA() {
  return (
    <MainLayout>
      <>
        <h5 className="text-md font-bold">Authenticator - Lấy mã code từ chuỗi 2FA</h5>
        <div className="mb-10">
          <div className="flex flex-col">
            <label className='text-gray-700 my-3'>Chuỗi mã 2FA</label>
            <input className="border border-gray-300 px-4 py-2 rounded-sm" id="secret_key" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <p className="text-danger" id="error"></p>
            <button className="px-4 py-2 mr-4 bg-green-600 text-white rounded min-w-[110px] font-bold">
              Submit
            </button>
            <button className="px-4 py-2 mr-4 bg-gray-300 text-black-100 rounded min-w-[110px] font-bold">
              Lưu
            </button>
          </div>
        </div>
        <div className="p-4 border border-gray-200 mt-8  rounded-sm">
          <div className="product-card product-card--hidden-actions">
            <div>
              <h6 className="font-semibold">Danh sách chuỗi mã đã lưu</h6>
              <p id="save_error" className="pl-4 pb-4 text-sm text-red-500">
                *Lưu ý: Tính năng này sẽ lưu trên trình duyệt của bạn, nếu bạn đổi trình duyệt hoặc
                xóa cookie sẽ bị mất.
              </p>
              <div className="table" id="table-orders">
                <table className="w-full">
                  <thead className="bg-gray-200">
                    <tr className="">
                      <th className="text-left p-3">Thao tác</th>
                      <th className="text-left p-3">Tên</th>
                      <th className="text-left p-3">Chuỗi mã</th>
                    </tr>
                  </thead>
                  <tbody id="body_table_2fa"></tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 border border-gray-200 mt-8 mb-8 rounded-sm">
          <ul className='pl-4'>
            <li className='list-disc text-green-600'>
              Authenticator là một ứng dụng tạo ra mã 2FA (mã code gồm 6 số ngẫu nhiên thay đổi ngẫu
              nhiên mỗi 30 giây) và được thiết kế để chỉ có bạn mới đăng nhập vào tài khoản của bạn
              được, kể cả nếu như có người khác biết mật khẩu của bạn.
            </li>
            <li className='list-disc text-green-600'>
              Khi bạn đăng nhập vào tài khoản, có yêu cầu xác thực 2 yếu tố bằng chuỗi 2FA, bạn buộc
              phải sử dụng Authenticator để nhận mã đăng nhập
            </li>
            <li className='list-disc text-green-600' >
              Các gian hàng trên Tạp hóa MMO bán các sản phẩm thường kèm theo 2FA, hãy dùng ứng dụng
              này để lấy mã đăng nhập nhé.
            </li>
          </ul>
        </div>
      </>
    </MainLayout>
  )
}

export default Authen2FA
