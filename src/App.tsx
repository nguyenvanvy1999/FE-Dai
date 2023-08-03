import { Route, Routes } from 'react-router-dom'
import { RoutePath } from './constants'
import HomePage from './pages/HomePage'

function App() {
  return (
    <>
      <Routes>
        <Route path={RoutePath.HomePage} element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App
