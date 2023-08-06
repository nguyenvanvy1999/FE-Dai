import React from 'react'
import { Footer, Header } from '../common'
import Marquee from 'react-fast-marquee'
import Sidebar from '../common/Sidebar'
import { FormField, Tab } from '../../models'
import VerticalTab from '../vertical-tab'

export interface CategoryLayoutProps {
  children?: React.ReactNode
  formFields: FormField[]
  title: string
  total: number
  tabs: Tab[]
  contentNotification?: string
}

export function CategoryLayout({
  children,
  formFields,
  title,
  total,
  tabs,
  contentNotification,
}: CategoryLayoutProps) {
  return (
    <div>
      <Header />
      <Marquee className="text-red-500 text-base">
        Tạp Hóa MMO - Sàn thương mại điện tử sản phẩm số phục vụ Kiếm tiền online. Mọi giao dịch
        trên trang đều hoàn toàn tự động và được giữ tiền 3 ngày, thay thế cho hình thức trung gian,
        các bạn yên tâm giao dịch nhé. (2) Cảnh báo gian hàng không uy tín: Nếu chủ shop bán cho bạn
        sản phẩm không đúng định dạng: tài-khoản|mật-khẩu..., mà là 1 chuỗi không liên quan ở đầu,
        có nghĩa là hàng đó đang cố pass hệ thống check trùng của sàn, hãy nhanh chóng khiếu nại đơn
        hàng và báo cho bên mình nhé, vì sản phẩm bạn mua có thể đã từng bán cho người khác trên
        sàn.
      </Marquee>
      <div className="flex px-15px">
        <Sidebar formFields={formFields} />
        <div className="flex-1">
          <div className="flex gap-5 items-baseline mb-2">
            <h1 className="text-lg font-bold">{title}</h1>
            <div className="text-black-light leading-normal text-15px font-normal ">
              Tổng {total} gian hàng
            </div>
          </div>
          <VerticalTab tabs={tabs} contentNotification={contentNotification} />
          {children}
        </div>
      </div>
      <Footer />
    </div>
  )
}
