import { CategoryLayout } from '../../components/Layout'
import ProductList from '../../components/ProductList'
import { FormEmailFields } from '../../models'

export default function EmailPage() {
  const tabs = [
    {
      label: 'Phổ biến',
      content: <ProductList />,
    },
    {
      label: 'Giá tăng dần',
      content: <ProductList />,
    },
    {
      label: 'Giá giảm dần',
      content: <ProductList />,
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
    />
  )
}
