import { useState } from 'react'
import SideBar from './SideBar'
import Header from './StallComponents/Header'
import Sales from './StallComponents/Sales'

const Stall = () => {
  const [currentComponent, setCurrentComponent] = useState(<Sales />)
  return (
    <div className="flex flex-row bg-[#c9cfd6] h-screen w-screen overflow-hidden">
      <SideBar setCurrentComponent={setCurrentComponent} />
      <div className="w-full">
        <Header />
        {currentComponent}
      </div>
    </div>
  )
}

export default Stall
