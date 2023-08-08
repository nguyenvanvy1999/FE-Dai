import { MainLayout } from "../../components/Layout"
import SearchBox from "../../components/Input/SearchBox"
import { useState } from "react";
import SelectV1 from "../../components/Input/Select";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

const options = [
  {
    label: 'Mã đơn hàng',
    value: '',
  },
  {
    label: 'Người bán',
    value: 'wait'
  }
]

const table = [
  {
    label: "Thao tác",
  },
  {
    label: "Mã đơn hàng",
  },
  {
    label: "Ngày mua	",
  },
  {
    label: "Gian hàng	",
  },
  {
    label: "Mặt hàng",
  },
  {
    label: "Người bán",
  },
  {
    label: "Số lượng",
  },
  {
    label: "Đơn giá",
  },
  {
    label: "Giảm"
  },
  {
    label: "Tổng tiền",
  },
  {
    label: "Hoàn tien"
  },
  {
    label: "Trạng thái"
  }
]

function OderItem() {
  const [searchText, setSearchText] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const navigate = useNavigate();

  return (
    <MainLayout>
      <div className="flex flex-col lg:flex-row w-full items-center justify-between container mx-auto sm:p-5 border border-gray-300 rounded-lg">
        <div className="text-lg font-semibold">Đơn hàng đã mua</div>
        <div className="flex flex-col lg:flex-row lg:items-center lg:flex my-2 flex-grow flex-end">
          <div className="w-full lg:w-96 ml-0 lg:ml-16">
            <SearchBox placeHolder={"Nhập mã đơn hàng"} value={searchText} onChange={(e: any) => { setSearchText(e.target.value) }} />
          </div>
          <SelectV1 value={selectValue} onChange={(e: any) => { setSelectValue(e.target.value); }} options={options} className="ml-0 lg:ml-8 w-full lg:w-32 mt-2 lg:mt-0" />
          <Button variant="primary" className="w-48 g:w-32 mt-2 lg:mt-0 lg:ml-8 border border-solid border-green-500 text-center" onClick={() => navigate('/add-post')}>
            <span className="text-white">Tìm đơn hàng</span>
          </Button>
        </div>
      </div>

      <div className="border border-gray-300 rounded-lg mt-5 p-2">
        <span className="text-red-500">Xin lưu ý:</span>
        <ul className="text-green-500 list-disc ml-10 text-sm">
          <li className="text-red-500">
            Bấm vào MÃ ĐƠN HÀNG để xem chi tiết sản phẩm đã mua!
          </li>
          <li>
            Tạp Hóa MMO là sàn thương mại điện tử, vì vậy tính năng và chất lượng sản phẩm không thể nào rõ bằng người bán hàng, nếu có bất cứ thắc mắc gì về mặt hàng, xin liên hệ chủ shop để được giải quyết hoặc bảo hành.
          </li>
          <li>
            Trong trường hợp chủ shop không giải quyết hoặc giải quyết không thỏa đáng, hãy bấm vào "Khiếu nại đơn hàng" , để bên mình có thể giữ tiền đơn hàng đó (lâu hơn 3 ngày) trong lúc bạn đợi phản hồi từ người bán. Bạn hoàn toàn có thể Hủy khiếu nại sau đó.
          </li>
          <li>
            Bên mình chỉ giữ tiền 3 ngày, trong trường hợp đơn hàng không có khiếu nại gì, tiền sẽ được chuyển cho người bán, vì vậy xin hãy KIỂM TRA KỸ SẢN PHẨM sau khi mua.
          </li>
        </ul>


        <div className="relative overflow-x-auto p-5">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                {table.map(ele => <th scope="col" className="px-6 py-3">
                  {ele.label}
                </th>
                )}
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  Apple
                </th>
                <td className="px-6 py-4">
                  Silver
                </td>
                <td className="px-6 py-4">
                  Laptop
                </td>
                <td className="px-6 py-4">
                  $2999
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </MainLayout>

  )
}

export default OderItem;