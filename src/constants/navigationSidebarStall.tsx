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
import Sales from '../pages/Stall/StallComponents/Sales'
import ProductOrders from '../pages/Stall/StallComponents/ProductOrders'
import PreOrders from '../pages/Stall/StallComponents/PreOrders'
import Complain from '../pages/Stall/StallComponents/Complain'
import ResellerManage from '../pages/Stall/StallComponents/ResellerManage'
import ReplyComment from '../pages/Stall/StallComponents/ReplyComment'
import Promotion from '../pages/Stall/StallComponents/Promotion'
import TopKiosk from '../pages/Stall/StallComponents/TopKiosk'
import { FiShoppingBag } from 'react-icons/fi'
import StallManage from '../pages/Stall/StallComponents/StallManage'
import OrdersService from '../pages/Stall/StallComponents/OrdersService'
export const DASHBOARD_SIDEBAR_STALL = [
  {
    key: 'sales',
    label: 'Sales',
    path: '/stall/sales',
    icon: <FiShoppingBag />,
    component: <Sales />,
  },
  {
    key: 'stallManage',
    label: 'Quản lý gian hàng',
    path: '/stall/order-manager',
    icon: <FaClipboardList />,
    component: <StallManage />,
  },
  {
    key: 'productOrders',
    label: 'Đơn hàng sản phẩm',
    path: '/stall/product-orders',
    icon: <FaFileInvoiceDollar />,
    component: <ProductOrders />,
  },
  {
    key: 'ordersService',
    label: 'Đơn hàng dịch vụ',
    path: '/stall/orders-service',
    icon: <FaListOl />,
    component: <OrdersService />,
  },
  {
    key: 'preOders',
    label: 'Đặt trước',
    path: '/stall/pre-orders',
    icon: <FaClock />,
    component: <PreOrders />,
  },
  {
    key: 'complain',
    label: 'Khiếu nại',
    path: '/stall/complain',
    icon: <FaBug />,
    component: <Complain />,
  },
  {
    key: 'resellerManage',
    label: 'Quản lý Reseller',
    path: '/stall/resellerManage',
    icon: <FaUsers />,
    component: <ResellerManage />,
  },
  {
    key: 'replyComment',
    label: 'Đánh giá',
    path: '/stall/reply-comment',
    icon: <FaComment />,
    component: <ReplyComment />,
  },
  {
    key: 'promotion',
    label: 'Mã giảm giá',
    path: '/stall/promotion',
    icon: <FaDollarSign />,
    component: <Promotion />,
  },
  {
    key: 'topKiosk',
    label: 'Gian hàng top 1',
    path: '/stall/top-kiosk',
    icon: <FaArrowUp />,
    component: <TopKiosk />,
  },
]
