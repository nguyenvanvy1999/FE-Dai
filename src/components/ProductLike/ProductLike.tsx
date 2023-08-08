import { Link } from 'react-router-dom'
import Badge from '../Badge'
import { BsHeartbreakFill } from 'react-icons/bs'
import { Button, Tooltip } from 'antd'

export interface ProductCardProps {
  className?: string
}

export default function ProductCard({ className }: ProductCardProps) {
  return (
    <div className={`block md:flex justify-between border ${className}`}>
      <div className="flex gap-3 p-4  flex-col xl:flex-row">
        <div className="relative">
          <Link to="" className="block w-200px text-center sm:mx-auto max-sm: mx-auto xl:ml-auto">
            <img
              src="https://taphoammo.net/img/gmail-ngoai-new-ios-random-ip-ngam-tren-14_728121551.png"
              alt=""
            />
          </Link>

          <Badge className="absolute -top-14px -left-15px">Không trùng</Badge>
          <Badge className="absolute top-4 -left-15px">
            <svg
              className="w-14px h-14px text-yellow-600"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          </Badge>
        </div>
        <div className="flex flex-col gap-2">
          <Link to="" className="flex gap-2 text-16px font-medium hover:text-green-300">
            Gmail NEW iOS Us và Ngoại. Chỉ bán min 30 cái{' '}
          </Link>
          <div className="flex xl:flex-row flex-col">
            <div className="flex items-center ">
              <svg
                className="w-14px h-14px text-yellow-600"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                className="w-14px h-14px text-yellow-600"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                className="w-14px h-14px text-yellow-600"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                className="w-14px h-14px text-yellow-600"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                className="w-14px h-14px text-yellow-600"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            </div>
          </div>
          <div className="text-14px leading-4">
            Người bán:
            <Link to="" className="text-green-300">
              dviet92
            </Link>
          </div>
          <ul>
            <li>Gmail ngoại iOS, random IP, đã ngâm đủ 14 ngày</li>
            <li>
              Kinh doanh: Gmail random IP 7 ngày++ email|pass|recovery|geo | Gmail CA IP, 7 ngày++
              email|pass|recovery|geo | Gmail random IP 2 tháng++ email|pass|recovery|geo | Gmail US
              IP, 1 tháng email|pass|recovery | Gmail US IP, 7 ngày email|pass|recover
            </li>
          </ul>
        </div>
      </div>
      <div className="md:border-l py-4 px-5 md:border-grey-500 w-190px flex-shrink-0">
        <div className="flex">
          <div className="text-14px text-grey-900 pt-15px text-center flex whitespace-nowrap gap-1">
            Tồn kho: <span className="text-green-500">14612</span>
          </div>
          <Tooltip placement="topLeft" title={'Xóa yêu thích'}>
            <Button type="text">
              <BsHeartbreakFill size={25} />
            </Button>
          </Tooltip>
        </div>
        <div className="text-18px text-black-light font-bold">
          {Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(2500)}
        </div>
        <Button className="bg-green-300 text-white w-full mt-6">Mua</Button>
      </div>
    </div>
  )
}
