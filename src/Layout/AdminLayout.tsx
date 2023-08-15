import * as React from 'react'
// import Sidebar from '../pages/admin/components/common/Sidebar' 
import Sidebar from '../pages/Stall/components/SideBar'
import Header from '../pages/admin/components/common/Header'
import Footer from '../pages/admin/components/common/Footer' 
import { MenuAdminManageUsers, MenuAdminManageProduct, MenuAdminManageDashBoard, MenuAdminManageStore, MenuAdminManageInvoice } from '../constants/navigationSidebarStall'


export interface AdminLayoutProps {
  children: React.ReactNode
}

export default function AdminLayout({ children }: AdminLayoutProps) { 
  const categoryLists = [
    {
      label: "DashBoard",
      categories: MenuAdminManageDashBoard,
    },
    {
      label: "Quản lí sản phẩm",
      categories: MenuAdminManageProduct,
    },
    {
      label: "Quản lí cửa hàng",
      categories: MenuAdminManageStore,
    },
    {
      label: "Quản lí đơn hàng",
      categories: MenuAdminManageInvoice,
    },
    {
      label: "Quản lí người dùng",
      categories: MenuAdminManageUsers,
    },
    // Add more category lists as needed
  ];
  return (
    <>
      <div className="flex">
        <Sidebar categoryLists={categoryLists}/>
        <div className="w-full">
          <Header/>
          <div className='p-3 bg-[#c9cfd6]'  style={{ height: '100vh'}}>{children}</div>
          <Footer />
        </div>
      </div>
    </>
  )
}
