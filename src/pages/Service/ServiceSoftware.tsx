import ProductList from '../../components/ProductList'

import { CategoryLayout } from '../../components/Layout'

export interface ServiceSoftwareProps {}

export default function ServiceSoftware() {
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
      //formFields={FormEmailFields}
      title="Gian hàng dịch vụ phần mềm"
      total={462}
      tabs={tabs}
    />
  )
}
