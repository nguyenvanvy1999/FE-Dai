import { CategoryLayout } from '../components/Layout'
import { FormEmailFields } from '../models'

export default function EmailPage() {
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
      formFields={FormEmailFields}
      title="Gian hàng Email"
      total={462}
      tabs={tabs}
      contentNotification="Đối với gian hàng không trùng, chúng tôi
    cam kết sản phẩm được bán ra 1 lần duy nhất trên hệ thống, tránh
    trường hợp sản phẩm đó được bán nhiều lần."
    >
      Email Page
    </CategoryLayout>
  )
}
