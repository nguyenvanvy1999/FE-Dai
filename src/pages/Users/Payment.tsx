import { useState } from "react";
import Button from "../../components/Button";
import { MainLayout } from "../../components/Layout";

const table = [
  {
    label: "Ngày",
  },
  {
    label: "Loại",
  },
  {
    label: "Số tiền	",
  },
  {
    label: "Lý do",
  },
]

const tablePaymentHistory = [
  {
    label: "Ngày yêu cầu	"
  },
  {
    label: "Yêu cầu	"
  },
  {
    label: "Số tiền	"
  },
  {
    label: "Trạng thái	"
  },
  {
    label: "Mô tả"
  }
]

const tabs = {
  payment: "payment",
  exchange: "exchange"
}

function Payment() {
  const [activeTab, setActiveTab] = useState<string>(tabs.payment)

  return (
    <MainLayout>
      <div className="">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
          <li className="" role="presentation">
            <button onClick={() => setActiveTab(tabs.payment)}
              className={`${activeTab === tabs.payment ? "border-t border-x" : "border-b"} inline-block p-4 rounded-t-lg hover:text-gray-600 hover:border-gray-300`}
              id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Lịch sử giao dịch</button>
          </li>
          <li className="" role="presentation">
            <button onClick={() => setActiveTab(tabs.exchange)}
              className={`${activeTab === tabs.exchange ? "border-t border-x" : "border-b"} inline-block p-4 rounded-t-lg hover:text-gray-600 hover:border-gray-300`}
              id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Rút tiền</button>
          </li>
        </ul>
      </div>
  
    {activeTab === tabs.payment &&
      <div id="myTabContent" className=" mt-2">
        <div>
          <div className="flex px-10 py-5 items-center justify-between rounded-lg">
            <p className="text-md font-semibold">Lịch sử giao dịch</p>
            <div>
              <Button variant="primary">Tổng tiền tạm giữ: 0</Button>
            </div>
          </div>
          <div className="flex px-2 lg:px-10 py-5 items-center justify-between border border-gray-400 rounded-lg mt-2">
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
        </div>
      </div>
    }

    {activeTab === tabs.exchange &&
      <div id="myTabContent" className=" mt-2">
        <div>
          <div className="flex px-10 py-5 items-center justify-between rounded-lg">
            <p className="text-md font-semibold">Lịch sử rút tiền</p>
            <div>
              <Button variant="primary">Tạo yêu cầu rút tiền</Button>
            </div>
          </div>
          <div className="flex px-2 lg:px-10 py-5 items-center justify-between border border-gray-400 rounded-lg mt-2">
          <div className="relative overflow-x-auto p-5">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                {tablePaymentHistory.map(ele => <th scope="col" className="px-6 py-3">
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
        </div>
      </div>
    }
    </MainLayout>
  )
}

export default Payment;