import { useState } from 'react'
import SideBar from './SideBar'
import Header from './StallComponents/Header'
import Sales from './StallComponents/Sales'

const Stall = () => {
  const [currentComponent, setCurrentComponent] = useState(<Sales />)
  return (
    <div className="flex flex-row bg-[#c9cfd6] min-h-screen min-w-screen">
      <SideBar setCurrentComponent={setCurrentComponent} />
      <div className="w-full bg-[#c9cfd6] ">
        <Header />
        {currentComponent}
      </div>
    </div>
  )
}

export default Stall
