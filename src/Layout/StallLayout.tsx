import React from 'react'
import SideBar from '../pages/Stall/components/SideBar'
import Header from '../pages/Stall/components/Header' 
import { DASHBOARD_SIDEBAR_STALL, MenuAdminShop } from '../constants/navigationSidebarStall';

export interface StallLayoutProps {
  children?: React.ReactNode
}

export function StallLayout({ children }: StallLayoutProps) { 
  const categoryLists = [
    {
      label: "Seller",
      categories: DASHBOARD_SIDEBAR_STALL,
    },
    {
      label: "Shop",
      categories: MenuAdminShop,
    },
    // Add more category lists as needed
  ];
  return (
    <div className="flex flex-row bg-grey-700 min-h-screen min-w-screen overflow-x-hidden">
      <SideBar categoryLists={categoryLists}/>
      <div className="bg-[#c9cfd6] flex-1">
        <Header />
        {children}
      </div>
    </div>
  )
}
