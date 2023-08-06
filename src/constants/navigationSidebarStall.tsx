import {
  FaFileInvoiceDollar,
  FaClipboardList,
  FaClock,
  FaBug,
  FaUsers,
  FaComment,
  FaDollarSign,
  FaArrowUp,
} from 'react-icons/fa'
import Sales from '../pages/Stall/StallComponents/Sales'
import OrderManage from '../pages/Stall/StallComponents/OrderManage'
import ProductOrders from '../pages/Stall/StallComponents/ProductOrders'
import PreOrders from '../pages/Stall/StallComponents/PreOrders'
import Complain from '../pages/Stall/StallComponents/Complain'
import ResellerManage from '../pages/Stall/StallComponents/ResellerManage'
import ReplyComment from '../pages/Stall/StallComponents/ReplyComment'
import Promotion from '../pages/Stall/StallComponents/Promotion'
import TopKiosk from '../pages/Stall/StallComponents/TopKiosk'
export const DASHBOARD_SIDEBAR_STALL = [
  {
    key: 'sales',
    label: 'sales',
    path: '/stall/sales',
    icon: <FaClipboardList />,
    component: <Sales />,
  },
  {
    key: 'orderManage',
    label: 'Quản lý đơn hàng',
    path: '/stall/order-manager',
    icon: <FaFileInvoiceDollar />,
    component: <OrderManage />,
  },
  {
    key: 'productOrders',
    label: 'Đơn hàng sản phẩm',
    path: '/stall/product-orders',
    icon: <FaClipboardList />,
    component: <ProductOrders />,
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
    label: 'Khieu nai',
    path: '/stall/complain',
    icon: <FaBug />,
    component: <Complain />,
  },
  {
    key: 'resellerManage',
    label: 'Quan ly reseller',
    path: '/stall/resellerManage',
    icon: <FaUsers />,
    component: <ResellerManage />,
  },
  {
    key: 'replyComment',
    label: 'Danh gia',
    path: '/stall/reply-comment',
    icon: <FaComment />,
    component: <ReplyComment />,
  },
  {
    key: 'promotion',
    label: 'Ma giam gia',
    path: '/stall/promotion',
    icon: <FaDollarSign />,
    component: <Promotion />,
  },
  {
    key: 'topKiosk',
    label: 'Gian hang top 1',
    path: '/stall/top-kiosk',
    icon: <FaArrowUp />,
    component: <TopKiosk />,
  },
]
