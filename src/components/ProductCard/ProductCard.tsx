export interface ProductCardProps {}
import { Link } from 'react-router-dom'
import Badge from '../Badge'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { useState } from 'react'
import Resell from '../../assets/images/resell.png'
import { IProductListModel } from '../../models/Product'

export interface ProductCardProps {
  className?: string;
  item: IProductListModel
}

export default function ProductCard({ className, item }: ProductCardProps) {
  const [activeHeart, setActiveHeart] = useState<boolean>(false)
  const handleActiveHeart = () => {
    setActiveHeart(!activeHeart)
  }

  return (
    <div className={`flex gap-3 p-4 justify-between border ${className}`}>
      <div className="flex gap-3 flex-col xl:flex-row">
        <div className="relative">
          <Link to="" className="block w-200px text-center sm:mx-auto max-sm: mx-auto xl:ml-auto">
            <img
              src="https://taphoammo.net/img/gmail-ngoai-new-ios-random-ip-ngam-tren-14_728121551.png"
              alt=""
            />
          </Link>
          <div className="text-14px text-grey-900 pt-15px text-center">
            Tồn kho: <span className="text-green-500">{"??"}</span>
          </div>
          <div className="mt-3 text-black-light text-center text-15px font-bold">
            {item.price}
          </div>
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
            <Badge variant="success" className='max-sm:text-10px max-sm:whitespace-nowrap max-sm:h-27px'>Sản phẩm</Badge>
            {item.name}{' '}
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
            <div className="text-grey-500 text-13px leading-1 flex">
              <span>55 review</span>
              <span>| Đã bán:</span>
              <span>1120302</span>
              <span>| Khiếu nại:</span>
              <span>0.0%</span>
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
          <Badge variant="new" className="w-20">
            GH mới
          </Badge>
          <div className="flex items-center">
            <svg
              className="w-14px h-14px text-yellow-600"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <Badge variant="warning" className="font-bold text-black-100 ml-1.5">
              Sản phẩm
            </Badge>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between items-center">
        <div onClick={handleActiveHeart} className="cursor-pointer">
          {activeHeart ? <AiFillHeart size={20} /> : <AiOutlineHeart size={20} />}
        </div>
        <button className="w-35px">
          <img src={Resell} alt="" />
        </button>
      </div>
    </div>
  )
}
