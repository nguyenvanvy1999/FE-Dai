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
  FaChartLine, 
  FaStore,  
  FaRocketchat,
  FaFileInvoice,  
  FaDna, 
  FaShopify
  
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
export const MenuAdminManageDashBoard = [
  {
    key: 'Dashboard ',
    label: 'Dashboard ',
    path: RoutePath.DashboardPage,
    icon: <FaChartLine />,
  },
]
export const MenuAdminManageProduct = [
  {
    key: 'Product Management List',
    label: 'Product Management List',
    path: RoutePath.ManagerProductPage,
    icon: <FaClipboardList />,
  },
  {
    key: 'Product Management Type',
    label: 'Product Management Type',
    path: RoutePath.ManagerProductTypePage,
    icon: <FaClipboardList />,
  },
] 

export const MenuAdminManageStore = [
  {
    key: 'Management Shop',
    label: 'Management Shop',
    path: RoutePath.ManagerShopPage,
    icon: <FaStore />,
  }, 
  {
    key: 'Management Review Shop',
    label: 'Management Review Shop',
    path: RoutePath.ManagerShopReviewPage,
    icon: <FaRocketchat />,
  },
  {
    key: 'Management Eval Shop',
    label: 'Management Eval Shop',
    path: RoutePath.ManagerShopEvalutionPage,
    icon: <FaDna />,
  },
  {
    key: 'Management Type Shop',
    label: 'Management Type Shop',
    path: RoutePath.ManagerShopTypePage,
    icon: <FaShopify />,
  },
]
export const MenuAdminManageInvoice = [
  {
    key: 'Management Invoice',
    label: 'Management Invoice',
    path: RoutePath.CheckLiveFB,
    icon: <FaFileInvoice />,
  },
]
export const MenuAdminManageUsers = [
  {
    key: 'Management Users',
    label: 'Management Users',
    path: RoutePath.ManagerUserPage,
    icon: <FaUsers />,
  },
]
