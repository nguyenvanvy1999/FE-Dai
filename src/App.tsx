import { Route, Routes } from 'react-router-dom'
import { RoutePath } from './constants'
import HomePage from './pages/Home/HomePage'
import ProductDetail from './pages/Product/ProductDetail'
import Registration from './pages/Registration/Registration'
import Support from './pages/Support'
import PostList from './pages/Post/PostList'
import AddPost from './pages/Post/AddPost'
import MyPost from './pages/Post/MyPost'
import Stall from './pages/Stall/Stall'
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

function App() {
  return (
    <>
      <Routes>
        <Route path={RoutePath.HomePage} element={<HomePage />} />
        <Route path={RoutePath.LoginPage} element={<Registration />} />
        <Route path={RoutePath.HoTroPage} element={<Support />} />
        <Route path={RoutePath.SharePostList} element={<PostList />} />
        <Route path={RoutePath.AddPost} element={<AddPost />} />
        <Route path={RoutePath.MyPost} element={<MyPost />} />
        <Route path={RoutePath.stall} element={<Stall />} />

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
