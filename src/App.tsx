import { Route, Routes } from 'react-router-dom'
import { RoutePath } from './constants'
import HomePage from './pages/Home/HomePage'
import ProductDetail from './pages/Product/ProductDetail'
import Registration from './pages/Registration/Registration'
import Support from './pages/Support'
import FAQ from './pages/FAQ/FAQ'
import Authen2FA from './pages/Authen2FA/Authen2FA'
import CheckLiveFB from './pages/CheckLiveFB/CheckLiveFB'
import PostList from './pages/Post/PostList'
import AddPost from './pages/Post/AddPost'
import MyPost from './pages/Post/MyPost'
import Reseller from './pages/Reseller/Reseller'
import Chatbox from './pages/Chatbox'
import UserInformation from './pages/Users/UserInformation'
import OderItem from './pages/Users/OrderItem'
import Payment from './pages/Users/Payment'
import EmailPage from './pages/Product/EmailPage'
import AccountPage from './pages/Product/AccountPage'
import SoftwarePage from './pages/Product/SoftwarePage'
import BlockchainPage from './pages/Service/BlockchainPage'
import IncrementInteract from './pages/Service/IncrementInteract'
import ServiceOther from './pages/Service/ServiceOther'
import ServiceSoftware from './pages/Service/ServiceSoftware'
import WishList from './pages/WishList/WishListPage'
import ForgotPasswordPage from './pages/ForgotPassword/ForgotPasswordPage'
import Sales from './pages/Stall/pages/Sales'
import StallManage from './pages/Stall/pages/StallManage'
import OrdersService from './pages/Stall/pages/OrdersService'
import ProductOrders from './pages/Stall/pages/ProductOrders'
import PreOrders from './pages/Stall/pages/PreOrders'
import Complain from './pages/Stall/pages/Complain'
import Promotion from './pages/Stall/pages/Promotion'
import TopKiosk from './pages/Stall/pages/TopKiosk'
import ReplyComment from './pages/Stall/pages/ReplyComment'
import ResellerManage from './pages/Stall/pages/ResellerManage'
import PrivateRoute from './routes/PrivateRoute'
import { ROLE } from './models'

function App() {
  return (
    <>
      <Routes>
        <Route path={RoutePath.HomePage} element={<HomePage />} />
        <Route path={RoutePath.FAQ} element={<FAQ />} />
        <Route path={RoutePath.Authen2FA} element={<Authen2FA />} />
        <Route path={RoutePath.Reseller} element={<Reseller />} />
        <Route path={RoutePath.CheckLiveFB} element={<CheckLiveFB />} />
        <Route path={RoutePath.LoginPage} element={<Registration />} />
        <Route path={RoutePath.Forgotpassword} element={<ForgotPasswordPage />} />
        <Route path={RoutePath.HoTroPage} element={<Support />} />
        <Route path={RoutePath.SharePostList} element={<PostList />} />
        <Route path={RoutePath.AddPost} element={<AddPost />} />
        <Route path={RoutePath.MyPost} element={<MyPost />} />
        {/* Stall */}
        <Route
          path={RoutePath.Sales}
          element={
            <PrivateRoute roles={[ROLE.ADMIN, ROLE.USER]}>
              <Sales />
            </PrivateRoute>
          }
        />
        <Route
          path={RoutePath.OrderManage}
          element={
            <PrivateRoute roles={[ROLE.ADMIN, ROLE.USER]}>
              <StallManage />
            </PrivateRoute>
          }
        />

        <Route
          path={RoutePath.ProductOrders}
          element={
            <PrivateRoute roles={[ROLE.ADMIN, ROLE.USER]}>
              <ProductOrders />
            </PrivateRoute>
          }
        />

        <Route
          path={RoutePath.ServiceOrders}
          element={
            <PrivateRoute roles={[ROLE.ADMIN, ROLE.USER]}>
              <OrdersService />
            </PrivateRoute>
          }
        />

        <Route
          path={RoutePath.PreOrders}
          element={
            <PrivateRoute roles={[ROLE.ADMIN, ROLE.USER]}>
              <PreOrders />
            </PrivateRoute>
          }
        />

        <Route
          path={RoutePath.Complain}
          element={
            <PrivateRoute roles={[ROLE.ADMIN, ROLE.USER]}>
              <Complain />
            </PrivateRoute>
          }
        />

        <Route
          path={RoutePath.ResellerManage}
          element={
            <PrivateRoute roles={[ROLE.ADMIN, ROLE.USER]}>
              <ResellerManage />
            </PrivateRoute>
          }
        />

        <Route
          path={RoutePath.Promotion}
          element={
            <PrivateRoute roles={[ROLE.ADMIN, ROLE.USER]}>
              <Promotion />
            </PrivateRoute>
          }
        />

        <Route
          path={RoutePath.ReplyComment}
          element={
            <PrivateRoute roles={[ROLE.ADMIN, ROLE.USER]}>
              <ReplyComment />
            </PrivateRoute>
          }
        />

        <Route
          path={RoutePath.TopKiosk}
          element={
            <PrivateRoute roles={[ROLE.ADMIN, ROLE.USER]}>
              <TopKiosk />
            </PrivateRoute>
          }
        />

        <Route path={RoutePath.Chatbox} element={<Chatbox />} />
        <Route>
          <Route path={RoutePath.EmailPage} element={<EmailPage />} />
          <Route path={RoutePath.AccountPage} element={<AccountPage />} />
          <Route path={RoutePath.SoftwarePage} element={<SoftwarePage />} />
          <Route path={RoutePath.ProductOtherPage} element={<EmailPage />} />
          <Route path={RoutePath.ProductDetail} element={<ProductDetail />} />
          <Route path={RoutePath.BlockchainPage} element={<BlockchainPage />} />
          <Route path={RoutePath.IncrementInteractPage} element={<IncrementInteract />} />
          <Route path={RoutePath.ServiceOtherPage} element={<ServiceOther />} />
          <Route path={RoutePath.ServiceSoftwarePage} element={<ServiceSoftware />} />
          <Route path={RoutePath.LikeProductPage} element={<WishList />} />
        </Route>
        {/* User information region */}
        <Route>
          <Route path={RoutePath.UserInformationPage} element={<UserInformation />} />
          <Route path={RoutePath.OrderItemPage} element={<OderItem />} />
          <Route path={RoutePath.PaymentsPage} element={<Payment />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
