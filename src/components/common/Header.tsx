import { useEffect, useRef, useState } from 'react'
import { AiFillFacebook, AiOutlineMail, AiOutlineClockCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { NavigationBar } from '.'
import { RoutePath } from '../../constants'

export const Header = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (containerRef.current && containerRef.current instanceof HTMLDivElement) {
        if (!containerRef.current.contains(event.target as Node)) {
          setIsOpen(false)
        }
      }
    }

    if (isOpen) {
      document.addEventListener('click', handleOutsideClick)
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick)
    }
  }, [isOpen])

  return (
    <>
      <div className="border border-neutral-400 relative hidden xl:block" ref={containerRef}>
        <div className="px-4 py-1">
          <div className="flex justify-between items-center">
            <div className="flex gap-2 text-sm flex-none">
              <p className="text-neutral-500">Hỗ trợ trực tuyến</p>
              <Link
                to="facebook.com"
                className="flex items-center text-green-400 gap-1 font-medium"
              >
                <AiFillFacebook className="fill-green-400" />
                Tạp hóa MMO
              </Link>
              <Link to="facebook.com" className="flex items-center text-neutral-500 gap-1">
                <AiOutlineMail className="fill-neutral-500" />
                support@taphoammo.net
              </Link>
              <div className="flex items-center gap-1 text-neutral-500">
                <AiOutlineClockCircle className="fill-neutral-500" />
                08:00am - 10:00pm
              </div>
            </div>
            <div className="shrink" />
            <div className="flex items-center gap-1">
              <Link to={RoutePath.LoginPage} className="text-red-600 font-medium flex-none">
                Đăng ký bán hàng
              </Link>
              <div className="flex justify-center flex-none">
                <div className="relative inline-block">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className="gap-1 relative z-10 flex items-center p-2 text-sm text-neutral-500 bg-white border border-transparent rounded-md focus:bg-neutral-300"
                  >
                    <span className="mx-1 flex items-center gap-1">
                      Ngôn ngữ <span className="uppercase text-green-400">VI</span>
                    </span>
                    <svg
                      className="w-5 h-5 mx-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                  {isOpen && (
                    <div className="left-1.5 top-11 absolute right-0 z-20  overflow-hidden bg-white rounded-md shadow-xl p-2">
                      <div className="flex items-center p-1.5 text-sm text-neutral-500 transition-colors duration-200 transform hover:bg-neutral-300  cursor-pointer">
                        <img
                          className="flex-shrink-0 object-cover mx-1 rounded-full w-6 h-6"
                          src="https://taphoammo.net/images/icon/en.png"
                          alt="jane avatar"
                        />
                        <div className="mx-1">
                          <h1 className="text-sm font-semibold text-black">English</h1>
                        </div>
                      </div>
                      <div className="mt-2.5 flex items-center p-1.5 text-sm text-black transition-colors duration-200 transform  hover:bg-neutral-300 cursor-pointer">
                        <img
                          className="flex-shrink-0 object-cover mx-1 rounded-full w-6 h-6"
                          src="https://taphoammo.net/images/icon/vn.png"
                          alt="jane avatar"
                        />
                        <div className="mx-1">
                          <h1 className="text-sm font-semibold text-black">Việt Nam</h1>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NavigationBar />
    </>
  )
}
