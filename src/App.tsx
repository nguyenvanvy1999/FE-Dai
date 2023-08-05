import { Route, Routes } from 'react-router-dom'
import { RoutePath } from './constants'
import HomePage from './pages/HomePage'
import Registration from './pages/Registration/Registration'
import Support from './pages/Support'
import PostList from './pages/Post/PostList'
import AddPost from './pages/Post/AddPost'
import MyPost from './pages/Post/MyPost'

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
      </Routes>
    </>
  )
}

export default App
