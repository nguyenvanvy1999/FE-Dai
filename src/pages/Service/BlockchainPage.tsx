import { CategoryLayout } from '../../components/Layout'
import ProductList from '../../components/ProductList'
import { FormEmailFields } from '../../models'

export default function BlockchainPage() {
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
      title="Gian hàng Blockchain"
      total={462}
      tabs={tabs}
    />
  )
}
