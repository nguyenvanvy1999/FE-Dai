import { Line } from 'react-chartjs-2'
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

function LineChart({ chartData, options }: any) {
  return <Line style={{ width: '100%' }} className="w-full" data={chartData} options={options} />
}

export default LineChart
