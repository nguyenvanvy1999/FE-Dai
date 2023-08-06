import { CategoryLayout } from '../components/Layout'
import { FormAccountFields } from '../models'

export default function AccountPage() {
  const tabs = [
    {
      label: 'Phổ biến',
      content: <div>Phổ biến</div>,
    },
    {
      label: 'Giá tăng dần',
      content: <div>Giá tăng dần</div>,
    },
    {
      label: 'Giá giảm dần',
      content: <div>Giá giảm dần</div>,
    },
  ]
  return (
    <CategoryLayout
      formFields={FormAccountFields}
      title="Gian hàng tài khoản"
      total={1528}
      tabs={tabs}
      contentNotification="Đối với gian hàng không trùng, chúng tôi
cam kết sản phẩm được bán ra 1 lần duy nhất trên hệ thống, tránh
trường hợp sản phẩm đó được bán nhiều lần."
    >
      Account Page
    </CategoryLayout>
  )
}
