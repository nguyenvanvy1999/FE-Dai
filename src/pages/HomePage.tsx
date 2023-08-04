import { MainLayout } from '../components/Layout'
import Registration from './Registration/Registration'

function HomePage() {
  return (
    <MainLayout>
      {/* <div className="h-96">Home Page</div> */}
      <Registration />
    </MainLayout>
  )
}

export default HomePage
