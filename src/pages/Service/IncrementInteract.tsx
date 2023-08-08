import { CategoryLayout } from '../../components/Layout'
import { FormEmailFields } from '../../models'
import ProductList from '../../components/ProductList'

export interface IncrementInteractProps {}

export default function IncrementInteract() {
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
      title="Gian hàng tăng tương tác"
      total={462}
      tabs={tabs}
    />
  )
}
