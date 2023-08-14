import React from 'react'
import { Footer, Header } from '../components/common'
import Marquee from 'react-fast-marquee'

export interface MainLayoutProps {
  children?: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
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
      <div className="container mx-auto pt-8 px-15px">{children}</div>
      <Footer />
    </div>
  )
}
