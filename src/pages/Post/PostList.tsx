import { AiOutlineEye, AiOutlineLike } from 'react-icons/ai'
import { MainLayout } from '../../components/Layout'
import Button from '../../components/Button'
import Image from '../../components/Image'
import { FaRegComments } from 'react-icons/fa'
import SearchBox from '../../components/Input/SearchBox'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function PostList() {
  const [searchText, setSearchText] = useState('')
  const navigate = useNavigate()
  return (
    <MainLayout>
      <div className="container mx-auto sm:px-5 md:px-5 mb-5">
        <div className="font-bold">Kinh nghiệm MMO</div>
        <p className="mt-5">
          Nơi chia sẻ kiến thức, kinh nghiệm và trải nghiệm về kiếm tiền online.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 mt-5 gap-5">
          <div className="col-span-1 p-3 pl-0">
            <SearchBox
              placeHolder={'Tìm bài viết'}
              value={searchText}
              onChange={(e: any) => {
                setSearchText(e.target.value)
              }}
            />
            <Button
              variant="primary"
              className="w-full mt-5 text-left"
              onClick={() => navigate('/my-post')}
            >
              <span className="text-white">Quản lý bài viết</span>
            </Button>
            <div className="border border-gray-400 rounded-lg mt-5 p-5">
              <span className="font-bold">Thể loại</span>
              <div className="mt-5">
                <ul>
                  <li>AAAAA....</li>
                  <li>BBBBB....</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 col-span-1 md:col-span-2 gap-5">
            <div>
              <Image custom={{ height: '220px' }} />
              <div className="mt-2">
                <span className="text-green-500">huy-sieu-cap-vip-pro</span>
                <span className="text-gray-500 ml-2">31-07-2023 14:03</span>
              </div>
              <div className="text-gray-900 mt-3 font-semibold">
                Quy trình nuôi 1 ac cho người mới
              </div>
              <p className="mt-2">
                Quy trình nuôi 1 ac cho người mới B1. Mua ac tittok 1000fl để mở tiktok shop Trên
                tamhoamomo B2. Đăng ký 4g tắt bật 4g rồi mới đăng nhập tk vào app multiple -Điền đầy
                đủ thông tin tài khoản tên tk ,id...
              </p>
              <div className="flex mt-2">
                <div className="flex items-center">
                  <AiOutlineEye />
                  <span className="ml-1">932</span>
                </div>
                <div className="flex items-center ml-3">
                  <AiOutlineLike />
                  <span className="ml-1">1</span>
                </div>
                <div className="flex items-center ml-3">
                  <FaRegComments />
                  <span className="ml-1">0</span>
                </div>
              </div>
            </div>
            <div>
              <Image custom={{ height: '220px' }} />
              <div className="mt-2">
                <span className="text-green-500">huy-sieu-cap-vip-pro</span>
                <span className="text-gray-500 ml-2">31-07-2023 14:03</span>
              </div>
              <div className="text-gray-900 mt-3 font-semibold">
                Quy trình nuôi 1 ac cho người mới
              </div>
              <p className="mt-2">
                Quy trình nuôi 1 ac cho người mới B1. Mua ac tittok 1000fl để mở tiktok shop Trên
                tamhoamomo B2. Đăng ký 4g tắt bật 4g rồi mới đăng nhập tk vào app multiple -Điền đầy
                đủ thông tin tài khoản tên tk ,id...
              </p>
              <div className="flex mt-2">
                <div className="flex items-center">
                  <AiOutlineEye />
                  <span className="ml-1">932</span>
                </div>
                <div className="flex items-center ml-3">
                  <AiOutlineLike />
                  <span className="ml-1">1</span>
                </div>
                <div className="flex items-center ml-3">
                  <FaRegComments />
                  <span className="ml-1">0</span>
                </div>
              </div>
            </div>
            {/* <Pagination /> */}
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default PostList
