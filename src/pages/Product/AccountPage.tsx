import { CategoryLayout } from '../../components/Layout'
import ProductList from '../../components/ProductList'
import useType from '../../hooks/useType'
import { ProductTypeResponse } from '../../models'

export default function AccountPage() {
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

  const { productType } = useType()

  const productTypeAccount = productType.slice(17, 20).map((productType: ProductTypeResponse) => ({
    name: productType.slug,
    value: productType._id,
    label: productType.name,
  }))
  return (
    <CategoryLayout
      formFields={productTypeAccount}
      title="Gian hàng tài khoản"
      total={1528}
      tabs={tabs}
      contentNotification="Đối với gian hàng không trùng, chúng tôi
cam kết sản phẩm được bán ra 1 lần duy nhất trên hệ thống, tránh
trường hợp sản phẩm đó được bán nhiều lần."
    />
  )
}
