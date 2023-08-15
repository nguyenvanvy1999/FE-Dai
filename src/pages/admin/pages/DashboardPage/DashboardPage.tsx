import AdminLayout from '../../../../Layout/AdminLayout'
import { FaRegClock } from 'react-icons/fa'
import { FiShoppingBag } from 'react-icons/fi' 
import { RevenueData } from './RevenueData'  
import { Line } from 'react-chartjs-2' 

export interface DashboardPageProps {}

export default function DashboardPage() { 
  const data = {
    labels: RevenueData.map((item) => item.year),
    datasets: [
      {
        label: 'Sales',
        data: RevenueData.map((item) => item.userGain),
        borderColor: 'black',
        tension: 0.1,
      },
    ],
  }

  const options = {}
  return (
    <AdminLayout>
      <div className=''>
        <div className="flex mb-3 ">
          <div className="bg-[#ffff] w-1/4 h-28 rounded-md p-3 ">
            <p style={{ fontSize: '18px' }} className="text-gray-500">
              Số đơn hàng
            </p>
            <div className="flex mt-2 items-center">
              <FaRegClock size={28} />
              <span style={{ fontSize: '30px' }} className="ml-3 font-bold">
                0
              </span>
            </div>
          </div>
          <div className="bg-[#ffff] ml-4 w-1/4 h-28 rounded-md p-3 ">
            <p style={{ fontSize: '18px' }} className="text-gray-500">
              Doanh số
            </p>
            <div>
              <div className="flex mt-2 items-center">
                <FiShoppingBag size={28} />
                <span style={{ fontSize: '30px' }} className="ml-3 font-bold">
                  0
                </span>
              </div>
            </div>
          </div>
        </div> 
        <div className="flex bg-[#ffff] h-1/2 mb-4">
          <div className="w-full h-full">
            <Line style={{ width: '100% !important' }} data={data} options={options} />
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}
