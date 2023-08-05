import { MainLayout } from '../components/Layout'
import Registration from './Registration/Registration'
import Support from './Support'

function HomePage() {
  return (
    <MainLayout>
      {/* <div className="h-96">Home Page</div> */}
      {/* <Registration /> */}
      <Support />
    </MainLayout>
  )
}

export default HomePage
