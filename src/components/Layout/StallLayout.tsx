import React from 'react'
import SideBar from '../../pages/Stall/components/SideBar'
import Header from '../../pages/Stall/components/Header'

export interface StallLayoutProps {
  children?: React.ReactNode
}

export function StallLayout({ children }: StallLayoutProps) {
  return (
    <div className="flex flex-row bg-grey-700 min-h-screen min-w-screen overflow-x-hidden">
      <SideBar />
      <div className="bg-[#c9cfd6] ml-257px flex-1">
        <Header />
        {children}
      </div>
    </div>
  )
}
