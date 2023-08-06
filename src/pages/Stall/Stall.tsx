import { useState } from 'react'
import SideBar from './SideBar'

const Stall = () => {
  const [currentComponent, setCurrentComponent] = useState()
  return (
    <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
      <SideBar setCurrentComponent={setCurrentComponent} />
      <div className="p-4">
        <div className="header">Headaer</div>
        {currentComponent}
      </div>
    </div>
  )
}

export default Stall
