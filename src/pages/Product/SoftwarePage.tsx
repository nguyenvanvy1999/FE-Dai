import { CategoryLayout } from '../../components/Layout'
import ProductList from '../../components/ProductList'
import { FormSoftwareFields } from '../../models'

export default function SoftwarePage() {
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
      formFields={FormSoftwareFields}
      title="Gian hàng Phần mềm"
      total={112}
      tabs={tabs}
    />
  )
}
