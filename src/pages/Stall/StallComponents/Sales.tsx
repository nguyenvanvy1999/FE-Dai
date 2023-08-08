import { FaRegClock } from 'react-icons/fa'
import { FiShoppingBag } from 'react-icons/fi'
import { Line } from 'react-chartjs-2'
import { UserData } from '../Chart/UserData'
import {
  Chart as ChartJs,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js'
ChartJs.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend)
function Sales() {
  const data = {
    labels: UserData.map((item) => item.year),
    datasets: [
      {
        label: 'Sales',
        data: UserData.map((item) => item.userGain),
        borderColor: 'black',
        tension: 0.1,
      },
    ],
  }

  const options = {}
  return (
    <div className="m-4">
      <div className="flex mb-3">
        <div className="bg-[#ffff] w-1/4 h-28 rounded-md p-3">
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
        <div className="bg-[#ffff] ml-4 w-1/4 h-28 rounded-md p-3">
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

      <div className="flex bg-[#ffff] h-2/3 mb-4">
        <div className="w-full">
          <Line style={{ width: '100% !important' }} data={data} options={options} />
        </div>
      </div>

      <div className="min-h-fit">
        <div style={{ fontSize: '21px' }} className="text-xl text-center font-bold p-2 rounded ">
          Kinh doanh tháng 8/2023
        </div>
        <div className="text-center">
          <button className="bg-white text-black-light text-center">8/2023</button>
        </div>

        <div className="flex mb-3 justify-center mt-4">
          <div className="bg-[#ffff] w-1/4 h-28 rounded-md p-3">
            <span style={{ fontSize: '18px' }} className="text-gray-500">
              Số đơn hàng
            </span>
            <div className="flex mt-2 items-center">
              <FaRegClock size={28} />
              <span style={{ fontSize: '30px' }} className="ml-3 font-bold">
                0
              </span>
            </div>
          </div>
          <div className="bg-[#ffff] ml-4 w-1/4 h-28 rounded-md p-3">
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

          <div className="bg-[#ffff] ml-4 w-1/4 h-28 rounded-md p-3">
            <p style={{ fontSize: '18px' }} className="text-gray-500">
              Sàn tạm giữ
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
      </div>
    </div>
  )
}

export default Sales
