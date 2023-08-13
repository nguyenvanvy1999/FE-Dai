import { CategoryLayout } from '../../components/Layout'
import ProductList from '../../components/ProductList'

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
      //formFields={}
      title="Gian hàng Blockchain"
      total={462}
      tabs={tabs}
    />
  )
}
