import { DASHBOARD_SIDEBAR_STALL, MenuAdminShop } from '../../../constants/navigationSidebarStall'
import { Link, useLocation } from 'react-router-dom'
import { RoutePath } from '../../../constants'

const linkClasses =
  'flex items-center gap-2 font-bold px-3 py-2 hover:no-underline active:bg-neutral-600 rouded-sm text-base hover:cursor-pointer hover:text-white'

export default function SideBar() {
  const location = useLocation()

  return (
    <div className="flex flex-col bg-slate-800 w-64 text-white fixed h-full">
      <div>
        <Link to={RoutePath.Sales} className="flex items-center gap-2 py-2 justify-center">
          <img
            src={'https://taphoammo.net/administrator/img/logo.svg'}
            alt=""
            className="w-10 h-10"
          />
          <span className="text-neutral-50 text-md">taphoammo.net</span>
        </Link>
      </div>
      <ul>
        <li className="px-3 py-2 text-white-opacity font-medium">Sale</li>
        {DASHBOARD_SIDEBAR_STALL.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={`${linkClasses} ${
                item.path === location.pathname
                  ? 'shadow-inset bg-grey-50 text-white'
                  : 'text-white-opacity'
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <ul>
        <li className="px-3 py-2 text-white-opacity font-medium">Shop</li>
        {MenuAdminShop.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={`${linkClasses} ${
                item.path === location.pathname
                  ? 'shadow-inset bg-grey-50 text-white'
                  : 'text-white-opacity'
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
