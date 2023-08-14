import { CategoryLayout } from '../../Layout'
import ProductList from '../../components/ProductList'
import useType from '../../hooks/useType'
import { ProductTypeResponse } from '../../models'

export default function ProductOtherPage() {
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

  const productTypeProductOther = productType
    .slice(20, 24)
    .map((productType: ProductTypeResponse) => ({
      name: productType.slug,
      value: productType._id,
      label: productType.name,
    }))

  return (
    <CategoryLayout
      formFields={productTypeProductOther}
      title="Gian hàng khác"
      total={462}
      tabs={tabs}
      contentNotification="Đối với gian hàng không trùng, chúng tôi
    cam kết sản phẩm được bán ra 1 lần duy nhất trên hệ thống, tránh
    trường hợp sản phẩm đó được bán nhiều lần."
    />
  )
}
