import { Route, Routes } from 'react-router-dom'
import { RoutePath } from './constants'
import HomePage from './pages/HomePage'
import Registration from './pages/Registration/Registration'
import Support from './pages/Support'
import PostList from './pages/Post/PostList'
import AddPost from './pages/Post/AddPost'
import MyPost from './pages/Post/MyPost'
import Chatbox from './pages/Chatbox'
import EmailPage from './pages/EmailPage'
import AccountPage from './pages/AccountPage'
import SoftwarePage from './pages/SoftwarePage'

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
        <Route path={RoutePath.Chatbox} element={<Chatbox />} />
        <Route>
          <Route path={RoutePath.EmailPage} element={<EmailPage />} />
          <Route path={RoutePath.AccountPage} element={<AccountPage />} />
          <Route path={RoutePath.SoftwarePage} element={<SoftwarePage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
