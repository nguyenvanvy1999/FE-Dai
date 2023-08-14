import { Menu, type MenuProps } from 'antd'
import { BsListUl } from 'react-icons/bs'
import { RoutePath } from '../../../../constants'
import { Link } from 'react-router-dom'

import { BsBarChartLine } from 'react-icons/bs'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'

type MenuItem = Required<MenuProps>['items'][number]

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem
}

const items: MenuProps['items'] = [
  getItem(<Link to={RoutePath.DashboardPage}>Dashboard</Link>, 'sub1', <BsBarChartLine />),
  { type: 'divider' },
  getItem('Quản lý sản phẩm', 'sub2', <BsListUl />, [
    getItem(<Link to={RoutePath.ManagerProductPage}>Danh sách</Link>, '1'),
    getItem(<Link to={RoutePath.ManagerProductTypePage}>Danh mục</Link>, '2'),
  ]),
  { type: 'divider' },
  getItem(
    <Link to={RoutePath.ManagerShopPage}>Quản lý shop</Link>,
    'sub3',
    <AiOutlineShoppingCart />
  ),

  getItem('Quản lý hóa đơn', 'sub4', <BsListUl />, [
    getItem(<Link to={RoutePath.ManagerOrderPage}>Danh sách</Link>, '1'),
  ]),
  { type: 'divider' },
  getItem(
    <Link to={RoutePath.ManagerUserPage}>Quản lý người dùng</Link>,
    'sub5',
    <AiOutlineUser />
  ),
]

export default function SideBar() {
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e)
  }
  return (
    <Menu
      onClick={onClick}
      style={{ width: '250px' }}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
  )
}
