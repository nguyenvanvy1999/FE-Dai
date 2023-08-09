import { MainLayout } from '../../components/Layout'
function CheckLiveFB() {
  return (
    <MainLayout>
      <>
        <h5 className="text-lg font-bold mb-2">Check UID facebook - Kiểm tra tài khoản facebook</h5>
        <div className="px-4">
          <div className="border border-green-600 rounded-sm p-4">
            <div className="flex flex-col mb-5">
              <label htmlFor="list_uid" className="col-sm-12 control-label">
                <b>Nhập List UID (Tối đa 1000/ lần)</b>
              </label>
              <textarea
                name=""
                id="list_uid"
                className="border border-gray-300 rounded-sm"
                rows={3}
                required
              ></textarea>
            </div>
            <div className="flex flex-col mb-5">
              <label htmlFor="list_uid" className="col-sm-12 control-label">
                <b>Ký Tự Ngăn Cách</b>
              </label>
              <input
                type="text"
                name=""
                id="ngancach"
                className="border border-gray-300 p-2 rounded-sm"
                value="|"
                required
                pattern=""
                title=""
              ></input>
            </div>
            <div className="flex flex-col mb-5">
              <label htmlFor="list_uid" className="col-sm-12 control-label">
                <b>Cột</b>
              </label>
              <input
                type="text"
                name=""
                id="ngancach"
                className="border border-gray-300 p-2 rounded-sm"
                value="0"
                required
                pattern=""
                title=""
              ></input>
            </div>
            <div className="form-group mb-3">
              <span className="badge badge-primary bg-blue-600 text-xs mr-2 px-1 text-white rounded-sm">
                Tổng:
                <b className="text-xs" id="total">
                  0
                </b>
              </span>
              <span className="badge badge-success bg-green-600 text-xs mr-2 px-1 text-white rounded-sm">
                Live:
                <b className="text-xs" id="live">
                  0
                </b>
              </span>
              <span className="badge badge-danger bg-red-600 text-xs mr-2 px-1 text-white rounded-sm">
                Dead:
                <b className="text-xs" id="dead">
                  0
                </b>
              </span>
            </div>
            <div className="flex flex-col mb-5">
              <label htmlFor="list_uid" className="col-sm-12 control-label">
                <b>UID Live</b>
              </label>
              <textarea
                name=""
                id="list_uid"
                className="border border-gray-300 rounded-sm"
                rows={3}
                required
              ></textarea>
            </div>
            <div className="flex flex-col mb-5">
              <label htmlFor="list_uid" className="col-sm-12 control-label">
                <b>UID Dead</b>
              </label>
              <textarea
                name=""
                id="list_uid"
                className="border border-gray-300 rounded-sm"
                rows={3}
                required
              ></textarea>
            </div>
            <button className="px-4 py-2 mr-4 bg-green-600 text-white rounded min-w-[110px]">
              Check
            </button>
          </div>
        </div>

        <div className="p-4 border border-gray-200 mt-8 mb-8 rounded-sm">
          <ul className="pl-4">
            <li className="list-disc text-green-600">
              Mã nguồn thuộc về bạn : <b>taikhoanfb</b>
            </li>
            <li className="list-disc text-green-600">
              Chỉ check được tài khoản sống hay đã chết, các trường hợp checkpoint khi đăng nhập sẽ
              không kiểm tra được.
            </li>
            <li className="list-disc text-green-600">
              Không ảnh hưởng tới tài khoản, full code chạy bằng javascript nên sẽ không lưu lại
              trên server.
            </li>
          </ul>
        </div>
      </>
    </MainLayout>
  )
}

export default CheckLiveFB
