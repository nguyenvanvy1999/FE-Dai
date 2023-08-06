import { NavLink, NavLinks, NavLinksMobile } from '../../models'
import Logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import { AiOutlineUser } from 'react-icons/ai'
import { HiOutlineBars3BottomLeft } from 'react-icons/hi2'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { useEffect, useState } from 'react'
import { RoutePath } from '../../constants'
export function NavigationBar() {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({})
  const [isOpenMenuBar, setIsOpenMenuBar] = useState<boolean>(false)

  const handleShowMenu = (item: NavLink) => {
    setOpenItems((prevOpenItems) => ({
      ...prevOpenItems,
      [item.title]: !prevOpenItems[item.title],
    }))
  }
  useEffect(() => {
    if (isOpenMenuBar) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpenMenuBar])

  const handleToggleMenuBar = () => {
    setIsOpenMenuBar(!isOpenMenuBar)
  }

  return (
    <>
      <nav className="bg-green-400 px-4 flex items-center gap-4 justify-between">
        <div className="flex gap-4 xl:gap-8 items-center">
          <div
            className="active:bg-light p-4 h-42px relative flex items-center cursor-pointer xl:hidden"
            onClick={handleToggleMenuBar}
          >
            <HiOutlineBars3BottomLeft className="w-9 h-9 text-white" />
            <div className="bg-white rounded-full text-black-light absolute top-1 right-1 p-5px h-15px w-15px text-xs font-medium flex items-center justify-center">
              0
            </div>
          </div>
          <Link to={RoutePath.HomePage}>
            <img src={Logo} alt="Logo" className="h-11" />
          </Link>
          <ul className="hidden xl:block">
            {NavLinks.map((item) => (
              <li key={item.title} className="inline-flex relative group px-4 py-3">
                <Link
                  to={item.path}
                  className={`inline-flex items-center text-white text-sm ${
                    item.children ? 'pointer-events-none cursor-pointer' : ''
                  }`}
                >
                  {item.title}
                  {item.children && <MdKeyboardArrowDown className="w-5 h-5" />}
                </Link>
                <ul
                  className={`transition-all z-100 hidden group-hover:grid bg-white w-300px absolute left-1.5 top-43px border ${
                    item.children ? 'gap-2 grid-cols-2' : ''
                  }`}
                >
                  {item.children &&
                    item.children.map((subMenu) => (
                      <li key={subMenu.title} className="p-3">
                        <Link
                          to={subMenu.path}
                          className="block hover:text-green-500 w-full text-sm"
                        >
                          {subMenu.title}
                        </Link>
                      </li>
                    ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
        <div className="active:bg-light p-4 h-42px relative flex items-center cursor-pointer">
          <AiOutlineUser className="fill-white w-10 h-9 " />
          <div className="bg-white rounded-full text-black-light text-center absolute top-1 right-1 p-5px h-15px w-15px text-xs font-medium items-center justify-center hidden xl:flex">
            0
          </div>
        </div>
      </nav>
      {isOpenMenuBar && (
        <>
          <div className="flex relative">
            <ul className="fixed bg-white shadow-xl left-0 top-0 w-290px h-full z-20 overflow-auto">
              <div className="px-4 py-3">
                <div className="text- font-bold text-black-light">Menu</div>
              </div>
              {NavLinksMobile.map((item) => (
                <li key={item.title} className="relative " onClick={() => handleShowMenu(item)}>
                  <div className="flex border-t border-grey-100 cursor-pointer">
                    <Link
                      to={item.path}
                      className={`${
                        item.children ? 'pointer-events-none ' : ''
                      } inline-flex items-center text-black-light px-4 py-3  w-full justify-between`}
                    >
                      {item.title}
                    </Link>
                    {item.children && (
                      <div className="border-l border-grey-100 w-55px h-54px  text-grey-900">
                        <MdKeyboardArrowDown size={50} />
                      </div>
                    )}
                  </div>
                  <ul
                    className={`w-full  ${
                      item.children && openItems[item.title]
                        ? 'transition-all duration-300 block'
                        : 'hidden'
                    }`}
                  >
                    {item.children &&
                      item.children.map((subMenu) => (
                        <li
                          key={subMenu.title}
                          className="border-b border-grey-100 first:border-t bg-grey-300"
                        >
                          <Link
                            to={subMenu.path}
                            className="block hover:text-green-500 w-full px-13px py-5 "
                          >
                            {subMenu.title}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="opacity-90 absolute top-0 w-full h-full bg-grey-100 right-0 z-10"
            onClick={() => setIsOpenMenuBar(!isOpenMenuBar)}
          ></div>
        </>
      )}
    </>
  )
}
