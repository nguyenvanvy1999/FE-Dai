import { CategoryLayout } from '../../components/Layout'
import { ProductTypeResponse } from '../../models'
import ProductList from '../../components/ProductList'
import useType from '../../hooks/useType'

export interface IncrementInteractProps {}

export default function IncrementInteract() {
  const { productType } = useType()
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

  const productTypeService = productType.slice(24, 32).map((productType: ProductTypeResponse) => ({
    name: productType.slug,
    value: productType._id,
    label: productType.name,
  }))

  return (
    <CategoryLayout
      formFields={productTypeService}
      title="Gian hàng tăng tương tác"
      total={462}
      tabs={tabs}
    />
  )
}
