import ProductList from '../../components/ProductList'
import { CategoryLayout } from '../../Layout'

export interface ServiceOtherProps {}

export default function ServiceOther() {
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
  return <CategoryLayout title="Gian hàng dịch vụ khác" total={1528} tabs={tabs} />
}
