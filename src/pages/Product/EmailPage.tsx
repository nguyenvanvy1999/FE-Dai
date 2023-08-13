import { CategoryLayout } from '../../components/Layout'
import ProductList from '../../components/ProductList'
import useType from '../../hooks/useType'

import { ProductTypeResponse } from '../../models'

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

  const { productType } = useType()

  // eslint-disable-next-line react-hooks/rules-of-hooks

  const productTypeEmails = productType.slice(0, 8).map((productType: ProductTypeResponse) => ({
    name: productType.slug,
    value: productType._id,
    label: productType.name,
  }))

  return (
    <CategoryLayout
      formFields={productTypeEmails}
      title="Gian hàng Email"
      total={462}
      tabs={tabs}
      contentNotification="Đối với gian hàng không trùng, chúng tôi
    cam kết sản phẩm được bán ra 1 lần duy nhất trên hệ thống, tránh
    trường hợp sản phẩm đó được bán nhiều lần."
    />
  )
}
