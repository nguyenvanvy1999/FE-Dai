import * as React from 'react'
import Sidebar from '../pages/admin/components/common/Sidebar'
import Header from '../pages/admin/components/common/Header'
import Footer from '../pages/admin/components/common/Footer'

export interface AdminLayoutProps {
  children: React.ReactNode
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="w-full">
          <Header />
          <div style={{ height: '100vh', paddingLeft: '15px' }}>{children}</div>
          <Footer />
        </div>
      </div>
    </>
  )
}
