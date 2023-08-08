import { MainLayout } from '../../components/Layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import './product-detail.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useState } from 'react'
import Shortcuts from '../../components/Slider/Slider'

type Tab = 'mota' | 'reviews' | 'api'

function ProductDetail() {
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState<Tab>('mota')







  const handleTabClick = (tab: Tab) => {
    setActiveTab(tab)
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }
  return (
    <MainLayout>
      <div className="grid grid-cols-2 gap-10">
        <div className="col-span-1 relative">
          <img
            src="https://taphoammo.net/img/gmail-ngoai-new-ios-random-ip-ngam-tren-14_728121551.png"
            alt=""
          />
          <div className="absolute top-1 text-xs bg-green-400 w-26 h-5 px-2 py-1 leading-3 font-semibold text-white">
            Sản phẩm nổi bật
          </div>
          <button
            type="button"
            className="bg-gray-200 p-4 flex items-center justify-center absolute top-1 right-1 hover:bg-gray-700 transition-all duration-200 ease-in-out"
            data-toggle="tooltip"
            title=""
            data-original-title="Yêu thích"
          >
            <FontAwesomeIcon icon={faHeart} className="text-red-500" />
          </button>
        </div>
        <div className="col-span-1">
          <div className="flex items-center">
            <h3 className="text-lg font-bold text-green-600">
              <span className="bg-green-600 text-md py-1 px-2 font-semibold text-white">
                Sản phẩm
              </span>{' '}
              Gmail NEW iOS Us và Ngoại. Chỉ bán min 30 cái
            </h3>
          </div>
          <div className="rating">
            <div className="flex items-center">
              <div className="flex my-5">
                <svg
                  className="mr-2"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 32 32"
                  fill="rgb(255, 193, 7)"
                >
                  <title>star-empty</title>
                  <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798zM16 23.547l-6.983 3.671 1.334-7.776-5.65-5.507 7.808-1.134 3.492-7.075 3.492 7.075 7.807 1.134-5.65 5.507 1.334 7.776-6.983-3.671z"></path>
                </svg>
                <svg
                  className="mr-2"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 32 32"
                  fill="rgb(255, 193, 7)"
                >
                  <title>star-full</title>
                  <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"></path>
                </svg>
                <svg
                  className="mr-2"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 32 32"
                  fill="rgb(255, 193, 7)"
                >
                  <title>star-full</title>
                  <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"></path>
                </svg>
                <svg
                  className="mr-2"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 32 32"
                  fill="rgb(255, 193, 7)"
                >
                  <title>star-full</title>
                  <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"></path>
                </svg>
                <svg
                  className="mr-2"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 32 32"
                  fill="rgb(255, 193, 7)"
                >
                  <title>star-half</title>
                  <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798zM16 23.547l-0.029 0.015 0.029-17.837 3.492 7.075 7.807 1.134-5.65 5.507 1.334 7.776-6.983-3.671z"></path>
                </svg>
              </div>
              <div className="product-card__rating-legend">
                <span className="text-xs leading-4 text-gray-400 pt-1 whitespace-nowrap">
                  56 Reviews
                </span>
                <span className="text-xs leading-4 text-gray-400 pt-1 whitespace-nowrap">
                  | Đã bán:
                </span>
                <span className="text-xs leading-4 text-gray-400 pt-1 whitespace-nowrap">
                  1126795
                </span>
                <span className="text-xs leading-4 text-gray-400 pt-1 whitespace-nowrap">
                  | Khiếu nại:
                </span>
                <span className="text-xs leading-4 text-gray-400 pt-1 whitespace-nowrap">0.0%</span>
              </div>
            </div>
          </div>
          <div className="desc mb-4">
            <p className="text-md">Gmail ngoại iOS, random IP, đã ngâm đủ 14 ngày</p>
          </div>
          <div className="infor pt-3 border-t border-gray-200">
            <div className="col-lg-8">
              <ul className="product__meta">
                <li className="mb-3">
                  <label className="text-gray-400 mr-2"> Người bán:</label>
                  <a className="text-green-600" href="/thong-tin/dviet92">
                    dviet92
                  </a>
                  <span> | </span>
                  <span>
                    <span className="text-xs bg-green-600 p-1 text-white rounded-sm">Online</span>
                  </span>
                </li>
                <li className="mb-3">
                  <label className="text-gray-400 mr-2"> Sản phẩm:</label>
                  <a className="text-green-600" href="/thong-tin/dviet92">
                    dviet92
                  </a>
                </li>
                <li className="mb-3">
                  <label className="text-gray-400 mr-2"> Kho:</label>
                  <a className="text-green-600" href="/thong-tin/dviet92">
                    Gmail
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="price">
            <h3 className="text-lg font-bold mb-4">3.100 VND</h3>
          </div>
          <div className="type">
            <h4 className="pt-3 border-t border-gray-200 mb-2">SẢN PHẨM</h4>
            <ul>
              <li className="px-4 py-2 bg-green-600 text-white mb-2 rounded-sm cursor-pointer">
                Gmail random IP 7 ngày++ email|pass|recovery|geo
              </li>
              <li className="px-4 py-2 bg-gray-100 mb-2 rounded-sm hover:bg-gray-300 cursor-pointer">
                Gmail CA IP, 7 ngày++ email|pass|recovery|geo
              </li>
              <li className="px-4 py-2 bg-gray-100 mb-2 rounded-sm hover:bg-gray-300 cursor-pointer">
                Gmail random IP 2 tháng++ email|pass|recovery|geo
              </li>
              <li className="px-4 py-2 bg-gray-100 mb-2 rounded-sm hover:bg-gray-300 cursor-pointer">
                Gmail US IP, 1 tháng email|pass|recovery
              </li>
              <li className="px-4 py-2 bg-gray-100 mb-2 rounded-sm hover:bg-gray-300 cursor-pointer">
                Gmail US IP, 7 ngày email|pass|recover
              </li>
            </ul>
          </div>
          <div className="quantity flex items-center mb-2">
            <div className="quantity-label mr-2">
              <label>Số lượng</label>
            </div>
            <div className="quantity-btn">
              <button className="px-3 py-1 bg-gray-200 rounded-l" onClick={decreaseQuantity}>
                -
              </button>
              <input
                type="number"
                className="px-3 py-1 border-gray-200 text-center w-10"
                value={quantity}
                readOnly
              />
              <button className="px-3 py-1 bg-gray-200 rounded-r" onClick={increaseQuantity}>
                +
              </button>
            </div>
          </div>

          <div className="discount">
            <input
              className="border p-2 rounded-sm w-full mb-4"
              type="text"
              placeholder="Nhập mã giảm giá"
            />
          </div>
          <div className="buttons flex items-center">
            <button className="px-4 py-2 mr-4 bg-green-600 text-white rounded min-w-[110px]">
              Mua hàng
            </button>
            <button className="px-4 py-2 mr-4 bg-green-600 text-white rounded min-w-[110px]">
              Đặt trước
            </button>
            <button className="px-4 py-2 mr-4 bg-white text-green-600 border-green-600 border-2  rounded min-w-[110px]">
              Nhắn tin
            </button>
            <button
              type="button"
              className="p-2 bg-gray-200 rounded-sm hover:bg-gray-700 "
              title="Đăng ký reseller"
            >
              <img className="w-8" src="https://taphoammo.net/images/main/resell.png" />
            </button>
          </div>
        </div>
      </div>
      <div className="mt-16">
        <div className="flex justify-center">
          <button
            className={`${
              activeTab === 'mota' ? 'active' : ''
            } px-4 py-2 mr-4 text-black text-md font-semibold`}
            onClick={() => handleTabClick('mota')}
          >
            Mô tả
          </button>
          <button
            className={`${
              activeTab === 'reviews' ? 'active' : ''
            } px-4 py-2 mr-4 text-black text-md font-semibold`}
            onClick={() => handleTabClick('reviews')}
          >
            Reviews
          </button>
          <button
            className={`${
              activeTab === 'api' ? 'active' : ''
            } px-4 py-2 mr-4 text-black text-md font-semibold`}
            onClick={() => handleTabClick('api')}
          >
            API
          </button>
        </div>
        <div className="content">
          {activeTab === 'mota' && (
            <div className="px-5 py-8 border border-gray-200 rounded-sm">
              <p className="text-sm mb-2">Gmail reg bằng iOS, random IP, name US</p>
              <p className="text-sm mb-2">Chế độ bảo hành với gmail:</p>
              <ul className="pl-8 text-sm mb-2">
                <li className="list-disc mb-2">
                  Chỉ bảo hành và support với các đơn trên 30 mail.
                </li>
                <li className="list-disc mb-2">
                  Bảo hành 7 ngày và sau khi login là hết bảo hành nhé.
                </li>
                <li className="list-disc mb-2">
                  Ngoài ra nếu các bạn sử dụng mã TENPERCENT, các bạn sẽ được giảm 10% nhưng mình
                  chỉ bảo hành trong 24 tiếng thôi nhé. Nên có gì các bạn cân nhắc khi sử dụng.
                </li>
              </ul>
            </div>
          )}
          {activeTab === 'reviews' && (
            <ul className="px-5 py-8 border border-gray-200 rounded-sm">
              <li className="reviews-list__item list-none border-b border-gray-200 py-5">
                <div className="review flex">
                  <div className="review__avatar mx-6">
                    <img
                      className="w-20 h-20 rounded-full"
                      src="https://taphoammo.net/images/avatars/user.svg"
                      alt=""
                    />
                  </div>
                  <div className="review__content w-100">
                    <div className="review__author">
                      <a
                        className="text-green-600 font-semibold"
                        target="_blank"
                        href="/thong-tin/baoduy1103"
                      >
                        baoduy1103
                      </a>
                    </div>
                    <div className="review__rating py-2">
                      <span className="rating flex" data-value="5">
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 32 32"
                          className="mr-1"
                          fill="rgb(255, 193, 7)"
                        >
                          <title>star-full</title>
                          <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"></path>
                        </svg>
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 32 32"
                          className="mr-1"
                          fill="rgb(255, 193, 7)"
                        >
                          <title>star-full</title>
                          <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"></path>
                        </svg>
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 32 32"
                          className="mr-1"
                          fill="rgb(255, 193, 7)"
                        >
                          <title>star-full</title>
                          <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"></path>
                        </svg>
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 32 32"
                          className="mr-1"
                          fill="rgb(255, 193, 7)"
                        >
                          <title>star-full</title>
                          <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"></path>
                        </svg>
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 32 32"
                          className="mr-1"
                          fill="rgb(255, 193, 7)"
                        >
                          <title>star-full</title>
                          <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"></path>
                        </svg>
                      </span>
                    </div>
                    <div className="review__text text-sm mb-3"> Sản phẩm khá tốt.</div>
                    <div className="review__date text-xs text-gray-500">07/08/2023</div>
                  </div>
                </div>
              </li>
              <li className="reviews-list__item list-none border-b border-gray-200 py-5">
                <div className="review flex">
                  <div className="review__avatar mx-6">
                    <img
                      className="w-20 h-20 rounded-full"
                      src="https://taphoammo.net/images/avatars/user.svg"
                      alt=""
                    />
                  </div>
                  <div className="review__content w-100">
                    <div className="review__author">
                      <a
                        className="text-green-600 font-semibold"
                        target="_blank"
                        href="/thong-tin/baoduy1103"
                      >
                        baoduy1103
                      </a>
                    </div>
                    <div className="review__rating py-2">
                      <span className="rating flex" data-value="5">
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 32 32"
                          className="mr-1"
                          fill="rgb(255, 193, 7)"
                        >
                          <title>star-full</title>
                          <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"></path>
                        </svg>
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 32 32"
                          className="mr-1"
                          fill="rgb(255, 193, 7)"
                        >
                          <title>star-full</title>
                          <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"></path>
                        </svg>
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 32 32"
                          className="mr-1"
                          fill="rgb(255, 193, 7)"
                        >
                          <title>star-full</title>
                          <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"></path>
                        </svg>
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 32 32"
                          className="mr-1"
                          fill="rgb(255, 193, 7)"
                        >
                          <title>star-full</title>
                          <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"></path>
                        </svg>
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 32 32"
                          className="mr-1"
                          fill="rgb(255, 193, 7)"
                        >
                          <title>star-full</title>
                          <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"></path>
                        </svg>
                      </span>
                    </div>
                    <div className="review__text text-sm mb-3"> Sản phẩm khá tốt.</div>
                    <div className="review__date text-xs text-gray-500">07/08/2023</div>
                  </div>
                </div>
              </li>
              <li className="reviews-list__item list-none border-b border-gray-200 py-5">
                <div className="review flex">
                  <div className="review__avatar mx-6">
                    <img
                      className="w-20 h-20 rounded-full"
                      src="https://taphoammo.net/images/avatars/user.svg"
                      alt=""
                    />
                  </div>
                  <div className="review__content w-100">
                    <div className="review__author">
                      <a
                        className="text-green-600 font-semibold"
                        target="_blank"
                        href="/thong-tin/baoduy1103"
                      >
                        baoduy1103
                      </a>
                    </div>
                    <div className="review__rating py-2">
                      <span className="rating flex" data-value="5">
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 32 32"
                          className="mr-1"
                          fill="rgb(255, 193, 7)"
                        >
                          <title>star-full</title>
                          <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"></path>
                        </svg>
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 32 32"
                          className="mr-1"
                          fill="rgb(255, 193, 7)"
                        >
                          <title>star-full</title>
                          <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"></path>
                        </svg>
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 32 32"
                          className="mr-1"
                          fill="rgb(255, 193, 7)"
                        >
                          <title>star-full</title>
                          <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"></path>
                        </svg>
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 32 32"
                          className="mr-1"
                          fill="rgb(255, 193, 7)"
                        >
                          <title>star-full</title>
                          <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"></path>
                        </svg>
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 32 32"
                          className="mr-1"
                          fill="rgb(255, 193, 7)"
                        >
                          <title>star-full</title>
                          <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"></path>
                        </svg>
                      </span>
                    </div>
                    <div className="review__text text-sm mb-3"> Sản phẩm khá tốt.</div>
                    <div className="review__date text-xs text-gray-500">07/08/2023</div>
                  </div>
                </div>
              </li>
              <li className="reviews-list__item list-none border-b border-gray-200 py-5">
                <div className="review flex">
                  <div className="review__avatar mx-6">
                    <img
                      className="w-20 h-20 rounded-full"
                      src="https://taphoammo.net/images/avatars/user.svg"
                      alt=""
                    />
                  </div>
                  <div className="review__content w-100">
                    <div className="review__author">
                      <a
                        className="text-green-600 font-semibold"
                        target="_blank"
                        href="/thong-tin/baoduy1103"
                      >
                        baoduy1103
                      </a>
                    </div>
                    <div className="review__rating py-2">
                      <span className="rating flex" data-value="5">
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 32 32"
                          className="mr-1"
                          fill="rgb(255, 193, 7)"
                        >
                          <title>star-full</title>
                          <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"></path>
                        </svg>
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 32 32"
                          className="mr-1"
                          fill="rgb(255, 193, 7)"
                        >
                          <title>star-full</title>
                          <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"></path>
                        </svg>
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 32 32"
                          className="mr-1"
                          fill="rgb(255, 193, 7)"
                        >
                          <title>star-full</title>
                          <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"></path>
                        </svg>
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 32 32"
                          className="mr-1"
                          fill="rgb(255, 193, 7)"
                        >
                          <title>star-full</title>
                          <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"></path>
                        </svg>
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 32 32"
                          className="mr-1"
                          fill="rgb(255, 193, 7)"
                        >
                          <title>star-full</title>
                          <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"></path>
                        </svg>
                      </span>
                    </div>
                    <div className="review__text text-sm mb-3"> Sản phẩm khá tốt.</div>
                    <div className="review__date text-xs text-gray-500">07/08/2023</div>
                  </div>
                </div>
              </li>
              <li className="reviews-list__item list-none border-b border-gray-200 py-5">
                <div className="review flex">
                  <div className="review__avatar mx-6">
                    <img
                      className="w-20 h-20 rounded-full"
                      src="https://taphoammo.net/images/avatars/user.svg"
                      alt=""
                    />
                  </div>
                  <div className="review__content w-100">
                    <div className="review__author">
                      <a
                        className="text-green-600 font-semibold"
                        target="_blank"
                        href="/thong-tin/baoduy1103"
                      >
                        baoduy1103
                      </a>
                    </div>
                    <div className="review__rating py-2">
                      <span className="rating flex" data-value="5">
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 32 32"
                          className="mr-1"
                          fill="rgb(255, 193, 7)"
                        >
                          <title>star-full</title>
                          <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"></path>
                        </svg>
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 32 32"
                          className="mr-1"
                          fill="rgb(255, 193, 7)"
                        >
                          <title>star-full</title>
                          <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"></path>
                        </svg>
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 32 32"
                          className="mr-1"
                          fill="rgb(255, 193, 7)"
                        >
                          <title>star-full</title>
                          <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"></path>
                        </svg>
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 32 32"
                          className="mr-1"
                          fill="rgb(255, 193, 7)"
                        >
                          <title>star-full</title>
                          <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"></path>
                        </svg>
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 32 32"
                          className="mr-1"
                          fill="rgb(255, 193, 7)"
                        >
                          <title>star-full</title>
                          <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"></path>
                        </svg>
                      </span>
                    </div>
                    <div className="review__text text-sm mb-3"> Sản phẩm khá tốt.</div>
                    <div className="review__date text-xs text-gray-500">07/08/2023</div>
                  </div>
                </div>
              </li>
            </ul>
          )}
          {activeTab === 'api' && (
            <div className="px-5 py-8 border border-gray-200 rounded-sm">
              <h4 className="font-semibold text-md text-green-600 mb-4">Mua hàng bằng API:</h4>
              <p className="mb-6">
                Bạn chưa kích hoạt sử dụng API, nếu bạn chắc chắn muốn sử dụng tính năng này, hãy
                vào mục thông tin cá nhân (profile) để active !
              </p>
            </div>
          )}
        </div>
      </div> 
      <Shortcuts heading='Sản phẩm tương tự'/>
    </MainLayout>
  )
}

export default ProductDetail

