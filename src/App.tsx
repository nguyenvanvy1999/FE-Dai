import { Route, Routes } from 'react-router-dom'
import { RoutePath } from './constants'
import HomePage from './pages/HomePage'
import Registration from './pages/Registration/Registration'
import Support from './pages/Support'

function App() {
  return (
    <>
      <Routes>
        <Route path={RoutePath.HomePage} element={<HomePage />} />
        <Route path={RoutePath.LoginPage} element={<Registration />} /> 
        <Route path={RoutePath.HoTroPage} element={<Support />} />
      </Routes>
    </>
  )
}

export default App
