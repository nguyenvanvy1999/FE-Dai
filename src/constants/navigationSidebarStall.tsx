import {
  FaFileInvoiceDollar,
  FaClipboardList,
  FaClock,
  FaBug,
  FaUsers,
  FaComment,
  FaDollarSign,
  FaArrowUp,
  FaListOl,
} from 'react-icons/fa'

import { FiShoppingBag } from 'react-icons/fi'
import { RoutePath } from './index'

export const DASHBOARD_SIDEBAR_STALL = [
  {
    label: 'Sales',
    path: RoutePath.Sales,
    icon: <FiShoppingBag />,
  },
]

export const MenuAdminShop = [
  {
    key: 'stallManage',
    label: 'Quản lý gian hàng',
    path: RoutePath.OrderManage,
    icon: <FaClipboardList />,
  },
  {
    key: 'productOrders',
    label: 'Đơn hàng sản phẩm',
    path: RoutePath.ProductOrders,
    icon: <FaFileInvoiceDollar />,
  },
  {
    key: 'ordersService',
    label: 'Đơn hàng dịch vụ',
    path: RoutePath.ServiceOrders,
    icon: <FaListOl />,
  },
  {
    key: 'preOders',
    label: 'Đặt trước',
    path: RoutePath.PreOrders,
    icon: <FaClock />,
  },
  {
    key: 'complain',
    label: 'Khiếu nại',
    path: RoutePath.Complain,
    icon: <FaBug />,
  },
  {
    key: 'resellerManage',
    label: 'Quản lý Reseller',
    path: RoutePath.ResellerManage,
    icon: <FaUsers />,
  },
  {
    key: 'replyComment',
    label: 'Đánh giá',
    path: RoutePath.ReplyComment,
    icon: <FaComment />,
  },
  {
    key: 'promotion',
    label: 'Mã giảm giá',
    path: RoutePath.Promotion,
    icon: <FaDollarSign />,
  },
  {
    key: 'topKiosk',
    label: 'Gian hàng top 1',
    path: RoutePath.TopKiosk,
    icon: <FaArrowUp />,
  },
]
